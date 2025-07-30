export function up(knex) {
  return knex.schema.createTable('entity_property_logs', (table) => {
    table.increments('id').primary();
    table.integer('entity_property_id').references('id').inTable('entity_properties').notNullable();
    table.text('old_value');
    table.text('new_value');
    table.integer('changed_by_id').references('id').inTable('users').notNullable();
    table.timestamp('changed_at').defaultTo(knex.fn.now());
    table.text('reason');
  });
}

export function down(knex) {
  return knex.schema.dropTable('entity_property_logs');
} 