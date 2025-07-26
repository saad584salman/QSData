CREATE TABLE IF NOT EXISTS progress (
  id SERIAL PRIMARY KEY,
  description TEXT NOT NULL,
  completed BOOLEAN DEFAULT false
);
