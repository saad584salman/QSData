export function seed(knex) {
  return knex('roles').del()
    .then(() => {
      return knex('roles').insert([
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
      ]);
    });
} 