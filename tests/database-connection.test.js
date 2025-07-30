import db from '../config/database.js';

describe('Database Connection Test', () => {
  beforeAll(async () => {
    // Wait for database connection and setup
    await waitForDatabase(db);
  });

  it('should connect to the database', async () => {
    try {
      const result = await db.raw('SELECT 1 as test');
      expect(result.rows[0].test).toBe(1);
      console.log('✅ Database connection successful');
    } catch (error) {
      console.error('❌ Database connection failed:', error.message);
      throw error;
    }
  });

  afterAll(async () => {
    await cleanupDatabase(db);
    await db.destroy();
  });
}); 