// CommonJS knexfile for migrations compatibility
const config = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'devpassword',
      database: process.env.DB_NAME || 'qsdata'
    },
    migrations: {
      directory: './migrations',
      extension: 'js'
    },
    seeds: {
      directory: './seeds',
      extension: 'js'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'devpassword',
      database: process.env.DB_NAME_TEST || 'qsdata_test'
    },
    migrations: {
      directory: './migrations',
      extension: 'js'
    },
    seeds: {
      directory: './seeds',
      extension: 'js'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations',
      extension: 'js'
    },
    seeds: {
      directory: './seeds',
      extension: 'js'
    }
  }
};

module.exports = config;