import express from 'express';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import pg from 'pg';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === 'production';

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.PGSSL === 'true' ? { rejectUnauthorized: false } : undefined,
  max: 8,
});

export async function migrate() {
  await pool.query(fs.readFileSync(path.join(__dirname, 'db/schema.sql'), 'utf8'));
  const old = await pool.query("SELECT id, first_name, last_name, company FROM prospects WHERE ident_key IS NULL");
  for (const r of old.rows) await pool.query('UPDATE prospects SET ident_key = $2 WHERE id = $1', [r.id, identKey(r.first_name, r.last_name, r.company)]);
  await pool.query(`INSERT INTO requests(prospect_id, kind, origin, tel, email, msg, created_at)
    SELECT e.prospect_id, CASE WHEN e.data->>'mode' = 'rdv' THEN 'rdv' WHEN e.data->>'ctx' = 'demo' THEN 'demo' ELSE 'rappel' END,
      NULLIF(e.data->>'from',''), NULLIF(e.data->>'tel',''), NULLIF(e.data->>'email',''), NULLIF(e.data->>'msg',''), e.at
    FROM events e WHERE e.type = 'contact_request'
      AND NOT EXISTS (SELECT 1 FROM requests r WHERE r.prospect_id = e.prospect_id AND r.created_at = e.at)`);
}

/* ---------- utilitaires ---------- */
const COOKIE = 'mp_vid';
const EVENT_TYPES = new Set(['page_view', 'profile_set', 'input_change', 'simulation', 'stock_estimate', 'advanced_open',
  'locked_click', 'teaser_cta', 'export', 'contact_open', 'contact_request']);
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const newToken = () => crypto.randomBytes(18).toString('base64url');
const cut = (v, n = 120) => (typeof v === 'string' ? v.trim().slice(0, n) : '');
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const normText = (v) => String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const identKey = (f, l, c) => [f, l, c].map(normText).join('|');
const parseCookies = (h) => Object.fromEntries((h || '').split(';').map((s) => s.trim()).filter(Boolean)
  .map((s) => { const i = s.indexOf('='); return [s.slice(0, i), decodeURIComponent(s.slice(i + 1))]; }));
const setVisitor = (res, token) => res.cookie(COOKIE, token, { httpOnly: true, sameSite: 'lax', secure: isProd, maxAge: 365 * 864e5, path: '/' });
const publicProfile = (p) => ({ first: p.first_name || '', last: p.last_name || '', company: p.company || '', email: p.email || '' });
async function visitorOf(req) {
  const t = parseCookies(req.headers.cookie)[COOKIE];
  if (!t || t.length > 64) return null;
  const { rows } = await pool.query('SELECT * FROM prospects WHERE token = $1', [t]);
  return rows[0] || null;
}
const wrap = (fn) => (req, res, next) => fn(req, res, next).catch(next);

/* ---------- score d'intérêt ---------- */
export function scoreOf(r) {
  const parts = [
    ['Simulations', Math.min(30, 6 * r.sims)],
    ['Paramètres renseignés', Math.min(15, 3 * r.fields)],
    ['Retours sur d’autres jours', Math.min(20, 10 * Math.max(0, r.days - 1))],
    ['Menus verrouillés ouverts', Math.min(15, 3 * r.locked_total)],
    ['Temps actif', Math.min(10, Math.floor(r.active_seconds / 60))],
    ['Simulation enregistrée', r.exported ? 10 : 0],
    ['Demande de contact', r.contacted ? 25 : 0],
  ];
  const total = Math.min(100, parts.reduce((a, b) => a + b[1], 0));
  return { total, parts, label: total >= 70 ? 'hot' : total >= 40 ? 'warm' : 'cold' };
}

