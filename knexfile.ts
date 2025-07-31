import dotenv from 'dotenv';


dotenv.config();

interface DatabaseConfig {
  client: string;
  connection: string | {
    host: string;
    port: number;
    database: string;
    user: string;
    password: string;
    ssl?: { rejectUnauthorized: boolean };
  };
  migrations: {
    directory: string;
  };
  seeds: {
    directory: string;
  };
}

interface KnexConfig {
  development: DatabaseConfig;
  test: DatabaseConfig;
  production: DatabaseConfig;
}

const config: KnexConfig = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST || 'db',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME || 'qsdata',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'password',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  test: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME_TEST || 'qsdata_test',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'devpassword',
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST!,
      port: parseInt(process.env.DB_PORT || '5432'),
      database: process.env.DB_NAME!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
};

export default config; 