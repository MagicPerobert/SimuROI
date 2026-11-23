# Simulateur d'économies MagicPallet : espace prospect + suivi

Une petite application Node.js + PostgreSQL, prête pour Railway.

- **`/`** : l'espace découverte du prospect (simulateur, menus verrouillés, demande de contact).
- **`/p/<lien>`** : lien personnel créé par vous. Le prospect est reconnu sans rien saisir.
- **`/admin`** : votre back office (mot de passe) : score d'intérêt, chronologie de chaque prospect, invitations, export CSV, suppression.

Tout ce que fait un prospect est enregistré dans PostgreSQL : pages vues, paramètres modifiés (avec l'ancienne et la nouvelle valeur), simulations, menus verrouillés cliqués, export, demandes de contact, temps actif, retours sur d'autres jours.

## Déployer sur Railway (≈ 10 minutes)

1. Mettez ce dossier dans un dépôt GitHub (privé de préférence).
2. Sur Railway : **New Project → Deploy from GitHub repo**, et choisissez le dépôt.
3. Dans le même projet : **+ New → Database → Add PostgreSQL**.
4. Ouvrez le service de l'application → **Variables** :
   - `DATABASE_URL` = `${{Postgres.DATABASE_URL}}` (référence au plugin)
   - `ADMIN_PASSWORD` = un mot de passe long (**obligatoire**)
   - `ADMIN_USER` = `admin` (facultatif)
   - `PUBLIC_URL` = l'adresse publique, par exemple `https://espace.magicpallet.com`
   - `NOTIFY_WEBHOOK_URL` = un webhook Slack, Teams ou Make pour être alerté à chaque demande de contact (facultatif)
5. **Settings → Networking → Generate Domain** (ou *Custom Domain* pour `espace.magicpallet.com`).
6. Le schéma de base se crée tout seul au premier démarrage. Ouvrez `/admin`.

En ligne de commande : `railway init`, `railway add -d postgres`, `railway up`, puis les variables du point 4.

## Identification des visiteurs

À leur arrivée, les visiteurs non invités doivent renseigner **prénom, nom et société** (e-mail facultatif) avant d'accéder au simulateur. Leur activité est ensuite suivie dans `/admin`. Les prospects invités par lien personnel sont déjà connus et n'ont pas à le refaire.

## Reconnaissance des visiteurs

- Même navigateur : un cookie (`mp_vid`) reconnaît le visiteur pendant 12 mois, renouvelés à chaque visite. Il n'a pas à se ré-identifier.
- Autre navigateur, autre appareil, cookies effacés ou navigation privée : le visiteur ressaisit le petit formulaire, mais il est **retrouvé** (même e-mail, ou même prénom + nom + société) et rattaché à sa fiche existante : pas de doublon dans `/admin`.
- Deux homonymes de la même société avec des e-mails différents restent deux fiches distinctes.
- Les doublons créés avant cette règle ne sont pas fusionnés : supprimez-les depuis `/admin`.

## Fiche prospect

La fiche d'un prospect affiche, pour sa dernière simulation, **toutes ses saisies** (volume, sites, coût facturé par ses transporteurs, heures de suivi, stock, achats d'urgence, palettes perdues, hypothèses) et le **détail du calcul** jusqu'au gain net. Chaque ligne « Simulation » de la chronologie rappelle le volume, les sites et le coût saisis.

## Demandes de recontact

Chaque demande (« En discuter ensemble », démonstration depuis un menu verrouillé, « Parler à un expert ») devient une entrée dans l'onglet **Demandes de recontact** de `/admin`, avec un statut : *À traiter*, *En cours*, *Traitée*.