const AGG_SQL = `
SELECT p.id, p.token, p.first_name, p.last_name, p.company, p.email, p.source, p.created_at, p.last_seen, p.active_seconds,
  COALESCE(a.sims,0)::int sims, COALESCE(a.fields,0)::int fields, COALESCE(a.locked_total,0)::int locked_total,
  COALESCE(a.exported,false) exported, COALESCE(a.contacted,false) contacted, COALESCE(q.open_req,0)::int open_req, COALESCE(q.new_req,0)::int new_req,
  (SELECT COUNT(*) FROM visits v WHERE v.prospect_id = p.id)::int visits,
  (SELECT COUNT(DISTINCT (v.started_at AT TIME ZONE 'Europe/Paris')::date) FROM visits v WHERE v.prospect_id = p.id)::int days,
  (SELECT jsonb_object_agg(m, n) FROM (SELECT data->>'module' m, COUNT(*) n FROM events WHERE prospect_id = p.id AND type = 'locked_click' GROUP BY 1) s) locked_by,
  (SELECT data FROM events WHERE prospect_id = p.id AND type = 'simulation' ORDER BY at DESC, id DESC LIMIT 1) last_sim
FROM prospects p
LEFT JOIN (
  SELECT prospect_id,
    COUNT(*) FILTER (WHERE type = 'simulation') sims,
    COUNT(DISTINCT data->>'k') FILTER (WHERE type = 'input_change') fields,
    COUNT(*) FILTER (WHERE type = 'locked_click') locked_total,
    BOOL_OR(type = 'export') exported,
    BOOL_OR(type = 'contact_request') contacted
  FROM events GROUP BY prospect_id
) a ON a.prospect_id = p.id
LEFT JOIN (
  SELECT prospect_id, COUNT(*) FILTER (WHERE status <> 'done') open_req, COUNT(*) FILTER (WHERE status = 'new') new_req FROM requests GROUP BY prospect_id
) q ON q.prospect_id = p.id`;
const aggRows = async (where = '', params = []) => {
  const { rows } = await pool.query(`${AGG_SQL} ${where} ORDER BY p.last_seen DESC`, params);
  return rows.map((r) => ({ ...r, locked_by: r.locked_by || {}, score: scoreOf(r) }));
};

/* ---------- notification (optionnelle) ---------- */
async function notifyContact(p, ev) {
  const url = process.env.NOTIFY_WEBHOOK_URL;
  if (!url) return;
  const who = [p.first_name, p.last_name].filter(Boolean).join(' ') || 'Visiteur';
  const text = `Demande de contact : ${who} (${p.company || '–'}) · contexte : ${ev.ctx === 'demo' ? 'démo de la plateforme' + (ev.from ? ' (depuis ' + ev.from + ')' : '') : ev.ctx || 'simulation'} · ${ev.mode === 'rdv' ? 'rendez-vous souhaité : ' + [ev.date, ev.slot].filter(Boolean).join(', ') + ' · ' : ''}${ev.tel || ev.email || p.email || 'sans coordonnée'}${ev.msg ? ' · « ' + ev.msg + ' »' : ''}${process.env.PUBLIC_URL ? ' · ' + process.env.PUBLIC_URL.replace(/\/$/, '') + '/admin#demandes' : ''}`;
  try { await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ text, content: text }) }); } catch { /* best effort */ }
}

/* ---------- application ---------- */
export const app = express();
app.set('trust proxy', 1);
app.disable('x-powered-by');
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"], scriptSrc: ["'self'"], styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ['https://fonts.gstatic.com'], imgSrc: ["'self'", 'data:'], connectSrc: ["'self'"],
      frameAncestors: ["'none'"], objectSrc: ["'none'"], baseUri: ["'self'"], formAction: ["'self'"],
    },
  },
  crossOriginEmbedderPolicy: false,
}));

const indexHtml = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');
const adminHtml = indexHtml.replace('<body>', '<body data-admin="1">');
const noStore = (res) => res.set('Cache-Control', 'no-store');

app.get('/healthz', wrap(async (_req, res) => { await pool.query('SELECT 1'); res.json({ ok: true }); }));
app.use(express.static(path.join(__dirname, 'public'), { index: false, maxAge: isProd ? '1h' : 0 }));
app.get('/robots.txt', (_req, res) => res.type('text/plain').send('User-agent: *\nDisallow: /\n'));
app.get('/', (_req, res) => { noStore(res); res.type('html').send(indexHtml); });

/* lien personnel : /p/<token> pose le cookie puis ouvre l'espace */
app.get('/p/:token', wrap(async (req, res) => {
  const t = cut(req.params.token, 64);
  const { rows } = await pool.query('SELECT token FROM prospects WHERE token = $1', [t]);
  if (rows[0]) setVisitor(res, rows[0].token);
  noStore(res); res.redirect(302, '/');
}));

const jsonBody = express.json({ limit: '64kb' });
const limiter = (max) => rateLimit({ windowMs: 60_000, max, standardHeaders: true, legacyHeaders: false });

app.get('/api/me', wrap(async (req, res) => {
  noStore(res);
  const p = await visitorOf(req);
  if (!p) return res.json({ profile: null, firstVisit: true });
  const v = await pool.query('SELECT 1 FROM visits WHERE prospect_id = $1 LIMIT 1', [p.id]);
  setVisitor(res, p.token);
  res.json({ profile: publicProfile(p), firstVisit: v.rowCount === 0 });
}));

