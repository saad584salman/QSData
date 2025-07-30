export function up(knex) {
  return knex.schema.createTable('entity_properties', (table) => {
    table.increments('id').primary();
    table.string('entity_type').notNullable();
    table.integer('entity_id').notNullable();
    table.integer('property_definition_id').references('id').inTable('property_definitions').notNullable();
    table.text('string_value');
    table.decimal('number_value', 15, 4);
    table.date('date_value');
    table.boolean('bool_value');
    table.integer('created_by_id').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
  .then(() => {
    // Create indexes for performance
    return knex.raw(`
      CREATE INDEX ON entity_properties(entity_type, property_definition_id, string_value);
      CREATE INDEX ON entity_properties(entity_type, property_definition_id, number_value);
      CREATE INDEX ON entity_properties(entity_type, property_definition_id, date_value);
    `);
  });
}

export function down(knex) {
  return knex.schema.dropTable('entity_properties');
} 