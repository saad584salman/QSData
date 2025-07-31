/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('zone_summary', (table) => {
        table.increments('id').primary();
        table.text('zone');
        table.integer('no_of_projects');
        table.decimal('approved_cost', 14, 2);
        table.integer('no_handed_over');
        table.integer('no_remaining');
        table.timestamps(true, true);
    });
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('zone_summary');
}
