export function up(knex) {
    return knex.schema.createTable('task_rules', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('entity_type').notNullable();
        table.integer('property_definition_id').references('id').inTable('property_definitions');
        table.text('description');
        table.integer('created_by_id').references('id').inTable('users').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}
export function down(knex) {
    return knex.schema.dropTable('task_rules');
}
