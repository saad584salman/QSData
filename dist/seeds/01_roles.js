export function seed(knex) {
    // Use upsert logic to avoid foreign key constraint violations
    const roles = [
        {
            id: 1,
            name: 'Administrator',
            hierarchy_level: 100
        },
        {
            id: 2,
            name: 'Manager',
            hierarchy_level: 50
        },
        {
            id: 3,
            name: 'User',
            hierarchy_level: 10
        }
    ];
    return knex('roles')
        .insert(roles)
        .onConflict('id')
        .merge(['name', 'hierarchy_level']);
}
