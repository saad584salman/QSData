import { Request, Response } from 'express';
import pool from '../db/index.js';

export async function getAll(req: Request, res: Response): Promise<void> {
  try {
    const { rows } = await pool.query('SELECT * FROM progress ORDER BY id');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function getById(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  
  try {
    const { rows } = await pool.query(
      'SELECT * FROM progress WHERE id = $1',
      [id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Progress entry not found' });
    }
    
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
}

export async function create(req: Request, res: Response): Promise<void> {
  const { description } = req.body;
  
  // Validate required fields
  if (!description) {
    return res.status(400).json({ 
      errors: ['Description is required'] 
    });
  }
  
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
