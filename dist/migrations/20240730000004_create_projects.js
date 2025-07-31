export function up(knex) {
    return knex.schema.createTable('projects', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('parent_project_id').references('id').inTable('projects');
        table.integer('created_by_id').references('id').inTable('users').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}
export function down(knex) {
    return knex.schema.dropTable('projects');
}