app.post('/api/profile', limiter(20), jsonBody, wrap(async (req, res) => {
  const b = req.body || {};
  const first = cut(b.first, 80), last = cut(b.last, 80), company = cut(b.company, 120), email = cut(b.email, 160);
  if (first.length < 2 || last.length < 2 || company.length < 2 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return res.status(400).json({ error: 'invalid' });
  const key = identKey(first, last, company);
  let p = await visitorOf(req), reused = false;
  if (!p) {
    // Même personne sur un autre navigateur ou après effacement des cookies : on la retrouve (même e-mail, ou même nom + société) au lieu de la dédoubler.
    let q = null;
    if (email) q = (await pool.query('SELECT * FROM prospects WHERE lower(email) = lower($1) ORDER BY created_at LIMIT 1', [email])).rows[0];
    if (!q) q = (await pool.query("SELECT * FROM prospects WHERE ident_key = $1 AND (COALESCE(email, '') = '' OR $2 = '' OR lower(email) = lower($2)) ORDER BY created_at LIMIT 1", [key, email])).rows[0];
    if (q) { p = q; reused = true; }
  }
  if (p) {
    const { rows } = await pool.query(
      'UPDATE prospects SET first_name=$2, last_name=$3, company=$4, ident_key=$6, email=COALESCE(NULLIF($5,\'\'), email) WHERE id=$1 RETURNING *', [p.id, first, last, company, email, key]);
    p = rows[0]; if (reused) setVisitor(res, p.token);
  } else {
    const { rows } = await pool.query(
      'INSERT INTO prospects(token, first_name, last_name, company, email, ident_key) VALUES ($1,$2,$3,$4,NULLIF($5,\'\'),$6) RETURNING *', [newToken(), first, last, company, email, key]);
    p = rows[0]; setVisitor(res, p.token);
  }
  res.json({ profile: { first, last, company, email } });   // on ne renvoie jamais l'e-mail enregistré d'une autre saisie
}));

app.post('/api/track', limiter(120), jsonBody, wrap(async (req, res) => {
  const p = await visitorOf(req);
  if (!p) return res.status(401).json({ error: 'no_visitor' });
  const b = req.body || {};
  const visit = UUID_RE.test(b.visit || '') ? b.visit : null;
  const now = Date.now();
  const evs = (Array.isArray(b.events) ? b.events : []).slice(0, 100).filter((e) => e && EVENT_TYPES.has(e.type)).map((e) => {
    const { t, type, ...data } = e;
    let json = JSON.stringify(data); if (json.length > 4000) json = '{}';
    return { type, at: new Date(clamp(Number(t) || now, now - 48 * 3600e3, now + 300e3)), json, raw: e };
  });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    if (visit) await client.query('INSERT INTO visits(id, prospect_id, user_agent) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING', [visit, p.id, cut(req.get('user-agent') || '', 300)]);
    if (evs.length) {
      const vals = [], args = [];
      evs.forEach((e, i) => { vals.push(`($${i * 5 + 1},$${i * 5 + 2},$${i * 5 + 3},$${i * 5 + 4}::jsonb,$${i * 5 + 5})`); args.push(p.id, visit, e.type, e.json, e.at); });
      await client.query(`INSERT INTO events(prospect_id, visit_id, type, data, at) VALUES ${vals.join(',')}`, args);
    }
    for (const e of evs.filter((x) => x.type === 'contact_request')) {
      const r = e.raw;
      await client.query('INSERT INTO requests(prospect_id, kind, origin, tel, email, msg, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7)',
        [p.id, r.mode === 'rdv' ? 'rdv' : r.ctx === 'demo' ? 'demo' : 'rappel', cut(r.from, 80) || null, cut(r.tel, 40) || null, cut(r.email, 160) || null, cut(r.msg, 400) || null, e.at]);
    }
    await client.query('UPDATE prospects SET last_seen = now(), active_seconds = active_seconds + $2 WHERE id = $1', [p.id, clamp(parseInt(b.active, 10) || 0, 0, 600)]);
    await client.query('COMMIT');
  } catch (e) { await client.query('ROLLBACK'); throw e; } finally { client.release(); }
  evs.filter((e) => e.type === 'contact_request').forEach((e) => notifyContact(p, e.raw));
  res.json({ ok: true });
}));

