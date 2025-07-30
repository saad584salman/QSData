export function up(knex) {
  return knex.schema.createTable('approval_requests', (table) => {
    table.increments('id').primary();
    table.string('entity_type').notNullable();
    table.integer('entity_id').notNullable();
    table.integer('property_definition_id').references('id').inTable('property_definitions');
    table.integer('requested_by_id').references('id').inTable('users').notNullable();
    table.timestamp('requested_at').defaultTo(knex.fn.now());
    table.string('status').notNullable().checkIn(['pending', 'approved', 'rejected']);
    table.integer('approved_by_id').references('id').inTable('users');
    table.timestamp('approved_at');
    table.text('reason');
  });
}

export function down(knex) {
  return knex.schema.dropTable('approval_requests');
} 