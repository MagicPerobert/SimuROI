// Test d'intégration : lance un vrai PostgreSQL embarqué, puis exerce l'API de bout en bout.
import EmbeddedPostgres from 'embedded-postgres';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'mp-pg-'));
const pgd = new EmbeddedPostgres({ databaseDir: dir, user: 'postgres', password: 'pw', port: 54329, persistent: false, createPostgresUser: process.getuid?.() === 0 });
await pgd.initialise(); await pgd.start(); await pgd.createDatabase('mp');
process.env.DATABASE_URL = 'postgres://postgres:pw@127.0.0.1:54329/mp';
process.env.ADMIN_PASSWORD = 'secret'; process.env.ADMIN_USER = 'admin';
const { app, migrate, pool } = await import('../server.js');
await migrate(); await migrate(); // idempotent
const srv = app.listen(0); const base = `http://127.0.0.1:${srv.address().port}`;
const auth = { Authorization: 'Basic ' + Buffer.from('admin:secret').toString('base64') };
let cookie = '';
const call = async (p, o = {}) => {
  const r = await fetch(base + p, { redirect: 'manual', ...o, headers: { 'Content-Type': 'application/json', ...(cookie ? { Cookie: cookie } : {}), ...(o.headers || {}) } });
  const sc = r.headers.get('set-cookie'); if (sc) cookie = sc.split(';')[0];
  return r;
};
let n = 0; const ok = (m) => console.log(`  ✓ ${m}`, ++n);
try {
  assert.equal((await call('/healthz')).status, 200); ok('healthcheck');
  { const me = await (await call('/api/me')).json(); assert.equal(me.profile, null); assert.equal(me.firstVisit, true); } ok('visiteur inconnu');
  assert.equal((await call('/api/track', { method: 'POST', body: '{}' })).status, 401); ok('track refusé sans visiteur');
  assert.equal((await call('/api/profile', { method: 'POST', body: JSON.stringify({ first: '', company: '' }) })).status, 400); ok('profil invalide refusé');
  assert.equal((await call('/api/profile', { method: 'POST', body: JSON.stringify({ first: 'Camille', company: 'Laiterie du Val' }) })).status, 400); ok('nom de famille obligatoire');
  assert.equal((await call('/api/profile', { method: 'POST', body: JSON.stringify({ first: 'C', last: 'D', company: 'X' }) })).status, 400); ok('saisies d’un seul caractère refusées');
  const pr = await call('/api/profile', { method: 'POST', body: JSON.stringify({ first: 'Camille', last: 'Durand', company: 'Laiterie du Val', email: 'c@val.example' }) });
  assert.equal(pr.status, 200); assert.ok(cookie.startsWith('mp_vid=')); ok('profil créé + cookie');
  assert.equal((await (await call('/api/me')).json()).profile.company, 'Laiterie du Val'); ok('profil relu');

  const visit = crypto.randomUUID(), now = Date.now();
  const events = [
    { t: now - 5000, type: 'page_view', page: 'simuler' },
    { t: now - 4000, type: 'input_change', k: 'volume', from: 120000, to: 300000 },
    { t: now - 3000, type: 'input_change', k: 'gestion', from: 1.3, to: 1.1 },
    { t: now - 2000, type: 'simulation', inputs: { volume: 300000 }, net: 9451, total: 338851, mpTotal: 329400, seuil: 1.07 },
    { t: now - 1000, type: 'locked_click', module: 'gestion' },
    { t: now, type: 'contact_request', ctx: 'simulation', tel: '0600000000', msg: 'rappelez-moi' },
    { t: now, type: 'EVIL', x: 1 },
  ];
  assert.equal((await call('/api/track', { method: 'POST', body: JSON.stringify({ visit, events, active: 125 }) })).status, 200); ok('événements enregistrés');
  const cnt = await pool.query('SELECT COUNT(*)::int c FROM events'); assert.equal(cnt.rows[0].c, 6); ok('type inconnu ignoré (6 événements)');

  assert.equal((await call('/api/admin/prospects')).status, 401); ok('admin protégé');
  assert.equal((await call('/admin', { headers: { Authorization: 'Basic ' + Buffer.from('admin:bad').toString('base64') } })).status, 401); ok('mauvais mot de passe refusé');
  const list = await (await call('/api/admin/prospects', { headers: auth })).json();
  assert.equal(list.rows.length, 1); const r = list.rows[0];
  assert.equal(r.sims, 1); assert.equal(r.fields, 2); assert.equal(r.locked_total, 1); assert.equal(r.contacted, true); assert.equal(r.active_seconds, 125);
  assert.deepEqual(r.locked_by, { gestion: 1 }); assert.equal(r.last_sim.net, 9451); assert.equal(r.visits, 1); ok('agrégats corrects');
  assert.equal(r.score.total, 6 + 6 + 3 + 2 + 25); ok('score = ' + r.score.total);

  const det = await (await call('/api/admin/prospects/' + r.id, { headers: auth })).json();
  assert.equal(det.events.length, 6); assert.ok(det.link.includes('/p/')); ok('détail + chronologie');

  const inv = await (await call('/api/admin/invitations', { method: 'POST', headers: auth, body: JSON.stringify({ first: 'Bertrand', last: 'L.', company: 'LDC' }) })).json();
  assert.ok(inv.url.includes('/p/')); ok('invitation créée');
  cookie = ''; const lk = await call(new URL(inv.url).pathname);
  assert.equal(lk.status, 302); assert.ok(cookie.startsWith('mp_vid=')); ok('lien personnel pose le cookie');
  { const me = await (await call('/api/me')).json(); assert.equal(me.profile.first, 'Bertrand'); assert.equal(me.firstVisit, true); } ok('visiteur invité reconnu (première visite)');

  const csv = await (await call('/api/admin/export.csv', { headers: auth })).text();
  assert.ok(csv.includes('Laiterie du Val') && csv.includes('LDC')); ok('export CSV');
  const adm = await (await call('/admin', { headers: auth })).text(); assert.ok(adm.includes('data-admin="1"')); ok('page /admin');
  assert.ok(!(await (await call('/')).text()).includes('data-admin')); ok('page publique sans mode admin');
  const lo1 = await call('/admin/logout', { headers: auth }); assert.equal(lo1.status, 401); assert.ok((lo1.headers.get('www-authenticate') || '').startsWith('Basic')); assert.ok((await lo1.text()).includes('déconnecté'));
  const lo2 = await call('/admin/logout'); assert.equal(lo2.status, 200); ok('déconnexion : 401 si identifiants présents, page simple sinon');
  for (const f of ['/favicon.ico', '/favicon-32.png', '/apple-touch-icon.png', '/icon-512.png']) assert.equal((await call(f)).status, 200);
  const man = await call('/site.webmanifest'); assert.equal(man.status, 200); assert.equal((await man.json()).short_name, 'MagicPallet'); ok('icônes et manifeste servis');

  assert.equal((await call('/api/admin/prospects/' + r.id, { method: 'DELETE', headers: auth })).status, 200);
  assert.equal((await pool.query('SELECT COUNT(*)::int c FROM events')).rows[0].c, 0); ok('suppression RGPD en cascade');
  { // même personne, autre navigateur : reconnue sans doublon
    const count = async () => (await pool.query('SELECT COUNT(*)::int c FROM prospects')).rows[0].c;
    const id = (e) => ({ method: 'POST', body: JSON.stringify(e) });
    cookie = ''; assert.equal((await call('/api/profile', id({ first: 'Jeanne', last: 'Martin', company: 'Fromagerie Lenoir', email: 'jm@lenoir.example' }))).status, 200);
    const tokenA = cookie, n0 = await count();
    assert.ok((await call('/api/me')).headers.get('set-cookie').includes('mp_vid=')); ok('cookie renouvelé à chaque visite (12 mois glissants)');
    cookie = ''; await call('/api/profile', id({ first: 'JEANNE', last: 'martin', company: 'fromagerie  lenoir', email: 'JM@LENOIR.EXAMPLE' }));
    assert.equal(cookie, tokenA); assert.equal(await count(), n0); ok('même e-mail (casse différente) : même personne, pas de doublon');
    cookie = ''; const same = await (await call('/api/profile', id({ first: 'Jéanne', last: 'Martin', company: 'Fromagerie Lenoir' }))).json();
    assert.equal(cookie, tokenA); assert.equal(await count(), n0); assert.equal(same.profile.email, ''); ok('même nom + société sans e-mail : retrouvée, e-mail enregistré non divulgué');
    cookie = ''; await call('/api/profile', id({ first: 'Jeanne', last: 'Martin', company: 'Fromagerie Lenoir', email: 'autre@lenoir.example' }));
    assert.notEqual(cookie, tokenA); assert.equal(await count(), n0 + 1); ok('homonyme avec un autre e-mail : personne distincte');
  }
  { // boîte des demandes de recontact : création, statuts, notes
    const J = (b) => ({ method: 'POST', body: JSON.stringify(b) }), P = (b) => ({ method: 'PATCH', headers: { ...auth, 'Content-Type': 'application/json' }, body: JSON.stringify(b) });
    cookie = ''; await call('/api/profile', J({ first: 'Paul', last: 'Dumas', company: 'Brasserie du Nord', email: 'paul@nord.example' }));
    const pid = (await (await call('/api/admin/prospects', { headers: auth })).json()).rows.find((r) => r.company === 'Brasserie du Nord').id;
    const visit = crypto.randomUUID();
    await call('/api/track', J({ visit, active: 5, events: [{ type: 'contact_open', ctx: 'simulation' }, { type: 'contact_request', ctx: 'simulation', mode: 'call', tel: '06 11 22 33 44', msg: 'Rappelez-moi demain matin' }, { type: 'contact_request', ctx: 'demo', from: 'dashboard', email: 'paul@nord.example' }] }));
    const list = async () => (await (await call('/api/admin/requests', { headers: auth })).json()).rows;
    const mine = (await list()).filter((r) => r.prospect.id === pid);
    assert.equal(mine.length, 2); assert.ok(mine.every((r) => r.status === 'new'));
    const rappel = mine.find((r) => r.kind === 'rappel'), demo = mine.find((r) => r.kind === 'demo');
    assert.equal(rappel.tel, '06 11 22 33 44'); assert.equal(rappel.msg, 'Rappelez-moi demain matin'); assert.equal(demo.origin, 'dashboard'); assert.equal(rappel.prospect.company, 'Brasserie du Nord'); ok('une demande de recontact crée une entrée « à traiter »');
    const row = (await (await call('/api/admin/prospects', { headers: auth })).json()).rows.find((r) => r.id === pid);
    assert.equal(row.open_req, 2); assert.equal(row.new_req, 2); ok('la liste des prospects signale les demandes ouvertes');
    let r1 = await call('/api/admin/requests/' + rappel.id, P({ status: 'progress' })); assert.equal((await r1.json()).request.status, 'progress');
    r1 = await (await call('/api/admin/requests/' + rappel.id, P({ status: 'done', note: 'Rappelé, RDV jeudi 10 h' }))).json();
    assert.equal(r1.request.status, 'done'); assert.ok(r1.request.handled_at); assert.equal(r1.request.note, 'Rappelé, RDV jeudi 10 h'); ok('statuts et note enregistrés, date de traitement posée');
    r1 = await (await call('/api/admin/requests/' + rappel.id, P({ status: 'new' }))).json(); assert.equal(r1.request.handled_at, null); ok('une demande rouverte perd sa date de traitement');
    assert.equal((await call('/api/admin/requests/' + rappel.id, P({ status: 'nimporte' }))).status, 400);
    assert.equal((await call('/api/admin/requests/999999', P({ note: 'x' }))).status, 404);
    assert.equal((await call('/api/admin/requests/' + rappel.id, P({}))).status, 400); ok('statut inconnu, demande absente et corps vide refusés');
    for (let i = 0; i < 6; i++) await call('/api/admin/requests/999999', P({ note: 'x' }));   // des erreurs ordinaires (404) ne bloquent pas l'administrateur
    assert.equal((await call('/api/admin/prospects', { headers: auth })).status, 200); ok('des erreurs 404 répétées ne verrouillent pas l’administrateur');
    const csvTxt = await (await call('/api/admin/requests.csv', { headers: auth })).text(); assert.ok(csvTxt.includes('Brasserie du Nord') && csvTxt.includes('Rappelé, RDV')); ok('export CSV des demandes');
    await call('/api/admin/prospects/' + pid, { method: 'DELETE', headers: auth });
    assert.equal((await list()).filter((r) => r.prospect.id === pid).length, 0); ok('suppression d’un prospect : ses demandes disparaissent aussi');
  }
  const bad = { Authorization: 'Basic ' + Buffer.from('admin:x').toString('base64') };
  for (let i = 0; i < 4; i++) assert.equal((await call('/api/admin/prospects', { headers: bad })).status, 401);
  assert.equal((await call('/api/admin/prospects', { headers: bad })).status, 429); ok('blocage après 5 échecs de connexion');
  console.log(`\nTous les tests passent (${n}).`);
} catch (e) { console.error('\nÉCHEC :', e); process.exitCode = 1; }
finally { srv.close(); await pool.end(); await pgd.stop(); fs.rmSync(dir, { recursive: true, force: true }); }
