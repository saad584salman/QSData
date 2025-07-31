import React, { useState, useEffect } from 'react';

const ApiDemo = () => {
  const [activeTab, setActiveTab] = useState('auth');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState({});
  const [formData, setFormData] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const getAuthHeaders = () => ({
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  });

  const makeRequest = async (endpoint, method = 'GET', data = null) => {
    const requestKey = `${method}-${endpoint}`;
    setLoading(prev => ({ ...prev, [requestKey]: true }));
    try {
      const requestOptions = {
        method,
        headers: getAuthHeaders()
      };
      
      // Only add body for non-GET/HEAD requests
      if (data && method !== 'GET' && method !== 'HEAD') {
        requestOptions.body = JSON.stringify(data);
      }
      
      const response = await fetch(`/api${endpoint}`, requestOptions);
      
      let result;
      try {
        result = await response.json();
      } catch (e) {
        result = { message: 'Response is not JSON' };
      }
      
      setResults(prev => ({ 
        ...prev, 
        [requestKey]: { 
          status: response.status, 
          data: result,
          timestamp: new Date().toISOString()
        }
      }));
    } catch (error) {
      setResults(prev => ({ 
        ...prev, 
        [requestKey]: { 
          status: 'ERROR', 
          data: { error: error.message },
          timestamp: new Date().toISOString()
        }
      }));
    } finally {
      setLoading(prev => ({ ...prev, [requestKey]: false }));
    }
  };

  const handleLogin = async () => {
    const { username, password } = formData.auth || {};
    if (!username || !password) return;
    
    await makeRequest('/auth/login', 'POST', { username, password });
    const result = results['POST-/auth/login'];
    if (result?.status === 200 && result.data.token) {
      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      if (result.data.role) localStorage.setItem('role', result.data.role);
    }
  };

  // Clear results when switching tabs to fix display issues
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setResults({});
    setLoading({});
    // Initialize form data for new tab if it doesn't exist
    setFormData(prev => {
      const newFormData = { ...prev };
      if (!newFormData[tabId]) {
        newFormData[tabId] = {};
      }
      return newFormData;
    });
  };

  const tabs = [
    { id: 'auth', label: 'Authentication', endpoints: [
      { path: '/auth/login', method: 'POST', description: 'User login', requiresAuth: false }
    ]},
    { id: 'projects', label: 'Projects', endpoints: [
      { path: '/projects', method: 'GET', description: 'Get all projects', requiresAuth: true },
      { path: '/projects/1', method: 'GET', description: 'Get project by ID', requiresAuth: true },
      { path: '/projects', method: 'POST', description: 'Create new project', requiresAuth: true },
      { path: '/projects/1', method: 'PUT', description: 'Update project', requiresAuth: true },
      { path: '/projects/1', method: 'DELETE', description: 'Delete project', requiresAuth: true }
    ]},
    { id: 'property-definitions', label: 'Property Definitions', endpoints: [
      { path: '/property-definitions', method: 'GET', description: 'Get all property definitions', requiresAuth: true },
      { path: '/property-definitions/1', method: 'GET', description: 'Get property definition by ID', requiresAuth: true },
      { path: '/property-definitions', method: 'POST', description: 'Create property definition', requiresAuth: true },
      { path: '/property-definitions/1', method: 'PUT', description: 'Update property definition', requiresAuth: true },
      { path: '/property-definitions/1', method: 'DELETE', description: 'Delete property definition', requiresAuth: true }
    ]},
    { id: 'entity-properties', label: 'Entity Properties', endpoints: [
      { path: '/entity-properties', method: 'GET', description: 'Get all entity properties', requiresAuth: true },
      { path: '/entity-properties/1', method: 'GET', description: 'Get entity property by ID', requiresAuth: true },
      { path: '/entity-properties', method: 'POST', description: 'Create entity property', requiresAuth: true },
      { path: '/entity-properties/1', method: 'PUT', description: 'Update entity property', requiresAuth: true },
      { path: '/entity-properties/1', method: 'DELETE', description: 'Delete entity property', requiresAuth: true }
    ]},
    { id: 'tasks', label: 'Tasks', endpoints: [
      { path: '/tasks', method: 'GET', description: 'Get all tasks', requiresAuth: true },
      { path: '/tasks/1', method: 'GET', description: 'Get task by ID', requiresAuth: true },
      { path: '/tasks', method: 'POST', description: 'Create new task', requiresAuth: true },
      { path: '/tasks/1', method: 'PUT', description: 'Update task', requiresAuth: true },
      { path: '/tasks/1', method: 'DELETE', description: 'Delete task', requiresAuth: true },
      { path: '/tasks/1/complete', method: 'POST', description: 'Complete task', requiresAuth: true }
    ]},
    { id: 'progress', label: 'Progress', endpoints: [
      { path: '/progress', method: 'GET', description: 'Get progress data', requiresAuth: true },
      { path: '/progress', method: 'POST', description: 'Create progress entry', requiresAuth: true }
    ]},
    { id: 'zone-summary', label: 'Zone Summary', endpoints: [
      { path: '/zone-summary', method: 'GET', description: 'Get zone summary', requiresAuth: true }
    ]},
    { id: 'health', label: 'Health Check', endpoints: [
      { path: '/health', method: 'GET', description: 'API health check', requiresAuth: false }
    ]}
  ];

  const getFormFields = (tabId) => {
    const fields = {
      auth: [
        { name: 'username', label: 'Username', type: 'text', required: true },
        { name: 'password', label: 'Password', type: 'password', required: true }
      ],
      projects: [
        { name: 'name', label: 'Project Name', type: 'text', required: true },
        { name: 'parent_project_id', label: 'Parent Project ID', type: 'number' },
        { name: 'properties', label: 'Properties (JSON)', type: 'textarea' }
      ],
      'property-definitions': [
        { name: 'entity_type', label: 'Entity Type', type: 'text', required: true },
        { name: 'property_key', label: 'Property Key', type: 'text', required: true },
        { name: 'value_type', label: 'Value Type', type: 'select', options: ['string', 'number', 'date', 'boolean'], required: true },
        { name: 'formatting_rules', label: 'Formatting Rules', type: 'text' },
        { name: 'is_required', label: 'Is Required', type: 'checkbox' },
        { name: 'options', label: 'Options (JSON array)', type: 'textarea' }
      ],
      'entity-properties': [
        { name: 'entity_type', label: 'Entity Type', type: 'text', required: true },
        { name: 'entity_id', label: 'Entity ID', type: 'number', required: true },
        { name: 'property_definition_id', label: 'Property Definition ID', type: 'number', required: true },
        { name: 'value', label: 'Value', type: 'text', required: true },
        { name: 'value_type', label: 'Value Type', type: 'select', options: ['string', 'number', 'date', 'boolean'] }
      ],
      tasks: [
        { name: 'task_rule_id', label: 'Task Rule ID', type: 'number', required: true },
        { name: 'entity_type', label: 'Entity Type', type: 'text', required: true },
        { name: 'entity_id', label: 'Entity ID', type: 'number', required: true },
        { name: 'assigned_to_user_id', label: 'Assigned User ID', type: 'number' },
        { name: 'assigned_to_office_id', label: 'Assigned Office ID', type: 'number' },
        { name: 'due_date', label: 'Due Date', type: 'date' }
      ],
      progress: [
        { name: 'entity_type', label: 'Entity Type', type: 'text', required: true },
        { name: 'entity_id', label: 'Entity ID', type: 'number', required: true },
        { name: 'progress_data', label: 'Progress Data (JSON)', type: 'textarea', required: true }
      ],
      'zone-summary': [
        { name: 'zone_id', label: 'Zone ID', type: 'number' },
        { name: 'date_from', label: 'Date From', type: 'date' },
        { name: 'date_to', label: 'Date To', type: 'date' }
      ],
      health: []
    };
    return fields[tabId] || [];
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value
      }
    }));
  };

  const handleSubmit = (endpoint, method) => {
    const data = formData[activeTab] || {};
    
    // For POST/PUT requests, check if required fields are filled
    if ((method === 'POST' || method === 'PUT') && Object.keys(data).length === 0) {
      const requiredFields = getFormFields(activeTab).filter(field => field.required);
      if (requiredFields.length > 0) {
        alert(`Please fill in the required fields: ${requiredFields.map(f => f.label).join(', ')}`);
        return;
      }
    }
    
    // Clean up data - remove empty values
    const cleanData = Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value !== '' && value !== null && value !== undefined)
    );
    
    // Only pass data for non-GET/HEAD requests
    const requestData = (method === 'GET' || method === 'HEAD') ? null : (Object.keys(cleanData).length > 0 ? cleanData : null);
    makeRequest(endpoint, method, requestData);
  };

  return (
    <div className="api-demo">
      <h2>API Endpoint Demonstrations</h2>
      <p>This page demonstrates all database API endpoints and their intended outcomes.</p>
      
      {token && (
        <div className="auth-status">
          <span className="auth-indicator">🔐 Authenticated</span>
          <span className="role-info">Role: {localStorage.getItem('role') || 'Unknown'}</span>
        </div>
      )}
      
      <div className="demo-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="demo-content">
        <div className="endpoints-section">
          <h3>{tabs.find(t => t.id === activeTab)?.label} Endpoints</h3>
          
          {activeTab === 'auth' && (
            <div className="auth-section">
              <h4>Login Form</h4>
              <div className="form-group">
                <label>Username:</label>
                <input
                  type="text"
                  value={formData.auth?.username || ''}
                  onChange={(e) => handleFormChange('username', e.target.value)}
                  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  value={formData.auth?.password || ''}
                  onChange={(e) => handleFormChange('password', e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <button onClick={handleLogin} disabled={loading['POST-/auth/login']}>
                {loading['POST-/auth/login'] ? 'Logging in...' : 'Login'}
              </button>
              {token && (
                <div className="token-info">
                  <strong>Current Token:</strong> {token.substring(0, 20)}...
                </div>
              )}
            </div>
          )}

          {activeTab !== 'auth' && activeTab !== 'health' && (
            <div className="form-section">
              <h4>Request Form</h4>
              <div className="sample-data-notice">
                <p><strong>💡 Tip:</strong> Use these sample values for testing:</p>
                <div className="sample-values">
                  {activeTab === 'projects' && (
                    <span>Project name: "Test Project", Parent ID: 1</span>
                  )}
                  {activeTab === 'property-definitions' && (
                    <span>Entity type: "project", Property key: "budget", Value type: "number"</span>
                  )}
                  {activeTab === 'entity-properties' && (
                    <span>Entity type: "project", Entity ID: 1, Property Definition ID: 1, Value: "50000"</span>
                  )}
                  {activeTab === 'tasks' && (
                    <span>Task rule ID: 1, Entity type: "project", Entity ID: 1</span>
                  )}
                  {activeTab === 'progress' && (
                    <span>Entity type: "project", Entity ID: 1, Progress data: {'{"progress": 75}'}</span>
                  )}
                </div>
              </div>
              {getFormFields(activeTab).map(field => (
                <div key={field.name} className="form-group">
                  <label>{field.label}:</label>
                  {field.type === 'select' ? (
                    <select
                      value={formData[activeTab]?.[field.name] || ''}
                      onChange={(e) => handleFormChange(field.name, e.target.value)}
                    >
                      <option value="">Select...</option>
                      {field.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      value={formData[activeTab]?.[field.name] || ''}
                      onChange={(e) => handleFormChange(field.name, e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  ) : field.type === 'checkbox' ? (
                    <input
                      type="checkbox"
                      checked={formData[activeTab]?.[field.name] || false}
                      onChange={(e) => handleFormChange(field.name, e.target.checked)}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={formData[activeTab]?.[field.name] || ''}
                      onChange={(e) => handleFormChange(field.name, e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="endpoints-list">
            {tabs.find(t => t.id === activeTab)?.endpoints.map((endpoint, index) => (
              <div key={`${activeTab}-${endpoint.method}-${endpoint.path}-${index}`} className="endpoint-item">
                <div className="endpoint-header">
                  <span className="method" data-method={endpoint.method}>{endpoint.method}</span>
                  <span className="path">{endpoint.path}</span>
                  <span className="description">{endpoint.description}</span>
                  {endpoint.requiresAuth && !token && (
                    <span className="auth-required">⚠️ Requires Auth</span>
                  )}
                  <button
                    onClick={() => handleSubmit(endpoint.path, endpoint.method)}
                    disabled={loading[`${endpoint.method}-${endpoint.path}`] || (endpoint.requiresAuth && !token)}
                    className="test-btn"
                  >
                    {loading[`${endpoint.method}-${endpoint.path}`] ? 'Testing...' : 'Test'}
                  </button>
                </div>
                
                {results[`${endpoint.method}-${endpoint.path}`] && (
                  <div className={`result-section ${results[`${endpoint.method}-${endpoint.path}`].status >= 200 && results[`${endpoint.method}-${endpoint.path}`].status < 300 ? 'success' : 'error'}`}>
                    <h5>Response:</h5>
                    <div className="result-details">
                      <div>
                        <strong>Status:</strong> 
                        <span className={`status-code ${results[`${endpoint.method}-${endpoint.path}`].status >= 200 && results[`${endpoint.method}-${endpoint.path}`].status < 300 ? 'success' : 'error'}`}>
                          {results[`${endpoint.method}-${endpoint.path}`].status}
                        </span>
                      </div>
                      <div><strong>Timestamp:</strong> {new Date(results[`${endpoint.method}-${endpoint.path}`].timestamp).toLocaleTimeString()}</div>
                    </div>
                    <pre className="result-data">
                      {JSON.stringify(results[`${endpoint.method}-${endpoint.path}`].data, null, 2)}
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDemo; 