import request from 'supertest';
import express from 'express';
import apiRoutes from '../routes/api.js';
import { errorHandler } from '../middleware/errorHandler.js';
import db from '../config/database.js';
const app = express();
app.use(express.json());
app.use('/api', apiRoutes);
app.use(errorHandler);
describe('Projects API', () => {
    let authToken;
    let testDataIds;
    beforeAll(async () => {
        // Wait for database connection
        await waitForDatabase(db);
        // Setup test data
        await setupTestData(db);
        // Get test data IDs
        testDataIds = await getTestDataIds(db);
        // Debug: Check what user ID we have
        console.log('🔍 Test data IDs:', testDataIds);
        // Generate test token with actual user ID
        authToken = generateTestToken({ id: testDataIds.userId || 1 });
        // Debug: Check what user ID is in the token
        console.log('🔍 Auth token user ID:', testDataIds.userId || 1);
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
        // Refresh test data IDs
        testDataIds = await getTestDataIds(db);
        // Refresh auth token with new user ID
        authToken = generateTestToken({ id: testDataIds.userId || 1 });
    });
    describe('GET /api/projects', () => {
        it('should return a list of projects', async () => {
            const response = await request(app)
                .get('/api/projects')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body).toHaveProperty('projects');
            expect(response.body).toHaveProperty('pagination');
            expect(Array.isArray(response.body.projects)).toBe(true);
        });
        it('should support pagination', async () => {
            const response = await request(app)
                .get('/api/projects?page=1&limit=5')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.pagination.page).toBe(1);
            expect(response.body.pagination.limit).toBe(5);
        });
        it('should filter by property', async () => {
            const response = await request(app)
                .get('/api/projects?property=category&value=Infrastructure')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body.projects).toBeDefined();
        });
        it('should return 401 without authentication', async () => {
            await request(app)
                .get('/api/projects')
                .expect(401);
        });
    });
    describe('GET /api/projects/:id', () => {
        it('should return a specific project', async () => {
            if (!testDataIds.projectId) {
                console.log('⚠️ Skipping test - no test project available');
                return;
            }
            const response = await request(app)
                .get(`/api/projects/${testDataIds.projectId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            expect(response.body).toHaveProperty('id');
            expect(response.body).toHaveProperty('name');
            expect(response.body).toHaveProperty('entityProperties');
        });
        it('should return 404 for non-existent project', async () => {
            await request(app)
                .get('/api/projects/999')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('should return 401 without authentication', async () => {
            if (!testDataIds.projectId) {
                console.log('⚠️ Skipping test - no test project available');
                return;
            }
            await request(app)
                .get(`/api/projects/${testDataIds.projectId}`)
                .expect(401);
        });
    });
    describe('POST /api/projects', () => {
        it('should create a new project', async () => {
            const projectData = {
                name: 'Test Project',
                parent_project_id: null,
                properties: [
                    {
                        property_definition_id: testDataIds.propertyDefinitionId || 1,
                        value_type: 'string',
                        value: 'Test Category'
                    }
                ]
            };
            const response = await request(app)
                .post('/api/projects')
                .set('Authorization', `Bearer ${authToken}`)
                .send(projectData);
            if (response.status !== 201) {
                console.log('❌ Project creation failed:', response.status, response.body);
            }
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('Test Project');
        });
        it('should validate required fields', async () => {
            const response = await request(app)
                .post('/api/projects')
                .set('Authorization', `Bearer ${authToken}`)
                .send({})
                .expect(400);
            expect(response.body).toHaveProperty('errors');
        });
        it('should return 401 without authentication', async () => {
            await request(app)
                .post('/api/projects')
                .send({ name: 'Test Project' })
                .expect(401);
        });
    });
    describe('PUT /api/projects/:id', () => {
        it('should update an existing project', async () => {
            if (!testDataIds.projectId || !testDataIds.propertyDefinitionId) {
                console.log('⚠️ Skipping test - no test data available');
                return;
            }
            const updateData = {
                name: 'Updated Project Name',
                properties: [
                    {
                        property_definition_id: testDataIds.propertyDefinitionId,
                        value_type: 'string',
                        value: 'Updated Category'
                    }
                ]
            };
            const response = await request(app)
                .put(`/api/projects/${testDataIds.projectId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .send(updateData)
                .expect(200);
            expect(response.body.name).toBe('Updated Project Name');
        });
        it('should return 401 without authentication', async () => {
            if (!testDataIds.projectId) {
                console.log('⚠️ Skipping test - no test project available');
                return;
            }
            await request(app)
                .put(`/api/projects/${testDataIds.projectId}`)
                .send({ name: 'Updated Project' })
                .expect(401);
        });
    });
    describe('DELETE /api/projects/:id', () => {
        it('should delete a project', async () => {
            if (!testDataIds.projectId) {
                console.log('⚠️ Skipping test - no test project available');
                return;
            }
            await request(app)
                .delete(`/api/projects/${testDataIds.projectId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(200);
            // Verify it's deleted
            await request(app)
                .get(`/api/projects/${testDataIds.projectId}`)
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('should return 401 without authentication', async () => {
            if (!testDataIds.projectId) {
                console.log('⚠️ Skipping test - no test project available');
                return;
            }
            await request(app)
                .delete(`/api/projects/${testDataIds.projectId}`)
                .expect(401);
        });
    });
});
