export function up(knex) {
    return knex.schema.createTable('property_options', (table) => {
        table.increments('id').primary();
        table.integer('property_definition_id').references('id').inTable('property_definitions').notNullable();
        table.text('option_value').notNullable();
    });
}
export function down(knex) {
    return knex.schema.dropTable('property_options');
}
