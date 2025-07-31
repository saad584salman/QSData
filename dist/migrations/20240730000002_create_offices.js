export function up(knex) {
    return knex.schema.createTable('offices', (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('type').notNullable();
        table.integer('parent_office_id').references('id').inTable('offices');
        table.integer('headed_by_id'); // Remove foreign key constraint for now
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}
export function down(knex) {
    return knex.schema.dropTable('offices');
}