/* ---------- administration (HTTP Basic) ---------- */
const sha = (s) => crypto.createHash('sha256').update(String(s)).digest();
function adminAuth(req, res, next) {
  const user = process.env.ADMIN_USER || 'admin', pass = process.env.ADMIN_PASSWORD;
  if (!pass) return res.status(503).type('text').send('ADMIN_PASSWORD n’est pas défini.');
  const h = req.headers.authorization || '';
  if (h.startsWith('Basic ')) {
    const [u, ...rest] = Buffer.from(h.slice(6), 'base64').toString().split(':');
    if (crypto.timingSafeEqual(sha(u), sha(user)) && crypto.timingSafeEqual(sha(rest.join(':')), sha(pass))) return next();
  }
  res.set('WWW-Authenticate', 'Basic realm="MagicPallet administration", charset="UTF-8"').status(401).type('text').send('Authentification requise.');
}
// Déconnexion : le navigateur garde les identifiants « Basic » en mémoire ; un 401 sur une requête qui en porte les efface.
const loggedOutPage = '<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex"><title>Déconnecté · MagicPallet</title><body style="font-family:system-ui,sans-serif;max-width:520px;margin:12vh auto;padding:0 24px;color:#02075D"><h1>Vous êtes déconnecté.</h1><p><a href="/admin">Se reconnecter</a> · <a href="/">Retour à l’espace découverte</a></p></body>';
app.get('/admin/logout', (req, res) => {
  noStore(res);
  if (req.headers.authorization) res.set('WWW-Authenticate', 'Basic realm="MagicPallet administration", charset="UTF-8"').status(401);
  res.type('html').send(loggedOutPage);
});

// Blocage 15 min après 5 identifiants erronés (seules les tentatives avec en-tête Authorization comptent).
// Seuls les refus d'authentification (401) comptent : une simple erreur 400/404 ne doit jamais bloquer l'administrateur.
const failedLogins = rateLimit({ windowMs: 15 * 60_000, max: 5, skipSuccessfulRequests: true, requestWasSuccessful: (_req, res) => res.statusCode !== 401, skip: (req) => !req.headers.authorization,
  standardHeaders: true, legacyHeaders: false, message: 'Trop de tentatives. Réessayez dans quelques minutes.' });
app.use(['/admin', '/api/admin'], rateLimit({ windowMs: 60_000, max: 300, standardHeaders: true, legacyHeaders: false }), failedLogins, adminAuth);
app.get('/admin', (_req, res) => { noStore(res); res.type('html').send(adminHtml); });

const baseUrl = (req) => (process.env.PUBLIC_URL || `${req.protocol}://${req.get('host')}`).replace(/\/$/, '');

app.get('/api/admin/prospects', wrap(async (_req, res) => { noStore(res); res.json({ rows: await aggRows() }); }));

app.get('/api/admin/prospects/:id', wrap(async (req, res) => {
  noStore(res);
  if (!UUID_RE.test(req.params.id)) return res.status(404).json({ error: 'not_found' });
  const [row] = await aggRows('WHERE p.id = $1', [req.params.id]);
  if (!row) return res.status(404).json({ error: 'not_found' });
  const ev = await pool.query('SELECT type, data, at, visit_id FROM events WHERE prospect_id = $1 ORDER BY at, id LIMIT 2000', [req.params.id]);
  const vs = await pool.query('SELECT id, started_at FROM visits WHERE prospect_id = $1 ORDER BY started_at', [req.params.id]);
  res.json({ prospect: row, link: `${baseUrl(req)}/p/${row.token}`, events: ev.rows, visits: vs.rows });
}));

app.post('/api/admin/invitations', jsonBody, wrap(async (req, res) => {
  const b = req.body || {};
  const first = cut(b.first, 80), last = cut(b.last, 80), company = cut(b.company, 120), email = cut(b.email, 160);
  if (!first && !company) return res.status(400).json({ error: 'invalid' });
  const { rows } = await pool.query(
    "INSERT INTO prospects(token, first_name, last_name, company, email, source, ident_key) VALUES ($1,$2,$3,$4,NULLIF($5,''),'invitation',$6) RETURNING token, id",
    [newToken(), first, last, company, email, identKey(first, last, company)]);
  res.json({ id: rows[0].id, url: `${baseUrl(req)}/p/${rows[0].token}` });
}));

app.delete('/api/admin/prospects/:id', wrap(async (req, res) => {
  if (!UUID_RE.test(req.params.id)) return res.status(404).json({ error: 'not_found' });
  await pool.query('DELETE FROM prospects WHERE id = $1', [req.params.id]);
  res.json({ ok: true });
}));

