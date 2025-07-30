import request from 'supertest';
import express from 'express';
import db from '../config/database.js';
import progressRouter from '../routes/progress.js';

const app = express();
app.use(express.json());
app.use('/api/progress', progressRouter);

describe('Progress API', () => {
  let authToken;

  beforeAll(async () => {
    // Wait for database connection
    await waitForDatabase(db);
    
    // Setup test data
    await setupTestData(db);
    
    // Generate test token
    authToken = generateTestToken();
  });

  afterAll(async () => {
    // Clean up database
    await cleanupDatabase(db);
    await db.destroy();
  });

  beforeEach(async () => {
    // Reset database state before each test
    await cleanupDatabase(db);
    await setupTestData(db);
  });

  describe('GET /api/progress', () => {
    it('should return progress entries', async () => {
      const response = await request(app)
        .get('/api/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return 401 without authentication', async () => {
      await request(app)
        .get('/api/progress')
        .expect(401);
    });
  });

  describe('POST /api/progress', () => {
    it('should create a new progress entry', async () => {
      const progressData = {
        description: 'Test progress entry',
        project_id: 1,
        status: 'in_progress'
      };

      const response = await request(app)
        .post('/api/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .send(progressData)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.description).toBe('Test progress entry');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });

    it('should return 401 without authentication', async () => {
      await request(app)
        .post('/api/progress')
        .send({ description: 'Test entry' })
        .expect(401);
    });
  });

  describe('GET /api/progress/:id', () => {
    it('should return a specific progress entry', async () => {
      // First create a progress entry
      const progressData = {
        description: 'Test progress entry',
        project_id: 1,
        status: 'in_progress'
      };

      const createResponse = await request(app)
        .post('/api/progress')
        .set('Authorization', `Bearer ${authToken}`)
        .send(progressData);

      const progressId = createResponse.body.id;

      const response = await request(app)
        .get(`/api/progress/${progressId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body.description).toBe('Test progress entry');
    });

    it('should return 404 for non-existent progress entry', async () => {
      await request(app)
        .get('/api/progress/999')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });

    it('should return 401 without authentication', async () => {
      await request(app)
        .get('/api/progress/1')
        .expect(401);
    });
  });
});
