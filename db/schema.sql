-- Schéma idempotent : exécuté au démarrage du serveur.
CREATE TABLE IF NOT EXISTS prospects (
  id             uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  token          text NOT NULL UNIQUE,          -- identifiant secret du lien personnel / du cookie
  first_name     text,
  last_name      text,
  company        text,
  email          text,
  source         text NOT NULL DEFAULT 'direct', -- 'invitation' si créé depuis le back office
  created_at     timestamptz NOT NULL DEFAULT now(),
  last_seen      timestamptz NOT NULL DEFAULT now(),
  active_seconds integer NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS visits (
  id          uuid PRIMARY KEY,
  prospect_id uuid NOT NULL REFERENCES prospects(id) ON DELETE CASCADE,
  started_at  timestamptz NOT NULL DEFAULT now(),
  user_agent  text
);
CREATE INDEX IF NOT EXISTS visits_prospect_idx ON visits (prospect_id, started_at);

CREATE TABLE IF NOT EXISTS events (
  id          bigserial PRIMARY KEY,
  prospect_id uuid NOT NULL REFERENCES prospects(id) ON DELETE CASCADE,
  visit_id    uuid,
  type        text NOT NULL,
  data        jsonb NOT NULL DEFAULT '{}'::jsonb,
  at          timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS events_prospect_idx ON events (prospect_id, at);
CREATE INDEX IF NOT EXISTS events_type_idx ON events (type);
