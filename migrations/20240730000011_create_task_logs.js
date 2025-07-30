export function up(knex) {
  return knex.schema.createTable('task_logs', (table) => {
    table.increments('id').primary();
    table.integer('task_id').references('id').inTable('tasks').notNullable();
    table.string('status').notNullable();
    table.integer('changed_by_id').references('id').inTable('users').notNullable();
    table.timestamp('changed_at').defaultTo(knex.fn.now());
    table.text('notes');
  });
}

export function down(knex) {
  return knex.schema.dropTable('task_logs');
} 