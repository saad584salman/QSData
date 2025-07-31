import db from './config/database.js';
console.log('🔍 Testing database connection...');
try {
    // Test basic connection
    const result = await db.raw('SELECT 1 as test');
    console.log('✅ Database connection successful:', result.rows[0]);
    // Test if tables exist
    const tables = await db.raw(`
    SELECT table_name 
    FROM information_schema.tables 
    WHERE table_schema = 'public'
  `);
    console.log('📋 Available tables:');
    tables.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
    });
}
catch (error) {
    console.error('❌ Database connection failed:', error.message);
    console.log('\n🔧 Solutions:');
    console.log('1. Start Docker Desktop');
    console.log('2. Run: docker-compose -f docker-compose.dev.yml up -d');
    console.log('3. Or install PostgreSQL locally and update .env');
}
process.exit(0);
