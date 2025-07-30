// Using built-in fetch (Node.js 18+)

const BASE_URL = 'http://localhost:3000/api';
let authToken = null;

// Test utilities
const testEndpoint = async (method, endpoint, data = null, expectedStatus = 200) => {
  const url = `${BASE_URL}${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(authToken && { Authorization: `Bearer ${authToken}` })
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
    } else {
      console.log(`   ❌ FAILED - Expected ${expectedStatus}, got ${response.status}`);
      return { success: false, data: result };
    }
  } catch (error) {
    console.log(`   ❌ ERROR: ${error.message}`);
    return { success: false, error: error.message };
  }
};

// Test suite
const runTests = async () => {
  console.log('🚀 Starting API Test Suite...\n');
  
  // 1. Health Check
  console.log('📋 1. Testing Health Check');
  await testEndpoint('GET', '/health');
  
  // 2. Authentication
  console.log('\n📋 2. Testing Authentication');
  const loginResult = await testEndpoint('POST', '/auth/login', {
    username: 'admin',
    password: 'admin'
  });
  
  if (loginResult.success && loginResult.data.token) {
    authToken = loginResult.data.token;
    console.log('   ✅ Authentication successful, token saved');
  } else {
    console.log('   ❌ Authentication failed, continuing without token');
  }
  
  // 3. Projects API
  console.log('\n📋 3. Testing Projects API');
  await testEndpoint('GET', '/projects');
  await testEndpoint('GET', '/projects/1');
  await testEndpoint('POST', '/projects', {
    name: 'Test Project',
    parent_project_id: null
  });
  
  // 4. Property Definitions API
  console.log('\n📋 4. Testing Property Definitions API');
  await testEndpoint('GET', '/property-definitions');
  await testEndpoint('GET', '/property-definitions/1');
  await testEndpoint('POST', '/property-definitions', {
    entity_type: 'project',
    property_key: 'test_property',
    value_type: 'string',
    is_required: false
  });
  
  // 5. Entity Properties API
  console.log('\n📋 5. Testing Entity Properties API');
  await testEndpoint('GET', '/entity-properties');
  await testEndpoint('GET', '/entity-properties/1');
  await testEndpoint('POST', '/entity-properties', {
    entity_type: 'project',
    entity_id: 1,
    property_definition_id: 1,
    value: 'test_value'
  });
  
  // 6. Tasks API
  console.log('\n📋 6. Testing Tasks API');
  await testEndpoint('GET', '/tasks');
  await testEndpoint('GET', '/tasks/1');
  await testEndpoint('POST', '/tasks', {
    task_rule_id: 1,
    entity_type: 'project',
    entity_id: 1
  });
  
  // 7. Progress API
  console.log('\n📋 7. Testing Progress API');
  await testEndpoint('GET', '/progress');
  await testEndpoint('POST', '/progress', {
    description: 'Test progress entry'
  });
  
  // 8. Zone Summary API
  console.log('\n📋 8. Testing Zone Summary API');
  await testEndpoint('GET', '/zone-summary');
  
  console.log('\n🎉 API Test Suite Complete!');
};

// Run tests
runTests().catch(console.error); 