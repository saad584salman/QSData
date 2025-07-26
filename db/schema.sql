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

CREATE TABLE IF NOT EXISTS sap_projects (
  sr_no INTEGER PRIMARY KEY,
  s_no INTEGER,
  name_of_scheme TEXT,
  no_of_schemes INTEGER,
  executing_agency_name TEXT,
  sector TEXT,
  approved_cost DECIMAL(14,2),
  release DECIMAL(14,2),
  expenditure DECIMAL(14,2),
  start_date DATE,
  completion_date DATE,
  not_started INTEGER,
  started INTEGER,
  status TEXT,
  year TEXT,
  district TEXT,
  division TEXT,
  province TEXT,
  category TEXT,
  pwd_zone TEXT,
  pwd_division TEXT,
  schemes_in_one_admin_approval TEXT,
  originator TEXT,
  approver TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS zone_summary (
  id SERIAL PRIMARY KEY,
  zone TEXT,
  no_of_projects INTEGER,
  approved_cost DECIMAL(14,2),
  no_handed_over INTEGER,
  no_remaining INTEGER
);

CREATE TABLE IF NOT EXISTS psdp_projects (
  id SERIAL PRIMARY KEY,
  classification TEXT,
  psdp_no INTEGER,
  project_name TEXT,
  no_of_projects INTEGER,
  approved_cost DECIMAL(14,2),
  allocation_2024_25 DECIMAL(14,2)
);
