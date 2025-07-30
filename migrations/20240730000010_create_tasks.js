export function up(knex) {
  return knex.schema.createTable('tasks', (table) => {
    table.increments('id').primary();
    table.integer('task_rule_id').references('id').inTable('task_rules').notNullable();
    table.string('entity_type').notNullable();
    table.integer('entity_id').notNullable();
    table.integer('assigned_to_user_id').references('id').inTable('users');
    table.integer('assigned_to_office_id').references('id').inTable('offices');
    table.date('due_date');
    table.string('status').notNullable().checkIn(['pending', 'completed', 'overdue']);
    table.integer('created_by_id').references('id').inTable('users').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.integer('completed_by_id').references('id').inTable('users');
    table.timestamp('completed_at');
  });
}

export function down(knex) {
  return knex.schema.dropTable('tasks');
} 