const pool = require('../db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM zone_summary ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
