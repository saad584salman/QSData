import request from 'supertest';
import express from 'express';
import apiRoutes from '../routes/api.js';
import { errorHandler } from '../middleware/errorHandler.js';
import '../config/database.js';

const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
app.use(errorHandler);

describe('Projects API', () => {
  describe('GET /api/projects', () => {
    it('should return a list of projects', async () => {
      const response = await request(app)
        .get('/api/projects')
        .expect(200);

      expect(response.body).toHaveProperty('projects');
      expect(response.body).toHaveProperty('pagination');
      expect(Array.isArray(response.body.projects)).toBe(true);
    });

    it('should support pagination', async () => {
      const response = await request(app)
        .get('/api/projects?page=1&limit=5')
        .expect(200);

      expect(response.body.pagination.page).toBe(1);
      expect(response.body.pagination.limit).toBe(5);
    });

    it('should filter by property', async () => {
      const response = await request(app)
        .get('/api/projects?property=Category&value=Infrastructure')
        .expect(200);

      expect(response.body.projects).toBeDefined();
    });
  });

  describe('GET /api/projects/:id', () => {
    it('should return a specific project', async () => {
      const response = await request(app)
        .get('/api/projects/1')
        .expect(200);

      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('name');
      expect(response.body).toHaveProperty('entityProperties');
    });

    it('should return 404 for non-existent project', async () => {
      await request(app)
        .get('/api/projects/999')
        .expect(404);
    });
  });

  describe('POST /api/projects', () => {
    it('should create a new project', async () => {
      const projectData = {
        name: 'Test Project',
        parent_project_id: null,
        properties: [
          {
            property_definition_id: 1,
            value_type: 'string',
            value: 'Test Category'
          }
        ]
      };

      const response = await request(app)
        .post('/api/projects')
        .send(projectData)
        .expect(201);

      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe('Test Project');
    });

    it('should validate required fields', async () => {
      const response = await request(app)
        .post('/api/projects')
        .send({})
        .expect(400);

      expect(response.body).toHaveProperty('errors');
    });
  });

  describe('PUT /api/projects/:id', () => {
    it('should update an existing project', async () => {
      const updateData = {
        name: 'Updated Project Name',
        properties: [
          {
            property_definition_id: 1,
            value_type: 'string',
            value: 'Updated Category'
          }
        ]
      };

      const response = await request(app)
        .put('/api/projects/1')
        .send(updateData)
        .expect(200);

      expect(response.body.name).toBe('Updated Project Name');
    });
  });

  describe('DELETE /api/projects/:id', () => {
    it('should delete a project', async () => {
      await request(app)
        .delete('/api/projects/1')
        .expect(200);

      // Verify it's deleted
      await request(app)
        .get('/api/projects/1')
        .expect(404);
    });
  });
}); 