import pool from '../db/index.js';

export async function getAll(req, res) {
  try {
    const { rows } = await pool.query('SELECT * FROM psdp_projects ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}
