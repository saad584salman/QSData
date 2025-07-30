export function seed(knex) {
  // Use upsert logic to avoid foreign key constraint violations
  const offices = [
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
  ];

  return knex('offices')
    .insert(offices)
    .onConflict('id')
    .merge(['name', 'type', 'parent_office_id', 'headed_by_id', 'created_at']);
} 