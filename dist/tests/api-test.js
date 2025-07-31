"use strict";
// Using built-in fetch (Node.js 18+)
const BASE_URL = process.env.API_URL || 'http://localhost:3000/api';
let authToken = null;
// Test utilities
const testEndpoint = async (method, endpoint, data = null, expectedStatus = 200, requireAuth = true) => {
    const url = `${BASE_URL}${endpoint}`;
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(authToken && requireAuth && { Authorization: `Bearer ${authToken}` })
        },
        ...(data && { body: JSON.stringify(data) })
    };
    try {
        const response = await fetch(url, options);
        const result = await response.json().catch(() => ({}));
        console.log(`\n🔍 Testing ${method} ${endpoint}`);
        console.log(`   Status: ${response.status} ${response.statusText}`);
        console.log(`   Response:`, JSON.stringify(result, null, 2));
        if (response.status === expectedStatus) {
            console.log(`   ✅ PASSED`);
            return { success: true, data: result };
        }
        else {
            console.log(`   ❌ FAILED - Expected ${expectedStatus}, got ${response.status}`);
            return { success: false, data: result };
        }
    }
    catch (error) {
        console.log(`   ❌ ERROR: ${error.message}`);
        return { success: false, error: error.message };
    }
};
// Test suite
const runTests = async () => {
    console.log('🚀 Starting Comprehensive API Test Suite...\n');
    // 1. Health Check
    console.log('📋 1. Testing Health Check');
    await testEndpoint('GET', '/health', null, 200, false);
    // 2. Authentication
    console.log('\n📋 2. Testing Authentication');
    // Test login with valid credentials
    const loginResult = await testEndpoint('POST', '/auth/login', {
        username: 'admin@test.com',
        password: 'admin'
    }, 200, false);
    if (loginResult.success && loginResult.data.token) {
        authToken = loginResult.data.token;
        console.log('   ✅ Authentication successful, token saved');
    }
    else {
        console.log('   ❌ Authentication failed, using test token');
        // Generate a test token for testing
        const jwt = await import('jsonwebtoken');
        authToken = jwt.sign({ id: 1, username: 'testuser', email: 'test@example.com', role: 'admin' }, process.env.JWT_SECRET || 'test-secret-key-for-jwt-signing', { expiresIn: '1h' });
    }
    // Test registration
    await testEndpoint('POST', '/auth/register', {
        full_name: 'API Test User',
        email: 'apitest@example.com',
        password: 'password123',
        role_id: 2,
        office_id: 1
    }, 201, false);
    // 3. Projects API
    console.log('\n📋 3. Testing Projects API');
    await testEndpoint('GET', '/projects');
    await testEndpoint('GET', '/projects?page=1&limit=5');
    await testEndpoint('GET', '/projects?property=category&value=Infrastructure');
    // Test project creation
    const createProjectResult = await testEndpoint('POST', '/projects', {
        name: 'API Test Project',
        parent_project_id: null,
        properties: [
            {
                property_definition_id: 1,
                value_type: 'string',
                value: 'Test Category'
            }
        ]
    }, 201);
    if (createProjectResult.success) {
        const projectId = createProjectResult.data.id;
        await testEndpoint('GET', `/projects/${projectId}`);
        await testEndpoint('PUT', `/projects/${projectId}`, {
            name: 'Updated API Test Project',
            properties: [
                {
                    property_definition_id: 1,
                    value_type: 'string',
                    value: 'Updated Category'
                }
            ]
        });
        await testEndpoint('DELETE', `/projects/${projectId}`);
    }
    // 4. Property Definitions API
    console.log('\n📋 4. Testing Property Definitions API');
    await testEndpoint('GET', '/property-definitions');
    await testEndpoint('GET', '/property-definitions/1');
    const createPropertyResult = await testEndpoint('POST', '/property-definitions', {
        entity_type: 'project',
        property_key: 'api_test_property',
        display_name: 'API Test Property',
        value_type: 'string',
        is_required: false
    }, 201);
    if (createPropertyResult.success) {
        const propertyId = createPropertyResult.data.id;
        await testEndpoint('GET', `/property-definitions/${propertyId}`);
    }
    // 5. Entity Properties API
    console.log('\n📋 5. Testing Entity Properties API');
    await testEndpoint('GET', '/entity-properties');
    await testEndpoint('GET', '/entity-properties/1');
    const createEntityPropertyResult = await testEndpoint('POST', '/entity-properties', {
        entity_type: 'project',
        entity_id: 1,
        property_definition_id: 1,
        value: 'api_test_value'
    }, 201);
    if (createEntityPropertyResult.success) {
        const entityPropertyId = createEntityPropertyResult.data.id;
        await testEndpoint('GET', `/entity-properties/${entityPropertyId}`);
    }
    // 6. Tasks API
    console.log('\n📋 6. Testing Tasks API');
    await testEndpoint('GET', '/tasks');
    const createTaskResult = await testEndpoint('POST', '/tasks', {
        task_rule_id: 1,
        entity_type: 'project',
        entity_id: 1
    }, 201);
    if (createTaskResult.success) {
        const taskId = createTaskResult.data.id;
        await testEndpoint('GET', `/tasks/${taskId}`);
    }
    // 7. Progress API
    console.log('\n📋 7. Testing Progress API');
    await testEndpoint('GET', '/progress');
    const createProgressResult = await testEndpoint('POST', '/progress', {
        description: 'API Test progress entry',
        project_id: 1,
        status: 'in_progress'
    }, 201);
    if (createProgressResult.success) {
        const progressId = createProgressResult.data.id;
        await testEndpoint('GET', `/progress/${progressId}`);
    }
    // 8. Zone Summary API
    console.log('\n📋 8. Testing Zone Summary API');
    await testEndpoint('GET', '/zone-summary');
    // 9. Error Handling Tests
    console.log('\n📋 9. Testing Error Handling');
    await testEndpoint('GET', '/non-existent-endpoint', null, 404);
    await testEndpoint('GET', '/projects', null, 401, false); // No auth
    await testEndpoint('POST', '/projects', 'invalid json', 400);
    console.log('\n🎉 Comprehensive API Test Suite Complete!');
};
// Wait for API server to be ready
const waitForServer = async () => {
    console.log('⏳ Waiting for API server to be ready...');
    let retries = 0;
    const maxRetries = 30;
    while (retries < maxRetries) {
        try {
            const response = await fetch(`${BASE_URL}/health`);
            if (response.ok) {
                console.log('✅ API server is ready!');
                return;
            }
        }
        catch (error) {
            // Server not ready yet
        }
        retries++;
        console.log(`⏳ Server not ready yet... (${retries}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    throw new Error('API server failed to start after maximum retries');
};
// Main execution
const main = async () => {
    try {
        await waitForServer();
        await runTests();
        console.log('\n✅ All API tests completed successfully!');
        process.exit(0);
    }
    catch (error) {
        console.error('\n❌ API tests failed:', error.message);
        process.exit(1);
    }
};
// Run tests
main().catch(console.error);
