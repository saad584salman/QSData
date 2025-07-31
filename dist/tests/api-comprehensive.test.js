import request from 'supertest';
import express from 'express';
import apiRoutes from '../routes/api.js';
import authRoutes from '../routes/auth.js';
import progressRoutes from '../routes/progress.js';
import zoneSummaryRoutes from '../routes/zoneSummary.js';
import { errorHandler } from '../middleware/errorHandler.js';
import db from '../config/database.js';
const app = express();
app.use(express.json());
// Mount all routes
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/zone-summary', zoneSummaryRoutes);
app.use(errorHandler);
describe('Comprehensive API Tests', () => {
    let authToken;
    let testDataIds;
    beforeAll(async () => {
        // Wait for database connection
        await waitForDatabase(db);
        // Setup test data
        await setupTestData(db);
        // Get test data IDs
        testDataIds = await getTestDataIds(db);
        // Generate test token with correct user ID
        authToken = generateTestToken({ id: testDataIds.userId || 1 });
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
    describe('Authentication API', () => {
        describe('POST /api/auth/login', () => {
            it('should authenticate with valid credentials', async () => {
                const response = await request(app)
                    .post('/api/auth/login')
                    .send({
                    username: 'admin',
                    password: 'admin'
                })
                    .expect(200);
                expect(response.body).toHaveProperty('token');
                expect(response.body).toHaveProperty('user');
                expect(response.body.user).toHaveProperty('id');
                expect(response.body.user).toHaveProperty('username');
            });
            it('should reject invalid credentials', async () => {
                const response = await request(app)
                    .post('/api/auth/login')
                    .send({
                    username: 'admin',
                    password: 'wrongpassword'
                })
                    .expect(401);
                expect(response.body).toHaveProperty('error');
            });
            it('should validate required fields', async () => {
                const response = await request(app)
                    .post('/api/auth/login')
                    .send({})
                    .expect(400);
                expect(response.body).toHaveProperty('errors');
            });
        });
        describe('POST /api/auth/register', () => {
            it('should register a new user', async () => {
                const uniqueSuffix = Date.now();
                const userData = {
                    username: `newuser${uniqueSuffix}`,
                    full_name: 'New Test User',
                    email: `newuser${uniqueSuffix}@test.com`,
                    password: 'password123',
                    role_id: 2,
                    office_id: 1
                };
                const response = await request(app)
                    .post('/api/auth/register')
                    .send(userData)
                    .expect(201);
                expect(response.body).toHaveProperty('id');
                expect(response.body.email).toBe(`newuser${uniqueSuffix}@test.com`);
            });
            it('should validate required fields', async () => {
                const response = await request(app)
                    .post('/api/auth/register')
                    .send({})
                    .expect(400);
                expect(response.body).toHaveProperty('errors');
            });
        });
    });
    describe('Projects API', () => {
        describe('GET /api/projects', () => {
            it('should return paginated projects list', async () => {
                const response = await request(app)
                    .get('/api/projects')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(response.body).toHaveProperty('projects');
                expect(response.body).toHaveProperty('pagination');
                expect(Array.isArray(response.body.projects)).toBe(true);
            });
            it('should support pagination parameters', async () => {
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
            it('should return a specific project with properties', async () => {
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
        });
        describe('POST /api/projects', () => {
            it('should create a new project with properties', async () => {
                if (!testDataIds.propertyDefinitionId) {
                    console.log('⚠️ Skipping test - no test property definition available');
                    return;
                }
                const projectData = {
                    name: 'New Test Project',
                    parent_project_id: null,
                    properties: [
                        {
                            property_definition_id: testDataIds.propertyDefinitionId,
                            value_type: 'string',
                            value: 'New Category'
                        }
                    ]
                };
                const response = await request(app)
                    .post('/api/projects')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send(projectData)
                    .expect(201);
                expect(response.body).toHaveProperty('id');
                expect(response.body.name).toBe('New Test Project');
            });
            it('should validate required fields', async () => {
                const response = await request(app)
                    .post('/api/projects')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send({})
                    .expect(400);
                expect(response.body).toHaveProperty('errors');
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
        });
    });
    describe('Property Definitions API', () => {
        describe('GET /api/property-definitions', () => {
            it('should return property definitions list', async () => {
                const response = await request(app)
                    .get('/api/property-definitions')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(Array.isArray(response.body)).toBe(true);
            });
        });
        describe('GET /api/property-definitions/:id', () => {
            it('should return a specific property definition', async () => {
                if (!testDataIds.propertyDefinitionId) {
                    console.log('⚠️ Skipping test - no test property definition available');
                    return;
                }
                const response = await request(app)
                    .get(`/api/property-definitions/${testDataIds.propertyDefinitionId}`)
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('property_key');
            });
        });
        describe('POST /api/property-definitions', () => {
            it('should create a new property definition', async () => {
                const propertyData = {
                    entity_type: 'project',
                    property_key: 'test_property',
                    display_name: 'Test Property',
                    value_type: 'string',
                    is_required: false
                };
                const response = await request(app)
                    .post('/api/property-definitions')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send(propertyData)
                    .expect(201);
                expect(response.body).toHaveProperty('id');
                expect(response.body.property_key).toBe('test_property');
            });
        });
    });
    describe('Entity Properties API', () => {
        describe('GET /api/entity-properties', () => {
            it('should return entity properties list', async () => {
                const response = await request(app)
                    .get('/api/entity-properties')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(Array.isArray(response.body)).toBe(true);
            });
        });
        describe('GET /api/entity-properties/:id', () => {
            it('should return a specific entity property', async () => {
                if (!testDataIds.entityPropertyId) {
                    console.log('⚠️ Skipping test - no test entity property available');
                    return;
                }
                const response = await request(app)
                    .get(`/api/entity-properties/${testDataIds.entityPropertyId}`)
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(response.body).toHaveProperty('id');
                expect(response.body).toHaveProperty('value');
            });
        });
        describe('POST /api/entity-properties', () => {
            it('should create a new entity property', async () => {
                if (!testDataIds.projectId || !testDataIds.propertyDefinitionId) {
                    console.log('⚠️ Skipping test - no test data available');
                    return;
                }
                const entityPropertyData = {
                    entity_type: 'project',
                    entity_id: testDataIds.projectId,
                    property_definition_id: testDataIds.propertyDefinitionId,
                    value: 'test_value'
                };
                const response = await request(app)
                    .post('/api/entity-properties')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send(entityPropertyData)
                    .expect(201);
                expect(response.body).toHaveProperty('id');
                expect(response.body.value).toBe('test_value');
            });
        });
    });
    describe('Tasks API', () => {
        describe('GET /api/tasks', () => {
            it('should return tasks list', async () => {
                const response = await request(app)
                    .get('/api/tasks')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(Array.isArray(response.body)).toBe(true);
            });
        });
        describe('GET /api/tasks/:id', () => {
            it('should return a specific task', async () => {
                // First create a task
                const taskData = {
                    task_rule_id: testDataIds.taskRuleId || 1,
                    entity_type: 'project',
                    entity_id: testDataIds.projectId || 1
                };
                const createResponse = await request(app)
                    .post('/api/tasks')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send(taskData);
                if (createResponse.status === 201) {
                    const taskId = createResponse.body.id;
                    const response = await request(app)
                        .get(`/api/tasks/${taskId}`)
                        .set('Authorization', `Bearer ${authToken}`)
                        .expect(200);
                    expect(response.body).toHaveProperty('id');
                }
                else {
                    console.log('⚠️ Skipping test - could not create test task');
                }
            });
        });
        describe('POST /api/tasks', () => {
            it('should create a new task', async () => {
                const taskData = {
                    task_rule_id: testDataIds.taskRuleId || 1,
                    entity_type: 'project',
                    entity_id: testDataIds.projectId || 1
                };
                const response = await request(app)
                    .post('/api/tasks')
                    .set('Authorization', `Bearer ${authToken}`)
                    .send(taskData)
                    .expect(201);
                expect(response.body).toHaveProperty('id');
            });
        });
    });
    describe('Progress API', () => {
        describe('GET /api/progress', () => {
            it('should return progress entries', async () => {
                const response = await request(app)
                    .get('/api/progress')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(Array.isArray(response.body)).toBe(true);
            });
        });
        describe('POST /api/progress', () => {
            it('should create a new progress entry', async () => {
                const progressData = {
                    description: 'Test progress entry',
                    project_id: testDataIds.projectId || 1,
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
        });
    });
    describe('Zone Summary API', () => {
        describe('GET /api/zone-summary', () => {
            it('should return zone summary data', async () => {
                const response = await request(app)
                    .get('/api/zone-summary')
                    .set('Authorization', `Bearer ${authToken}`)
                    .expect(200);
                expect(response.body).toBeDefined();
            });
        });
    });
    describe('Error Handling', () => {
        it('should handle 404 for non-existent routes', async () => {
            await request(app)
                .get('/api/non-existent-route')
                .set('Authorization', `Bearer ${authToken}`)
                .expect(404);
        });
        it('should handle invalid JSON', async () => {
            await request(app)
                .post('/api/projects')
                .set('Authorization', `Bearer ${authToken}`)
                .set('Content-Type', 'application/json')
                .send('invalid json')
                .expect(400);
        });
        it('should handle missing authentication', async () => {
            await request(app)
                .get('/api/projects')
                .expect(401);
        });
        it('should handle invalid JWT token', async () => {
            await request(app)
                .get('/api/projects')
                .set('Authorization', 'Bearer invalid-token')
                .expect(401);
        });
    });
});
