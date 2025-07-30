CREATE TABLE IF NOT EXISTS progress (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS zone_summary (
  id SERIAL PRIMARY KEY,
  zone TEXT,
  no_of_projects INTEGER,
  approved_cost DECIMAL(14,2),
  no_handed_over INTEGER,
  no_remaining INTEGER
);
