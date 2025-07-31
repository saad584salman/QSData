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

  return (
    <div className="database-schema">
      <h2>Database Schema Overview</h2>
      <p>This section shows the complete database structure and relationships for the QSData system.</p>
      
      <div className="schema-tabs">
        <button 
          className={`schema-tab ${activeTab === 'tables' ? 'active' : ''}`}
          onClick={() => setActiveTab('tables')}
        >
          Tables ({tables.length})
        </button>
        <button 
          className={`schema-tab ${activeTab === 'relationships' ? 'active' : ''}`}
          onClick={() => setActiveTab('relationships')}
        >
          Relationships ({relationships.length})
        </button>
        <button 
          className={`schema-tab ${activeTab === 'views' ? 'active' : ''}`}
          onClick={() => setActiveTab('views')}
        >
          Views ({views.length})
        </button>
      </div>

      <div className="schema-content">
        {activeTab === 'tables' && (
          <div className="tables-section">
            <h3>Database Tables</h3>
            <div className="tables-grid">
              {tables.map(table => (
                <div key={table.name} className="table-card">
                  <div className="table-header">
                    <h4>{table.name}</h4>
                    <span className="table-description">{table.description}</span>
                  </div>
                  <div className="table-columns">
                    <h5>Columns:</h5>
                    <div className="columns-list">
                      {table.columns.map(column => (
                        <div key={column.name} className="column-item">
                          <div className="column-name">{column.name}</div>
                          <div className="column-type">{column.type}</div>
                          <div className="column-constraints">{column.constraints}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'relationships' && (
          <div className="relationships-section">
            <h3>Table Relationships</h3>
            <div className="relationships-list">
              {relationships.map((rel, index) => (
                <div key={index} className="relationship-item">
                  <div className="relationship-from">{rel.from}</div>
                  <div className="relationship-arrow">→</div>
                  <div className="relationship-to">{rel.to}</div>
                  <div className="relationship-type">{rel.type}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'views' && (
          <div className="views-section">
            <h3>Database Views</h3>
            <div className="views-list">
              {views.map(view => (
                <div key={view.name} className="view-item">
                  <div className="view-header">
                    <h4>{view.name}</h4>
                    <span className="view-description">{view.description}</span>
                  </div>
                  <div className="view-columns">
                    <h5>Columns:</h5>
                    <div className="columns-grid">
                      {view.columns.map(column => (
                        <span key={column} className="view-column">{column}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatabaseSchema; 