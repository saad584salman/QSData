export function up(knex) {
  return knex.schema.createTable('property_definitions', (table) => {
    table.increments('id').primary();
    table.string('entity_type').notNullable();
    table.string('property_key').notNullable();
    table.string('value_type').notNullable().checkIn(['string', 'number', 'date', 'boolean']);
    table.text('formatting_rules');
    table.boolean('is_required').defaultTo(false);
    table.integer('created_by_id').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable('property_definitions');
} 