const request = require('supertest');
const express = require('express');
const progressRouter = require('../routes/progress');
const jwt = require('jsonwebtoken');

jest.mock('../db', () => {
  return {
    query: jest.fn().mockResolvedValue({ rows: [] }),
  };
});

const app = express();
app.use(express.json());
app.use('/api/progress', progressRouter);

describe('GET /api/progress', () => {
  it('responds with array', async () => {
    const token = jwt.sign(
      { username: 'test' },
      process.env.JWT_SECRET || 'secret',
    );
    const res = await request(app)
      .get('/api/progress')
      .set('Authorization', `Bearer ${token}`);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
