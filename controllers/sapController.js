const pool = require('../db');

exports.getAll = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM sap_projects ORDER BY sr_no');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.create = async (req, res) => {
  const {
    sr_no,
    s_no,
    name_of_scheme,
    originator,
  } = req.body;
  try {
    const { rows } = await pool.query(
      `INSERT INTO sap_projects (sr_no, s_no, name_of_scheme, originator) VALUES ($1,$2,$3,$4) RETURNING *`,
      [sr_no, s_no, name_of_scheme, originator]
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.update = async (req, res) => {
  const { sr_no } = req.params;
  const { name_of_scheme } = req.body;
  try {
    const { rows } = await pool.query(
      `UPDATE sap_projects SET name_of_scheme=$1, updated_at=CURRENT_TIMESTAMP WHERE sr_no=$2 RETURNING *`,
      [name_of_scheme, sr_no]
    );
    if (!rows.length) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};

exports.remove = async (req, res) => {
  const { sr_no } = req.params;
  try {
    await pool.query('DELETE FROM sap_projects WHERE sr_no=$1', [sr_no]);
    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
};