const REQ_STATUS = new Set(['new', 'progress', 'done']);
app.get('/api/admin/requests', wrap(async (_req, res) => {
  noStore(res);
  const { rows } = await pool.query('SELECT * FROM requests ORDER BY created_at DESC LIMIT 1000');
  const pr = new Map((await aggRows()).map((r) => [r.id, r]));
  res.json({ rows: rows.map((q) => { const p = pr.get(q.prospect_id) || {}; return { ...q, prospect: { id: p.id, first_name: p.first_name, last_name: p.last_name, company: p.company, email: p.email, visits: p.visits, score: p.score, last_sim: p.last_sim } }; }) });
}));
app.patch('/api/admin/requests/:id', jsonBody, wrap(async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (!Number.isInteger(id)) return res.status(404).json({ error: 'not_found' });
  const b = req.body || {}, sets = [], args = [id];
  if (b.status !== undefined) {
    if (!REQ_STATUS.has(b.status)) return res.status(400).json({ error: 'invalid' });
    args.push(b.status); sets.push(`status = $${args.length}`, `handled_at = ${b.status === 'done' ? 'now()' : 'NULL'}`);
  }
  if (b.note !== undefined) { args.push(cut(b.note, 2000)); sets.push(`note = $${args.length}`); }
  if (!sets.length) return res.status(400).json({ error: 'invalid' });
  const { rows } = await pool.query(`UPDATE requests SET ${sets.join(', ')} WHERE id = $1 RETURNING *`, args);
  if (!rows[0]) return res.status(404).json({ error: 'not_found' });
  res.json({ request: rows[0] });
}));

const csv = (v) => { v = v == null ? '' : String(v); return /[;"\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v; };
app.get('/api/admin/requests.csv', wrap(async (_req, res) => {
  const { rows } = await pool.query(`SELECT q.*, p.first_name, p.last_name, p.company, p.email p_email FROM requests q JOIN prospects p ON p.id = q.prospect_id ORDER BY q.created_at DESC`);
  const lab = { rappel: 'Rappel', demo: 'Démo', rdv: 'Rendez-vous' }, st = { new: 'À traiter', progress: 'En cours', done: 'Traitée' };
  const lines = [['Reçue le', 'Statut', 'Type', 'Prénom', 'Nom', 'Société', 'Téléphone', 'E-mail', 'Message', 'Origine', 'Note', 'Traitée le'],
    ...rows.map((r) => [r.created_at.toISOString(), st[r.status], lab[r.kind], r.first_name, r.last_name, r.company, r.tel, r.email || r.p_email, r.msg, r.origin, r.note, r.handled_at ? r.handled_at.toISOString() : ''])];
  res.set({ 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="demandes-recontact.csv"' });
  res.send('\ufeff' + lines.map((l) => l.map(csv).join(';')).join('\n'));
}));
app.get('/api/admin/export.csv', wrap(async (_req, res) => {
  const rows = await aggRows();
  const head = ['Prénom', 'Nom', 'Société', 'E-mail', 'Score', 'Première visite', 'Dernière activité', 'Visites', 'Temps actif (s)', 'Simulations', 'Menus verrouillés', 'Contact demandé', 'Dernier gain simulé (€)'];
  const lines = [head, ...rows.map((r) => [r.first_name, r.last_name, r.company, r.email, r.score.total, r.created_at.toISOString(), r.last_seen.toISOString(), r.visits, r.active_seconds, r.sims,
    Object.entries(r.locked_by).map(([k, n]) => `${k}×${n}`).join(' '), r.contacted ? 'oui' : 'non', r.last_sim ? r.last_sim.net : ''])];
  res.set({ 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename="suivi-prospects.csv"' });
  res.send('\ufeff' + lines.map((l) => l.map(csv).join(';')).join('\n'));
}));

app.use((err, _req, res, _next) => { console.error(err); res.status(err.status || 500).json({ error: 'server_error' }); });

/* ---------- conservation des données ---------- */
const RETENTION_DAYS = parseInt(process.env.RETENTION_DAYS || '365', 10);
export async function purgeOld() {
  await pool.query("DELETE FROM prospects WHERE last_seen < now() - ($1 || ' days')::interval", [String(RETENTION_DAYS)]);
}

/* ---------- démarrage ---------- */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (!process.env.DATABASE_URL) { console.error('DATABASE_URL manquant (ajoutez le plugin PostgreSQL sur Railway).'); process.exit(1); }
  await migrate();
  purgeOld().catch(() => {}); setInterval(() => purgeOld().catch(() => {}), 24 * 3600e3);
  app.listen(process.env.PORT || 3000, '0.0.0.0', () => console.log('Simulateur MagicPallet prêt'));
}
