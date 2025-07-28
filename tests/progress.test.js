import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import { jest } from '@jest/globals';

jest.unstable_mockModule('../db/index.js', () => ({
  default: { query: jest.fn().mockResolvedValue({ rows: [] }) }
}));

const { default: progressRouter } = await import('../routes/progress.js');
await import('../db/index.js');

const app = express();
app.use(express.json());
app.use('/api/progress', progressRouter);

describe('GET /api/progress', () => {
  it('responds with array', async () => {
    const token = jwt.sign({ username: 'test' }, process.env.JWT_SECRET || 'secret');
    const res = await request(app)
      .get('/api/progress')
      .set('Authorization', `Bearer ${token}`);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
