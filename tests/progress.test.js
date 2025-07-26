const request = require('supertest');
const express = require('express');
const progressRouter = require('../routes/progress');

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
    const res = await request(app).get('/api/progress');
    expect(Array.isArray(res.body)).toBe(true);
  });
});
