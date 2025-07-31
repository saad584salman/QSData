import fs from 'fs';
import pool from '../db/index.js';
async function run() {
    const schema = fs.readFileSync('./db/schema.sql', 'utf8');
    const seed = fs.readFileSync('./db/seed.sql', 'utf8');
    try {
        await pool.query(schema);
        await pool.query(seed);
        console.log('Database initialized');
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await pool.end();
    }
}
run();
