import pool from '../db/index.js';

export async function getAll(req, res) {
  try {
    const { rows } = await pool.query('SELECT * FROM progress ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function create(req, res) {
  const { description } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO progress (description) VALUES ($1) RETURNING *',
      [description]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}