- La carte donne le contact (lien pour appeler, lien pour écrire), le message, la dernière simulation du prospect et son niveau d'intérêt, un lien vers sa fiche et un champ de note interne enregistré automatiquement.
- Les demandes les plus anciennes non traitées passent en premier ; après 24 h sans traitement, leur ancienneté s'affiche en orange.
- Un compteur rouge apparaît dans le menu et dans le titre de l'onglet du navigateur ; la liste des prospects signale ceux qui ont une demande ouverte.
- Si `NOTIFY_WEBHOOK_URL` et `PUBLIC_URL` sont définis, la notification contient un lien direct vers `/admin#demandes`.
- Export : bouton « Exporter » (CSV des demandes). La suppression d'un prospect supprime ses demandes.
- Le blocage de 15 minutes ne compte plus que les refus de mot de passe (401), pas les erreurs ordinaires.

## Se connecter et se déconnecter

`/admin` demande l'identifiant et le mot de passe (`ADMIN_USER`, `ADMIN_PASSWORD`). Pour sortir : menu de compte en haut à droite → **Se déconnecter**. Si le navigateur garde la session (Safari, par exemple), fermez toutes ses fenêtres ou utilisez une fenêtre privée.

## Utilisation

- **Inviter un prospect** : `/admin` → *Nouvelle invitation* → copiez le lien et envoyez-le. Sa première visite affiche un message d'accueil avec l'information sur la conservation des données ; le suivi ne démarre qu'après son clic.
- **Lien générique** (sans invitation) : le prospect renseigne prénom et société avant d'accéder au simulateur.
- **Score d'intérêt** (0 à 100, détaillé dans chaque fiche) : simulations (jusqu'à 30), paramètres renseignés (15), retours un autre jour (20), menus verrouillés ouverts (15), temps actif (10), simulation enregistrée (10), demande de contact (25). Chaud ≥ 70, tiède ≥ 40.

## Données personnelles

- Cookie technique `mp_vid` (httpOnly, 1 an) pour reconnaître le prospect. Aucune adresse IP n'est stockée.
- Back office : blocage de 15 minutes après 5 identifiants erronés, depuis une même adresse.
- Suppression d'un prospect et de tout son historique : fiche → *Supprimer*. Suppression automatique après `RETENTION_DAYS` jours d'inactivité (365 par défaut).
- À faire valider par votre DPO : mention dans votre politique de confidentialité, base légale (intérêt légitime), durée de conservation.

## Logo Carrefour

Le logo Carrefour s'affiche à côté de la mention « Process intégré aux accords RSE de Carrefour ». Pour le retirer, mettre `logoCarrefour:false` dans `CFG` (`public/app.js`). À faire valider par Carrefour avant diffusion à des prospects.

## Exemple affiché à l'arrivée

Tant que le visiteur n'a pas saisi son coût de gestion palettes, le panneau de droite montre un gain *d'exemple*, étiqueté comme tel, calculé à `exempleGestion` (1,50 € par palette, milieu de la fourchette 1 € à 2 €). Pour changer la valeur ou la retirer (retour au seuil de rentabilité seul) : `exempleGestion:null` dans `CFG` (`public/app.js`). L'exemple n'apparaît que s'il est positif.

## Adapter la grille de prix

Tout est en haut de `public/app.js`, dans la constante `CFG` (paliers de relocalisation, de logiciel, de consolidation) et `DEF` (valeurs par défaut du simulateur).

## En local

```bash
cp .env.example .env     # puis renseignez DATABASE_URL et ADMIN_PASSWORD
npm install
npm start                # http://localhost:3000   (admin : /admin)
npm test                 # test d'intégration avec un PostgreSQL embarqué
```

## Structure

```
server.js          API, administration, lien personnel, purge
db/schema.sql      3 tables : prospects, visits, events (créées au démarrage)
public/            interface (index.html, app.js, app.css)
test/run.js        20 vérifications de bout en bout
```

## Intégrer plus tard dans votre SaaS

Les événements sont uniformes (`type` + `data`). Pour passer cette rubrique dans votre SaaS, seule la fonction d'envoi `Tr.flush` de `public/app.js` et les 4 routes `/api/*` sont à reprendre dans votre back-end.
