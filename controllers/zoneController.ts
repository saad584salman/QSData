import { Request, Response } from 'express';
import pool from '../db/index.js';

export async function getAll(req: Request, res: Response): Promise<void> {
  try {
    const { rows } = await pool.query('SELECT * FROM zone_summary ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}