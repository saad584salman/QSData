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
    setLoading(prev => ({ ...prev, [endpoint]: true }));
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
      
      const result = await response.json();
      setResults(prev => ({ 
        ...prev, 
        [endpoint]: { 
          status: response.status, 
          data: result,
          timestamp: new Date().toISOString()
        }
      }));
    } catch (error) {
      setResults(prev => ({ 
        ...prev, 
        [endpoint]: { 
          status: 'ERROR', 
          data: { error: error.message },
          timestamp: new Date().toISOString()
        }
      }));
    } finally {
      setLoading(prev => ({ ...prev, [endpoint]: false }));
    }
  };

  const handleLogin = async () => {
    const { username, password } = formData.auth || {};
    if (!username || !password) return;
    
    await makeRequest('/auth/login', 'POST', { username, password });
    const result = results['/auth/login'];
    if (result?.status === 200 && result.data.token) {
      setToken(result.data.token);
      localStorage.setItem('token', result.data.token);
      if (result.data.role) localStorage.setItem('role', result.data.role);
    }
  };

  const tabs = [
    { id: 'auth', label: 'Authentication', endpoints: [
      { path: '/auth/login', method: 'POST', description: 'User login' }
    ]},
    { id: 'projects', label: 'Projects', endpoints: [
      { path: '/projects', method: 'GET', description: 'Get all projects' },
      { path: '/projects/1', method: 'GET', description: 'Get project by ID' },
      { path: '/projects', method: 'POST', description: 'Create new project' },
      { path: '/projects/1', method: 'PUT', description: 'Update project' },
      { path: '/projects/1', method: 'DELETE', description: 'Delete project' }
    ]},
    { id: 'property-definitions', label: 'Property Definitions', endpoints: [
      { path: '/property-definitions', method: 'GET', description: 'Get all property definitions' },
      { path: '/property-definitions/1', method: 'GET', description: 'Get property definition by ID' },
      { path: '/property-definitions', method: 'POST', description: 'Create property definition' },
      { path: '/property-definitions/1', method: 'PUT', description: 'Update property definition' },
      { path: '/property-definitions/1', method: 'DELETE', description: 'Delete property definition' }
    ]},
    { id: 'entity-properties', label: 'Entity Properties', endpoints: [
      { path: '/entity-properties', method: 'GET', description: 'Get all entity properties' },
      { path: '/entity-properties/1', method: 'GET', description: 'Get entity property by ID' },
      { path: '/entity-properties', method: 'POST', description: 'Create entity property' },
      { path: '/entity-properties/1', method: 'PUT', description: 'Update entity property' },
      { path: '/entity-properties/1', method: 'DELETE', description: 'Delete entity property' }
    ]},
    { id: 'tasks', label: 'Tasks', endpoints: [
      { path: '/tasks', method: 'GET', description: 'Get all tasks' },
      { path: '/tasks/1', method: 'GET', description: 'Get task by ID' },
      { path: '/tasks', method: 'POST', description: 'Create new task' },
      { path: '/tasks/1', method: 'PUT', description: 'Update task' },
      { path: '/tasks/1', method: 'DELETE', description: 'Delete task' },
      { path: '/tasks/1/complete', method: 'POST', description: 'Complete task' }
    ]},
    { id: 'progress', label: 'Progress', endpoints: [
      { path: '/progress', method: 'GET', description: 'Get progress data' },
      { path: '/progress', method: 'POST', description: 'Create progress entry' }
    ]},
    { id: 'psdp-projects', label: 'PSDP Projects', endpoints: [
      { path: '/psdp-projects', method: 'GET', description: 'Get PSDP projects' }
    ]},
    { id: 'sap-projects', label: 'SAP Projects', endpoints: [
      { path: '/sap-projects', method: 'GET', description: 'Get SAP projects' },
      { path: '/sap-projects', method: 'POST', description: 'Create SAP project' },
      { path: '/sap-projects/1', method: 'PUT', description: 'Update SAP project' },
      { path: '/sap-projects/1', method: 'DELETE', description: 'Delete SAP project' }
    ]},
    { id: 'zone-summary', label: 'Zone Summary', endpoints: [
      { path: '/zone-summary', method: 'GET', description: 'Get zone summary' }
    ]},
    { id: 'health', label: 'Health Check', endpoints: [
      { path: '/health', method: 'GET', description: 'API health check' }
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
      'sap-projects': [
        { name: 'sr_no', label: 'SR Number', type: 'number', required: true }
      ]
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
    // Only pass data for non-GET/HEAD requests
    const requestData = (method === 'GET' || method === 'HEAD') ? null : (Object.keys(data).length > 0 ? data : null);
    makeRequest(endpoint, method, requestData);
  };

  return (
    <div className="api-demo">
      <h2>API Endpoint Demonstrations</h2>
      <p>This page demonstrates all database API endpoints and their intended outcomes.</p>
      
      <div className="demo-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
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
              <button onClick={handleLogin} disabled={loading['/auth/login']}>
                {loading['/auth/login'] ? 'Logging in...' : 'Login'}
              </button>
              {token && (
                <div className="token-info">
                  <strong>Current Token:</strong> {token.substring(0, 20)}...
                </div>
              )}
            </div>
          )}

          {activeTab !== 'auth' && (
            <div className="form-section">
              <h4>Request Form</h4>
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
            {tabs.find(t => t.id === activeTab)?.endpoints.map(endpoint => (
              <div key={endpoint.path} className="endpoint-item">
                <div className="endpoint-header">
                  <span className="method">{endpoint.method}</span>
                  <span className="path">{endpoint.path}</span>
                  <span className="description">{endpoint.description}</span>
                  <button
                    onClick={() => handleSubmit(endpoint.path, endpoint.method)}
                    disabled={loading[endpoint.path]}
                    className="test-btn"
                  >
                    {loading[endpoint.path] ? 'Testing...' : 'Test'}
                  </button>
                </div>
                
                {results[endpoint.path] && (
                  <div className="result-section">
                    <h5>Response:</h5>
                    <div className="result-details">
                      <div><strong>Status:</strong> {results[endpoint.path].status}</div>
                      <div><strong>Timestamp:</strong> {results[endpoint.path].timestamp}</div>
                    </div>
                    <pre className="result-data">
                      {JSON.stringify(results[endpoint.path].data, null, 2)}
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