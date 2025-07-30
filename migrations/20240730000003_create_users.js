export function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('full_name').notNullable();
    table.string('email').notNullable().unique();
    table.string('password_hash').notNullable();
    table.integer('role_id').references('id').inTable('roles').notNullable();
    table.integer('office_id').references('id').inTable('offices');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
} 