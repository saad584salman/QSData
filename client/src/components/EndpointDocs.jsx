import React, { useState } from 'react';

const EndpointDocs = () => {
  const [activeCategory, setActiveCategory] = useState('authentication');

  const endpointCategories = {
    authentication: {
      title: 'Authentication',
      description: 'User authentication and authorization endpoints',
      endpoints: [
        {
          method: 'POST',
          path: '/api/auth/login',
          description: 'Authenticate user and receive JWT token',
          requestBody: {
            username: 'string (required)',
            password: 'string (required)'
          },
          response: {
            success: {
              status: 200,
              body: {
                token: 'jwt_token_string',
                role: 'user_role',
                user: {
                  id: 1,
                  username: 'admin',
                  email: 'admin@example.com',
                  role: 'master'
                }
              }
            },
            error: {
              status: 401,
              body: {
                error: 'Invalid credentials'
              }
            }
          },
          example: {
            request: {
              username: 'admin',
              password: 'admin'
            },
            response: {
              token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
              role: 'master',
              user: {
                id: 1,
                username: 'admin',
                email: 'admin@example.com',
                role: 'master'
              }
            }
          }
        }
      ]
    },
    projects: {
      title: 'Projects',
      description: 'Project management and hierarchy endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/projects',
          description: 'Retrieve all projects with optional filtering',
          queryParams: {
            parent_id: 'integer (optional)',
            limit: 'integer (optional)',
            offset: 'integer (optional)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  name: 'Main Project',
                  parent_project_id: null,
                  created_at: '2024-01-01T00:00:00Z',
                  updated_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'GET',
          path: '/api/projects/:id',
          description: 'Retrieve specific project by ID',
          pathParams: {
            id: 'integer (required)'
          },
          response: {
            success: {
              status: 200,
              body: {
                id: 1,
                name: 'Main Project',
                parent_project_id: null,
                properties: [
                  {
                    property_definition_id: 1,
                    value: 'Project Description',
                    value_type: 'string'
                  }
                ],
                created_at: '2024-01-01T00:00:00Z',
                updated_at: '2024-01-01T00:00:00Z'
              }
            },
            error: {
              status: 404,
              body: {
                error: 'Project not found'
              }
            }
          }
        },
        {
          method: 'POST',
          path: '/api/projects',
          description: 'Create a new project',
          requestBody: {
            name: 'string (required)',
            parent_project_id: 'integer (optional)',
            properties: 'array (optional)'
          },
          response: {
            success: {
              status: 201,
              body: {
                id: 2,
                name: 'New Project',
                parent_project_id: 1,
                created_at: '2024-01-01T00:00:00Z',
                updated_at: '2024-01-01T00:00:00Z'
              }
            },
            error: {
              status: 400,
              body: {
                error: 'Project name is required'
              }
            }
          }
        },
        {
          method: 'PUT',
          path: '/api/projects/:id',
          description: 'Update an existing project',
          pathParams: {
            id: 'integer (required)'
          },
          requestBody: {
            name: 'string (optional)',
            parent_project_id: 'integer (optional)',
            properties: 'array (optional)'
          },
          response: {
            success: {
              status: 200,
              body: {
                id: 1,
                name: 'Updated Project Name',
                parent_project_id: null,
                updated_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        },
        {
          method: 'DELETE',
          path: '/api/projects/:id',
          description: 'Delete a project',
          pathParams: {
            id: 'integer (required)'
          },
          response: {
            success: {
              status: 204,
              body: null
            },
            error: {
              status: 400,
              body: {
                error: 'Cannot delete project with child projects'
              }
            }
          }
        }
      ]
    },
    'property-definitions': {
      title: 'Property Definitions',
      description: 'Dynamic property system for entities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/property-definitions',
          description: 'Retrieve all property definitions',
          queryParams: {
            entity_type: 'string (optional)',
            limit: 'integer (optional)',
            offset: 'integer (optional)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  entity_type: 'project',
                  property_key: 'description',
                  value_type: 'string',
                  formatting_rules: null,
                  is_required: false,
                  options: ['Option 1', 'Option 2'],
                  created_at: '2024-01-01T00:00:00Z',
                  updated_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/property-definitions',
          description: 'Create a new property definition',
          requestBody: {
            entity_type: 'string (required)',
            property_key: 'string (required)',
            value_type: 'string (required) - enum: string, number, date, boolean',
            formatting_rules: 'string (optional)',
            is_required: 'boolean (optional)',
            options: 'array (optional)'
          },
          response: {
            success: {
              status: 201,
              body: {
                id: 2,
                entity_type: 'project',
                property_key: 'budget',
                value_type: 'number',
                formatting_rules: 'currency',
                is_required: true,
                options: null,
                created_at: '2024-01-01T00:00:00Z',
                updated_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        }
      ]
    },
    'entity-properties': {
      title: 'Entity Properties',
      description: 'Dynamic property values for entities',
      endpoints: [
        {
          method: 'GET',
          path: '/api/entity-properties',
          description: 'Retrieve entity properties with filtering',
          queryParams: {
            entity_type: 'string (optional)',
            entity_id: 'integer (optional)',
            property_definition_id: 'integer (optional)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  entity_type: 'project',
                  entity_id: 1,
                  property_definition_id: 1,
                  value: 'Project Description',
                  value_type: 'string',
                  created_at: '2024-01-01T00:00:00Z',
                  updated_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/entity-properties',
          description: 'Create or update entity property',
          requestBody: {
            entity_type: 'string (required)',
            entity_id: 'integer (required)',
            property_definition_id: 'integer (required)',
            value: 'string (required)',
            value_type: 'string (optional)'
          },
          response: {
            success: {
              status: 201,
              body: {
                id: 2,
                entity_type: 'project',
                entity_id: 1,
                property_definition_id: 2,
                value: '100000',
                value_type: 'number',
                created_at: '2024-01-01T00:00:00Z',
                updated_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        }
      ]
    },
    tasks: {
      title: 'Tasks',
      description: 'Task management and workflow endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/tasks',
          description: 'Retrieve tasks with filtering',
          queryParams: {
            status: 'string (optional) - enum: pending, completed, overdue',
            assigned_to_user_id: 'integer (optional)',
            assigned_to_office_id: 'integer (optional)',
            entity_type: 'string (optional)',
            entity_id: 'integer (optional)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  task_rule_id: 1,
                  entity_type: 'project',
                  entity_id: 1,
                  assigned_to_user_id: 1,
                  assigned_to_office_id: null,
                  status: 'pending',
                  due_date: '2024-12-31',
                  notes: 'Complete project review',
                  created_at: '2024-01-01T00:00:00Z',
                  updated_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/tasks',
          description: 'Create a new task',
          requestBody: {
            task_rule_id: 'integer (required)',
            entity_type: 'string (required)',
            entity_id: 'integer (required)',
            assigned_to_user_id: 'integer (optional)',
            assigned_to_office_id: 'integer (optional)',
            due_date: 'date (optional)'
          },
          response: {
            success: {
              status: 201,
              body: {
                id: 2,
                task_rule_id: 1,
                entity_type: 'project',
                entity_id: 1,
                assigned_to_user_id: 1,
                status: 'pending',
                due_date: '2024-12-31',
                created_at: '2024-01-01T00:00:00Z',
                updated_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        },
        {
          method: 'POST',
          path: '/api/tasks/:id/complete',
          description: 'Mark task as completed',
          pathParams: {
            id: 'integer (required)'
          },
          requestBody: {
            notes: 'string (optional)'
          },
          response: {
            success: {
              status: 200,
              body: {
                id: 1,
                status: 'completed',
                completed_at: '2024-01-01T00:00:00Z',
                notes: 'Task completed successfully'
              }
            }
          }
        }
      ]
    },
    progress: {
      title: 'Progress',
      description: 'Progress tracking and reporting endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/progress',
          description: 'Retrieve progress data (requires authentication)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  description: 'Project setup completed',
                  completed: true,
                  completed_at: '2024-01-01T00:00:00Z',
                  created_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/progress',
          description: 'Create progress entry (requires master/originator role)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          requestBody: {
            description: 'string (required)',
            completed: 'boolean (optional)'
          },
          response: {
            success: {
              status: 201,
              body: {
                id: 2,
                description: 'New progress entry',
                completed: false,
                created_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        }
      ]
    },
    'psdp-projects': {
      title: 'PSDP Projects',
      description: 'Public Sector Development Program projects',
      endpoints: [
        {
          method: 'GET',
          path: '/api/psdp-projects',
          description: 'Retrieve PSDP projects (requires authentication)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  id: 1,
                  name: 'PSDP Project 1',
                  budget: 1000000,
                  status: 'active',
                  created_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        }
      ]
    },
    'sap-projects': {
      title: 'SAP Projects',
      description: 'SAP system integration projects',
      endpoints: [
        {
          method: 'GET',
          path: '/api/sap-projects',
          description: 'Retrieve SAP projects (requires authentication)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  sr_no: 1,
                  project_name: 'SAP Integration',
                  status: 'in_progress',
                  created_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        },
        {
          method: 'POST',
          path: '/api/sap-projects',
          description: 'Create SAP project (requires originator/master role)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          requestBody: {
            sr_no: 'integer (required)'
          },
          response: {
            success: {
              status: 201,
              body: {
                sr_no: 2,
                project_name: 'New SAP Project',
                status: 'pending',
                created_at: '2024-01-01T00:00:00Z'
              }
            }
          }
        }
      ]
    },
    'zone-summary': {
      title: 'Zone Summary',
      description: 'Geographic zone-based project summaries',
      endpoints: [
        {
          method: 'GET',
          path: '/api/zone-summary',
          description: 'Retrieve zone summary data (requires authentication)',
          headers: {
            Authorization: 'Bearer <token> (required)'
          },
          response: {
            success: {
              status: 200,
              body: [
                {
                  zone_id: 1,
                  zone_name: 'Zone A',
                  total_projects: 10,
                  completed_projects: 5,
                  total_budget: 5000000,
                  created_at: '2024-01-01T00:00:00Z'
                }
              ]
            }
          }
        }
      ]
    },
    health: {
      title: 'Health Check',
      description: 'System health and status endpoints',
      endpoints: [
        {
          method: 'GET',
          path: '/api/health',
          description: 'Check API health status',
          response: {
            success: {
              status: 200,
              body: {
                status: 'OK',
                timestamp: '2024-01-01T00:00:00Z',
                version: '1.0.0',
                database: 'connected'
              }
            }
          }
        }
      ]
    }
  };

  const getMethodColor = (method) => {
    const colors = {
      GET: '#28a745',
      POST: '#007bff',
      PUT: '#ffc107',
      DELETE: '#dc3545'
    };
    return colors[method] || '#6c757d';
  };

  return (
    <div className="endpoint-docs">
      <h2>API Endpoint Documentation</h2>
      <p>Comprehensive documentation for all database API endpoints with intended outcomes and examples.</p>
      
      <div className="docs-container">
        <div className="docs-sidebar">
          <h3>Categories</h3>
          <div className="category-list">
            {Object.keys(endpointCategories).map(category => (
              <button
                key={category}
                className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {endpointCategories[category].title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="docs-content">
          <div className="category-header">
            <h3>{endpointCategories[activeCategory].title}</h3>
            <p>{endpointCategories[activeCategory].description}</p>
          </div>
          
          <div className="endpoints-list">
            {endpointCategories[activeCategory].endpoints.map((endpoint, index) => (
              <div key={index} className="endpoint-doc">
                <div className="endpoint-header">
                  <span 
                    className="method-badge"
                    style={{ backgroundColor: getMethodColor(endpoint.method) }}
                  >
                    {endpoint.method}
                  </span>
                  <span className="endpoint-path">{endpoint.path}</span>
                  <span className="endpoint-description">{endpoint.description}</span>
                </div>
                
                <div className="endpoint-details">
                  {endpoint.pathParams && (
                    <div className="detail-section">
                      <h5>Path Parameters:</h5>
                      <div className="params-list">
                        {Object.entries(endpoint.pathParams).map(([key, value]) => (
                          <div key={key} className="param-item">
                            <span className="param-name">{key}</span>
                            <span className="param-type">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {endpoint.queryParams && (
                    <div className="detail-section">
                      <h5>Query Parameters:</h5>
                      <div className="params-list">
                        {Object.entries(endpoint.queryParams).map(([key, value]) => (
                          <div key={key} className="param-item">
                            <span className="param-name">{key}</span>
                            <span className="param-type">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {endpoint.requestBody && (
                    <div className="detail-section">
                      <h5>Request Body:</h5>
                      <div className="params-list">
                        {Object.entries(endpoint.requestBody).map(([key, value]) => (
                          <div key={key} className="param-item">
                            <span className="param-name">{key}</span>
                            <span className="param-type">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {endpoint.headers && (
                    <div className="detail-section">
                      <h5>Headers:</h5>
                      <div className="params-list">
                        {Object.entries(endpoint.headers).map(([key, value]) => (
                          <div key={key} className="param-item">
                            <span className="param-name">{key}</span>
                            <span className="param-type">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="detail-section">
                    <h5>Response Examples:</h5>
                    <div className="response-examples">
                      {endpoint.response.success && (
                        <div className="response-example success">
                          <h6>Success Response ({endpoint.response.success.status})</h6>
                          <pre>{JSON.stringify(endpoint.response.success.body, null, 2)}</pre>
                        </div>
                      )}
                      {endpoint.response.error && (
                        <div className="response-example error">
                          <h6>Error Response ({endpoint.response.error.status})</h6>
                          <pre>{JSON.stringify(endpoint.response.error.body, null, 2)}</pre>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {endpoint.example && (
                    <div className="detail-section">
                      <h5>Usage Example:</h5>
                      <div className="example-container">
                        <div className="example-request">
                          <h6>Request:</h6>
                          <pre>{JSON.stringify(endpoint.example.request, null, 2)}</pre>
                        </div>
                        <div className="example-response">
                          <h6>Response:</h6>
                          <pre>{JSON.stringify(endpoint.example.response, null, 2)}</pre>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndpointDocs; 