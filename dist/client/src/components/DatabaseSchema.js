import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
const DatabaseSchema = () => {
    const [activeTab, setActiveTab] = useState('tables');
    const tables = [
        {
            name: 'roles',
            description: 'User roles and permissions',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'name', type: 'VARCHAR(50)', constraints: 'NOT NULL, UNIQUE' },
                { name: 'description', type: 'TEXT', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'offices',
            description: 'Office locations and information',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'name', type: 'VARCHAR(100)', constraints: 'NOT NULL' },
                { name: 'location', type: 'VARCHAR(255)', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'users',
            description: 'User accounts and authentication',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'username', type: 'VARCHAR(50)', constraints: 'NOT NULL, UNIQUE' },
                { name: 'password_hash', type: 'VARCHAR(255)', constraints: 'NOT NULL' },
                { name: 'email', type: 'VARCHAR(100)', constraints: 'NULL' },
                { name: 'role_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES roles(id)' },
                { name: 'office_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES offices(id)' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'projects',
            description: 'Project management and hierarchy',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'name', type: 'VARCHAR(255)', constraints: 'NOT NULL' },
                { name: 'parent_project_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES projects(id), NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'property_definitions',
            description: 'Dynamic property definitions for entities',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'entity_type', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'property_key', type: 'VARCHAR(100)', constraints: 'NOT NULL' },
                { name: 'value_type', type: 'ENUM', constraints: "'string', 'number', 'date', 'boolean'" },
                { name: 'formatting_rules', type: 'TEXT', constraints: 'NULL' },
                { name: 'is_required', type: 'BOOLEAN', constraints: 'DEFAULT FALSE' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'property_options',
            description: 'Options for property definitions',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'property_definition_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES property_definitions(id)' },
                { name: 'option_value', type: 'VARCHAR(255)', constraints: 'NOT NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'entity_properties',
            description: 'Dynamic property values for entities',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'entity_type', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'entity_id', type: 'INTEGER', constraints: 'NOT NULL' },
                { name: 'property_definition_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES property_definitions(id)' },
                { name: 'value', type: 'TEXT', constraints: 'NOT NULL' },
                { name: 'value_type', type: 'ENUM', constraints: "'string', 'number', 'date', 'boolean'" },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'entity_property_logs',
            description: 'Audit trail for property changes',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'entity_property_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES entity_properties(id)' },
                { name: 'old_value', type: 'TEXT', constraints: 'NULL' },
                { name: 'new_value', type: 'TEXT', constraints: 'NOT NULL' },
                { name: 'changed_by_user_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES users(id)' },
                { name: 'reason', type: 'TEXT', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'task_rules',
            description: 'Task creation rules and templates',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'name', type: 'VARCHAR(255)', constraints: 'NOT NULL' },
                { name: 'description', type: 'TEXT', constraints: 'NULL' },
                { name: 'entity_type', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'conditions', type: 'JSON', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'tasks',
            description: 'Task management and assignments',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'task_rule_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES task_rules(id)' },
                { name: 'entity_type', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'entity_id', type: 'INTEGER', constraints: 'NOT NULL' },
                { name: 'assigned_to_user_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES users(id), NULL' },
                { name: 'assigned_to_office_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES offices(id), NULL' },
                { name: 'status', type: 'ENUM', constraints: "'pending', 'completed', 'overdue'" },
                { name: 'due_date', type: 'DATE', constraints: 'NULL' },
                { name: 'notes', type: 'TEXT', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'task_logs',
            description: 'Task activity and completion logs',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'task_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES tasks(id)' },
                { name: 'action', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'notes', type: 'TEXT', constraints: 'NULL' },
                { name: 'completed_by_user_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES users(id)' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'permissions',
            description: 'Role-based permissions system',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'role_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES roles(id)' },
                { name: 'resource', type: 'VARCHAR(100)', constraints: 'NOT NULL' },
                { name: 'action', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' }
            ]
        },
        {
            name: 'approval_requests',
            description: 'Approval workflow management',
            columns: [
                { name: 'id', type: 'INTEGER', constraints: 'PRIMARY KEY, AUTO_INCREMENT' },
                { name: 'entity_type', type: 'VARCHAR(50)', constraints: 'NOT NULL' },
                { name: 'entity_id', type: 'INTEGER', constraints: 'NOT NULL' },
                { name: 'requested_by_user_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES users(id)' },
                { name: 'approved_by_user_id', type: 'INTEGER', constraints: 'FOREIGN KEY REFERENCES users(id), NULL' },
                { name: 'status', type: 'ENUM', constraints: "'pending', 'approved', 'rejected'" },
                { name: 'notes', type: 'TEXT', constraints: 'NULL' },
                { name: 'created_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP' },
                { name: 'updated_at', type: 'TIMESTAMP', constraints: 'DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP' }
            ]
        }
    ];
    const relationships = [
        { from: 'users', to: 'roles', type: 'Many-to-One' },
        { from: 'users', to: 'offices', type: 'Many-to-One' },
        { from: 'projects', to: 'projects', type: 'Self-Reference (Hierarchy)' },
        { from: 'property_options', to: 'property_definitions', type: 'Many-to-One' },
        { from: 'entity_properties', to: 'property_definitions', type: 'Many-to-One' },
        { from: 'entity_property_logs', to: 'entity_properties', type: 'Many-to-One' },
        { from: 'entity_property_logs', to: 'users', type: 'Many-to-One' },
        { from: 'tasks', to: 'task_rules', type: 'Many-to-One' },
        { from: 'tasks', to: 'users', type: 'Many-to-One' },
        { from: 'tasks', to: 'offices', type: 'Many-to-One' },
        { from: 'task_logs', to: 'tasks', type: 'Many-to-One' },
        { from: 'task_logs', to: 'users', type: 'Many-to-One' },
        { from: 'permissions', to: 'roles', type: 'Many-to-One' },
        { from: 'approval_requests', to: 'users', type: 'Many-to-One (Requested By)' },
        { from: 'approval_requests', to: 'users', type: 'Many-to-One (Approved By)' }
    ];
    const views = [
        {
            name: 'project_export_view',
            description: 'Comprehensive project data for export',
            columns: [
                'project_id', 'project_name', 'parent_project_name', 'property_key', 'property_value',
                'task_count', 'completed_tasks', 'pending_tasks', 'overdue_tasks'
            ]
        }
    ];
    return (_jsxs("div", { className: "database-schema", children: [_jsx("h2", { children: "Database Schema Overview" }), _jsx("p", { children: "This section shows the complete database structure and relationships for the QSData system." }), _jsxs("div", { className: "schema-tabs", children: [_jsxs("button", { className: `schema-tab ${activeTab === 'tables' ? 'active' : ''}`, onClick: () => setActiveTab('tables'), children: ["Tables (", tables.length, ")"] }), _jsxs("button", { className: `schema-tab ${activeTab === 'relationships' ? 'active' : ''}`, onClick: () => setActiveTab('relationships'), children: ["Relationships (", relationships.length, ")"] }), _jsxs("button", { className: `schema-tab ${activeTab === 'views' ? 'active' : ''}`, onClick: () => setActiveTab('views'), children: ["Views (", views.length, ")"] })] }), _jsxs("div", { className: "schema-content", children: [activeTab === 'tables' && (_jsxs("div", { className: "tables-section", children: [_jsx("h3", { children: "Database Tables" }), _jsx("div", { className: "tables-grid", children: tables.map(table => (_jsxs("div", { className: "table-card", children: [_jsxs("div", { className: "table-header", children: [_jsx("h4", { children: table.name }), _jsx("span", { className: "table-description", children: table.description })] }), _jsxs("div", { className: "table-columns", children: [_jsx("h5", { children: "Columns:" }), _jsx("div", { className: "columns-list", children: table.columns.map(column => (_jsxs("div", { className: "column-item", children: [_jsx("div", { className: "column-name", children: column.name }), _jsx("div", { className: "column-type", children: column.type }), _jsx("div", { className: "column-constraints", children: column.constraints })] }, column.name))) })] })] }, table.name))) })] })), activeTab === 'relationships' && (_jsxs("div", { className: "relationships-section", children: [_jsx("h3", { children: "Table Relationships" }), _jsx("div", { className: "relationships-list", children: relationships.map((rel, index) => (_jsxs("div", { className: "relationship-item", children: [_jsx("div", { className: "relationship-from", children: rel.from }), _jsx("div", { className: "relationship-arrow", children: "\u2192" }), _jsx("div", { className: "relationship-to", children: rel.to }), _jsx("div", { className: "relationship-type", children: rel.type })] }, index))) })] })), activeTab === 'views' && (_jsxs("div", { className: "views-section", children: [_jsx("h3", { children: "Database Views" }), _jsx("div", { className: "views-list", children: views.map(view => (_jsxs("div", { className: "view-item", children: [_jsxs("div", { className: "view-header", children: [_jsx("h4", { children: view.name }), _jsx("span", { className: "view-description", children: view.description })] }), _jsxs("div", { className: "view-columns", children: [_jsx("h5", { children: "Columns:" }), _jsx("div", { className: "columns-grid", children: view.columns.map(column => (_jsx("span", { className: "view-column", children: column }, column))) })] })] }, view.name))) })] }))] })] }));
};
export default DatabaseSchema;
