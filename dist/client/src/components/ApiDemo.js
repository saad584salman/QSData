import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
            }
            catch (e) {
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
        }
        catch (error) {
            setResults(prev => ({
                ...prev,
                [requestKey]: {
                    status: 'ERROR',
                    data: { error: error.message },
                    timestamp: new Date().toISOString()
                }
            }));
        }
        finally {
            setLoading(prev => ({ ...prev, [requestKey]: false }));
        }
    };
    const handleLogin = async () => {
        const { username, password } = formData.auth || {};
        if (!username || !password)
            return;
        await makeRequest('/auth/login', 'POST', { username, password });
        const result = results['POST-/auth/login'];
        if (result?.status === 200 && result.data.token) {
            setToken(result.data.token);
            localStorage.setItem('token', result.data.token);
            if (result.data.role)
                localStorage.setItem('role', result.data.role);
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
            ] },
        { id: 'projects', label: 'Projects', endpoints: [
                { path: '/projects', method: 'GET', description: 'Get all projects', requiresAuth: true },
                { path: '/projects/1', method: 'GET', description: 'Get project by ID', requiresAuth: true },
                { path: '/projects', method: 'POST', description: 'Create new project', requiresAuth: true },
                { path: '/projects/1', method: 'PUT', description: 'Update project', requiresAuth: true },
                { path: '/projects/1', method: 'DELETE', description: 'Delete project', requiresAuth: true }
            ] },
        { id: 'property-definitions', label: 'Property Definitions', endpoints: [
                { path: '/property-definitions', method: 'GET', description: 'Get all property definitions', requiresAuth: true },
                { path: '/property-definitions/1', method: 'GET', description: 'Get property definition by ID', requiresAuth: true },
                { path: '/property-definitions', method: 'POST', description: 'Create property definition', requiresAuth: true },
                { path: '/property-definitions/1', method: 'PUT', description: 'Update property definition', requiresAuth: true },
                { path: '/property-definitions/1', method: 'DELETE', description: 'Delete property definition', requiresAuth: true }
            ] },
        { id: 'entity-properties', label: 'Entity Properties', endpoints: [
                { path: '/entity-properties', method: 'GET', description: 'Get all entity properties', requiresAuth: true },
                { path: '/entity-properties/1', method: 'GET', description: 'Get entity property by ID', requiresAuth: true },
                { path: '/entity-properties', method: 'POST', description: 'Create entity property', requiresAuth: true },
                { path: '/entity-properties/1', method: 'PUT', description: 'Update entity property', requiresAuth: true },
                { path: '/entity-properties/1', method: 'DELETE', description: 'Delete entity property', requiresAuth: true }
            ] },
        { id: 'tasks', label: 'Tasks', endpoints: [
                { path: '/tasks', method: 'GET', description: 'Get all tasks', requiresAuth: true },
                { path: '/tasks/1', method: 'GET', description: 'Get task by ID', requiresAuth: true },
                { path: '/tasks', method: 'POST', description: 'Create new task', requiresAuth: true },
                { path: '/tasks/1', method: 'PUT', description: 'Update task', requiresAuth: true },
                { path: '/tasks/1', method: 'DELETE', description: 'Delete task', requiresAuth: true },
                { path: '/tasks/1/complete', method: 'POST', description: 'Complete task', requiresAuth: true }
            ] },
        { id: 'progress', label: 'Progress', endpoints: [
                { path: '/progress', method: 'GET', description: 'Get progress data', requiresAuth: true },
                { path: '/progress', method: 'POST', description: 'Create progress entry', requiresAuth: true }
            ] },
        { id: 'zone-summary', label: 'Zone Summary', endpoints: [
                { path: '/zone-summary', method: 'GET', description: 'Get zone summary', requiresAuth: true }
            ] },
        { id: 'health', label: 'Health Check', endpoints: [
                { path: '/health', method: 'GET', description: 'API health check', requiresAuth: false }
            ] }
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
        const cleanData = Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== '' && value !== null && value !== undefined));
        // Only pass data for non-GET/HEAD requests
        const requestData = (method === 'GET' || method === 'HEAD') ? null : (Object.keys(cleanData).length > 0 ? cleanData : null);
        makeRequest(endpoint, method, requestData);
    };
    return (_jsxs("div", { className: "api-demo", children: [_jsx("h2", { children: "API Endpoint Demonstrations" }), _jsx("p", { children: "This page demonstrates all database API endpoints and their intended outcomes." }), token && (_jsxs("div", { className: "auth-status", children: [_jsx("span", { className: "auth-indicator", children: "\uD83D\uDD10 Authenticated" }), _jsxs("span", { className: "role-info", children: ["Role: ", localStorage.getItem('role') || 'Unknown'] })] })), _jsx("div", { className: "demo-tabs", children: tabs.map(tab => (_jsx("button", { className: `tab ${activeTab === tab.id ? 'active' : ''}`, onClick: () => handleTabChange(tab.id), children: tab.label }, tab.id))) }), _jsx("div", { className: "demo-content", children: _jsxs("div", { className: "endpoints-section", children: [_jsxs("h3", { children: [tabs.find(t => t.id === activeTab)?.label, " Endpoints"] }), activeTab === 'auth' && (_jsxs("div", { className: "auth-section", children: [_jsx("h4", { children: "Login Form" }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Username:" }), _jsx("input", { type: "text", value: formData.auth?.username || '', onChange: (e) => handleFormChange('username', e.target.value), placeholder: "Enter username" })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { children: "Password:" }), _jsx("input", { type: "password", value: formData.auth?.password || '', onChange: (e) => handleFormChange('password', e.target.value), placeholder: "Enter password" })] }), _jsx("button", { onClick: handleLogin, disabled: loading['POST-/auth/login'], children: loading['POST-/auth/login'] ? 'Logging in...' : 'Login' }), token && (_jsxs("div", { className: "token-info", children: [_jsx("strong", { children: "Current Token:" }), " ", token.substring(0, 20), "..."] }))] })), activeTab !== 'auth' && activeTab !== 'health' && (_jsxs("div", { className: "form-section", children: [_jsx("h4", { children: "Request Form" }), _jsxs("div", { className: "sample-data-notice", children: [_jsxs("p", { children: [_jsx("strong", { children: "\uD83D\uDCA1 Tip:" }), " Use these sample values for testing:"] }), _jsxs("div", { className: "sample-values", children: [activeTab === 'projects' && (_jsx("span", { children: "Project name: \"Test Project\", Parent ID: 1" })), activeTab === 'property-definitions' && (_jsx("span", { children: "Entity type: \"project\", Property key: \"budget\", Value type: \"number\"" })), activeTab === 'entity-properties' && (_jsx("span", { children: "Entity type: \"project\", Entity ID: 1, Property Definition ID: 1, Value: \"50000\"" })), activeTab === 'tasks' && (_jsx("span", { children: "Task rule ID: 1, Entity type: \"project\", Entity ID: 1" })), activeTab === 'progress' && (_jsxs("span", { children: ["Entity type: \"project\", Entity ID: 1, Progress data: ", '{"progress": 75}'] }))] })] }), getFormFields(activeTab).map(field => (_jsxs("div", { className: "form-group", children: [_jsxs("label", { children: [field.label, ":"] }), field.type === 'select' ? (_jsxs("select", { value: formData[activeTab]?.[field.name] || '', onChange: (e) => handleFormChange(field.name, e.target.value), children: [_jsx("option", { value: "", children: "Select..." }), field.options?.map(opt => (_jsx("option", { value: opt, children: opt }, opt)))] })) : field.type === 'textarea' ? (_jsx("textarea", { value: formData[activeTab]?.[field.name] || '', onChange: (e) => handleFormChange(field.name, e.target.value), placeholder: `Enter ${field.label.toLowerCase()}` })) : field.type === 'checkbox' ? (_jsx("input", { type: "checkbox", checked: formData[activeTab]?.[field.name] || false, onChange: (e) => handleFormChange(field.name, e.target.checked) })) : (_jsx("input", { type: field.type, value: formData[activeTab]?.[field.name] || '', onChange: (e) => handleFormChange(field.name, e.target.value), placeholder: `Enter ${field.label.toLowerCase()}` }))] }, field.name)))] })), _jsx("div", { className: "endpoints-list", children: tabs.find(t => t.id === activeTab)?.endpoints.map((endpoint, index) => (_jsxs("div", { className: "endpoint-item", children: [_jsxs("div", { className: "endpoint-header", children: [_jsx("span", { className: "method", "data-method": endpoint.method, children: endpoint.method }), _jsx("span", { className: "path", children: endpoint.path }), _jsx("span", { className: "description", children: endpoint.description }), endpoint.requiresAuth && !token && (_jsx("span", { className: "auth-required", children: "\u26A0\uFE0F Requires Auth" })), _jsx("button", { onClick: () => handleSubmit(endpoint.path, endpoint.method), disabled: loading[`${endpoint.method}-${endpoint.path}`] || (endpoint.requiresAuth && !token), className: "test-btn", children: loading[`${endpoint.method}-${endpoint.path}`] ? 'Testing...' : 'Test' })] }), results[`${endpoint.method}-${endpoint.path}`] && (_jsxs("div", { className: `result-section ${results[`${endpoint.method}-${endpoint.path}`].status >= 200 && results[`${endpoint.method}-${endpoint.path}`].status < 300 ? 'success' : 'error'}`, children: [_jsx("h5", { children: "Response:" }), _jsxs("div", { className: "result-details", children: [_jsxs("div", { children: [_jsx("strong", { children: "Status:" }), _jsx("span", { className: `status-code ${results[`${endpoint.method}-${endpoint.path}`].status >= 200 && results[`${endpoint.method}-${endpoint.path}`].status < 300 ? 'success' : 'error'}`, children: results[`${endpoint.method}-${endpoint.path}`].status })] }), _jsxs("div", { children: [_jsx("strong", { children: "Timestamp:" }), " ", new Date(results[`${endpoint.method}-${endpoint.path}`].timestamp).toLocaleTimeString()] })] }), _jsx("pre", { className: "result-data", children: JSON.stringify(results[`${endpoint.method}-${endpoint.path}`].data, null, 2) })] }))] }, `${activeTab}-${endpoint.method}-${endpoint.path}-${index}`))) })] }) })] }));
};
export default ApiDemo;
