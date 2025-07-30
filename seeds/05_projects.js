export function seed(knex) {
  return knex('projects').del()
    .then(() => {
      return knex('projects').insert([
        {
          id: 1,
          name: 'Highway Expansion Project',
          parent_project_id: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          id: 2,
          name: 'School Renovation Project',
          parent_project_id: null,
          created_by_id: 2,
          created_at: new Date()
        },
        {
          id: 3,
          name: 'Hospital Equipment Upgrade',
          parent_project_id: null,
          created_by_id: 1,
          created_at: new Date()
        }
      ]);
    })
    .then(() => {
      return knex('entity_properties').insert([
        // Highway Expansion Project properties
        {
          entity_type: 'project',
          entity_id: 1,
          property_definition_id: 1,
          string_value: 'Infrastructure',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 1,
          property_definition_id: 2,
          string_value: '2024',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 1,
          property_definition_id: 3,
          string_value: 'North District',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 1,
          property_definition_id: 4,
          string_value: null,
          number_value: 2500000.00,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 1,
          property_definition_id: 5,
          string_value: 'In Progress',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        
        // School Renovation Project properties
        {
          entity_type: 'project',
          entity_id: 2,
          property_definition_id: 1,
          string_value: 'Education',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 2,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 2,
          property_definition_id: 2,
          string_value: '2025',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 2,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 2,
          property_definition_id: 3,
          string_value: 'South District',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 2,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 2,
          property_definition_id: 4,
          string_value: null,
          number_value: 800000.00,
          date_value: null,
          bool_value: null,
          created_by_id: 2,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 2,
          property_definition_id: 5,
          string_value: 'Planning',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 2,
          created_at: new Date()
        },
        
        // Hospital Equipment Upgrade properties
        {
          entity_type: 'project',
          entity_id: 3,
          property_definition_id: 1,
          string_value: 'Healthcare',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 3,
          property_definition_id: 2,
          string_value: '2024',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 3,
          property_definition_id: 3,
          string_value: 'East District',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 3,
          property_definition_id: 4,
          string_value: null,
          number_value: 1200000.00,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        },
        {
          entity_type: 'project',
          entity_id: 3,
          property_definition_id: 5,
          string_value: 'Completed',
          number_value: null,
          date_value: null,
          bool_value: null,
          created_by_id: 1,
          created_at: new Date()
        }
      ]);
    });
} 