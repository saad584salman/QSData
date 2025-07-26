const pool = require('../db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM progress ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.create = async (req, res) => {
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
};
