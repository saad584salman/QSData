import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsxs("div", { className: "endpoint-docs", children: [_jsx("h2", { children: "API Endpoint Documentation" }), _jsx("p", { children: "Comprehensive documentation for all database API endpoints with intended outcomes and examples." }), _jsxs("div", { className: "docs-container", children: [_jsxs("div", { className: "docs-sidebar", children: [_jsx("h3", { children: "Categories" }), _jsx("div", { className: "category-list", children: Object.keys(endpointCategories).map(category => (_jsx("button", { className: `category-btn ${activeCategory === category ? 'active' : ''}`, onClick: () => setActiveCategory(category), children: endpointCategories[category].title }, category))) })] }), _jsxs("div", { className: "docs-content", children: [_jsxs("div", { className: "category-header", children: [_jsx("h3", { children: endpointCategories[activeCategory].title }), _jsx("p", { children: endpointCategories[activeCategory].description })] }), _jsx("div", { className: "endpoints-list", children: endpointCategories[activeCategory].endpoints.map((endpoint, index) => (_jsxs("div", { className: "endpoint-doc", children: [_jsxs("div", { className: "endpoint-header", children: [_jsx("span", { className: "method-badge", style: { backgroundColor: getMethodColor(endpoint.method) }, children: endpoint.method }), _jsx("span", { className: "endpoint-path", children: endpoint.path }), _jsx("span", { className: "endpoint-description", children: endpoint.description })] }), _jsxs("div", { className: "endpoint-details", children: [endpoint.pathParams && (_jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Path Parameters:" }), _jsx("div", { className: "params-list", children: Object.entries(endpoint.pathParams).map(([key, value]) => (_jsxs("div", { className: "param-item", children: [_jsx("span", { className: "param-name", children: key }), _jsx("span", { className: "param-type", children: value })] }, key))) })] })), endpoint.queryParams && (_jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Query Parameters:" }), _jsx("div", { className: "params-list", children: Object.entries(endpoint.queryParams).map(([key, value]) => (_jsxs("div", { className: "param-item", children: [_jsx("span", { className: "param-name", children: key }), _jsx("span", { className: "param-type", children: value })] }, key))) })] })), endpoint.requestBody && (_jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Request Body:" }), _jsx("div", { className: "params-list", children: Object.entries(endpoint.requestBody).map(([key, value]) => (_jsxs("div", { className: "param-item", children: [_jsx("span", { className: "param-name", children: key }), _jsx("span", { className: "param-type", children: value })] }, key))) })] })), endpoint.headers && (_jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Headers:" }), _jsx("div", { className: "params-list", children: Object.entries(endpoint.headers).map(([key, value]) => (_jsxs("div", { className: "param-item", children: [_jsx("span", { className: "param-name", children: key }), _jsx("span", { className: "param-type", children: value })] }, key))) })] })), _jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Response Examples:" }), _jsxs("div", { className: "response-examples", children: [endpoint.response.success && (_jsxs("div", { className: "response-example success", children: [_jsxs("h6", { children: ["Success Response (", endpoint.response.success.status, ")"] }), _jsx("pre", { children: JSON.stringify(endpoint.response.success.body, null, 2) })] })), endpoint.response.error && (_jsxs("div", { className: "response-example error", children: [_jsxs("h6", { children: ["Error Response (", endpoint.response.error.status, ")"] }), _jsx("pre", { children: JSON.stringify(endpoint.response.error.body, null, 2) })] }))] })] }), endpoint.example && (_jsxs("div", { className: "detail-section", children: [_jsx("h5", { children: "Usage Example:" }), _jsxs("div", { className: "example-container", children: [_jsxs("div", { className: "example-request", children: [_jsx("h6", { children: "Request:" }), _jsx("pre", { children: JSON.stringify(endpoint.example.request, null, 2) })] }), _jsxs("div", { className: "example-response", children: [_jsx("h6", { children: "Response:" }), _jsx("pre", { children: JSON.stringify(endpoint.example.response, null, 2) })] })] })] }))] })] }, index))) })] })] })] }));
};
export default EndpointDocs;
