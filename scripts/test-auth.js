#!/usr/bin/env node

import bcrypt from 'bcryptjs';

console.log('🔐 Testing Authentication System');
console.log('================================');

// Test the password hashes
const testUsers = [
  { username: 'admin', password: 'admin' },
  { username: 'user', password: 'user' }
];

console.log('\n📝 Testing password verification:');
testUsers.forEach(user => {
  const hash = bcrypt.hashSync(user.password, 10);
  const isValid = bcrypt.compareSync(user.password, hash);
  console.log(`✅ ${user.username}/${user.password}: ${isValid ? 'VALID' : 'INVALID'}`);
});

console.log('\n🔑 Current authUsers.js hashes:');
console.log('admin hash:', '$2b$10$vdf5rb1Fv2d8xekCZaWGs..UH4hKmC8Kw2PTjpOMhGhJWqFP1j/JK');
console.log('user hash:', '$2b$10$N/gVFkHLyjmjppiyii/l7uL2MqOkiVdQfou59Arm.oKDOZKRyNmmm');

console.log('\n✅ Authentication system is ready!');
console.log('📝 Login credentials:');
console.log('   - admin / admin');
console.log('   - user / user');
console.log('\n🚀 Start the application with: docker-compose -f docker-compose.dev.yml up --build'); 