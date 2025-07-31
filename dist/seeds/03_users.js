import bcrypt from 'bcryptjs';
export function seed(knex) {
    return bcrypt.hash('password123', 10)
        .then(passwordHash => {
        const users = [
            {
                id: 1,
                full_name: 'Admin User',
                email: 'admin@example.com',
                password_hash: passwordHash,
                role_id: 1,
                office_id: 1,
                created_at: new Date()
            },
            {
                id: 2,
                full_name: 'Manager User',
                email: 'manager@example.com',
                password_hash: passwordHash,
                role_id: 2,
                office_id: 2,
                created_at: new Date()
            },
            {
                id: 3,
                full_name: 'Regular User',
                email: 'user@example.com',
                password_hash: passwordHash,
                role_id: 3,
                office_id: 3,
                created_at: new Date()
            }
        ];
        return knex('users')
            .insert(users)
            .onConflict('id')
            .merge(['full_name', 'email', 'password_hash', 'role_id', 'office_id', 'created_at']);
    });
}
