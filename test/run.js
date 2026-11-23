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
  const bad = { Authorization: 'Basic ' + Buffer.from('admin:x').toString('base64') };
  for (let i = 0; i < 4; i++) assert.equal((await call('/api/admin/prospects', { headers: bad })).status, 401);
  assert.equal((await call('/api/admin/prospects', { headers: bad })).status, 429); ok('blocage après 5 échecs de connexion');
  console.log(`\nTous les tests passent (${n}).`);
} catch (e) { console.error('\nÉCHEC :', e); process.exitCode = 1; }
finally { srv.close(); await pool.end(); await pgd.stop(); fs.rmSync(dir, { recursive: true, force: true }); }
