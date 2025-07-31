export function up(knex) {
    return knex.schema.createTable('permissions', (table) => {
        table.increments('id').primary();
        table.integer('role_id').references('id').inTable('roles');
        table.integer('user_id').references('id').inTable('users');
        table.string('entity_type').notNullable();
        table.integer('entity_id');
        table.integer('property_definition_id').references('id').inTable('property_definitions');
        table.boolean('can_view').defaultTo(false);
        table.boolean('can_edit').defaultTo(false);
        table.boolean('requires_approval').defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}
export function down(knex) {
    return knex.schema.dropTable('permissions');
}
