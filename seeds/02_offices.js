export function seed(knex) {
  return knex('offices').del()
    .then(() => {
      return knex('offices').insert([
        {
          id: 1,
          name: 'Head Office',
          type: 'headquarters',
          parent_office_id: null,
          headed_by_id: null,
          created_at: new Date()
        },
        {
          id: 2,
          name: 'Regional Office A',
          type: 'regional',
          parent_office_id: 1,
          headed_by_id: null,
          created_at: new Date()
        },
        {
          id: 3,
          name: 'Regional Office B',
          type: 'regional',
          parent_office_id: 1,
          headed_by_id: null,
          created_at: new Date()
        }
      ]);
    });
} 