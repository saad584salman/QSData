import knex from 'knex';
import { Model } from 'objection';
import knexfile from '../knexfile.js';

const environment = process.env.NODE_ENV || 'development';
const config = knexfile[environment];

const db = knex(config);

// Bind Objection.js to the knex instance
Model.knex(db);

export default db; 