// authUsers.js - Development users (remove for production)
// TODO: Move user management to database
export default [
  { 
    username: 'admin', 
    passwordHash: '$2b$10$vdf5rb1Fv2d8xekCZaWGs..UH4hKmC8Kw2PTjpOMhGhJWqFP1j/JK', 
    role: 'master' 
  },
  { 
    username: 'user', 
    passwordHash: '$2b$10$N/gVFkHLyjmjppiyii/l7uL2MqOkiVdQfou59Arm.oKDOZKRyNmmm', 
    role: 'originator' 
  }
];

// Development credentials:
// admin / admin
// user / user
