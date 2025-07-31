export function seed(knex) {
    // Use upsert logic to avoid foreign key constraint violations
    const propertyDefinitions = [
        {
            id: 1,
            entity_type: 'project',
            property_key: 'Category',
            value_type: 'string',
            formatting_rules: null,
            is_required: true,
            created_by_id: 1,
            created_at: new Date()
        },
        {
            id: 2,
            entity_type: 'project',
            property_key: 'Year Label',
            value_type: 'string',
            formatting_rules: null,
            is_required: false,
            created_by_id: 1,
            created_at: new Date()
        },
        {
            id: 3,
            entity_type: 'project',
            property_key: 'District',
            value_type: 'string',
            formatting_rules: null,
            is_required: false,
            created_by_id: 1,
            created_at: new Date()
        },
        {
            id: 4,
            entity_type: 'project',
            property_key: 'Expenditure',
            value_type: 'number',
            formatting_rules: 'currency',
            is_required: false,
            created_by_id: 1,
            created_at: new Date()
        },
        {
            id: 5,
            entity_type: 'project',
            property_key: 'Status',
            value_type: 'string',
            formatting_rules: null,
            is_required: true,
            created_by_id: 1,
            created_at: new Date()
        }
    ];
    const propertyOptions = [
        // Category options
        { property_definition_id: 1, option_value: 'Infrastructure' },
        { property_definition_id: 1, option_value: 'Education' },
        { property_definition_id: 1, option_value: 'Healthcare' },
        { property_definition_id: 1, option_value: 'Transportation' },
        // Year Label options
        { property_definition_id: 2, option_value: '2024' },
        { property_definition_id: 2, option_value: '2025' },
        { property_definition_id: 2, option_value: '2026' },
        // District options
        { property_definition_id: 3, option_value: 'North District' },
        { property_definition_id: 3, option_value: 'South District' },
        { property_definition_id: 3, option_value: 'East District' },
        { property_definition_id: 3, option_value: 'West District' },
        // Status options
        { property_definition_id: 5, option_value: 'Planning' },
        { property_definition_id: 5, option_value: 'In Progress' },
        { property_definition_id: 5, option_value: 'Completed' },
        { property_definition_id: 5, option_value: 'On Hold' }
    ];
    return knex('property_definitions')
        .insert(propertyDefinitions)
        .onConflict('id')
        .merge(['entity_type', 'property_key', 'value_type', 'formatting_rules', 'is_required', 'created_by_id', 'created_at'])
        .then(() => {
        // For property_options, we'll use a different approach since there's no unique constraint
        return knex('property_options')
            .del()
            .then(() => {
            return knex('property_options').insert(propertyOptions);
        });
    });
}
