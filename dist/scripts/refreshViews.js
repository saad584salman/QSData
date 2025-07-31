import dotenv from 'dotenv';
import db from '../config/database.js';
dotenv.config();
async function refreshProjectExport() {
    try {
        console.log('Refreshing project_export materialized view...');
        await db.raw('REFRESH MATERIALIZED VIEW project_export');
        console.log('✅ project_export materialized view refreshed successfully');
        // Get count of records in the view
        const result = await db.raw('SELECT COUNT(*) as count FROM project_export');
        console.log(`📊 View now contains ${result.rows[0].count} records`);
    }
    catch (error) {
        console.error('❌ Error refreshing materialized view:', error);
        process.exit(1);
    }
    finally {
        await db.destroy();
    }
}
// Run the refresh
refreshProjectExport();
