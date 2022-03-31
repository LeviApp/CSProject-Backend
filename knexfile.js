// Update with your config settings.
require("dotenv").config();
const pg = require("pg");
pg.defaults.ssl = true;


const CON = process.env.DATABASE_URL

module.exports = {

  development: {
    client: "pg",
    connection: 'postgres://localhost/island',
    migrations: {
      tableName: "island",
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  production: {
    client: "pg",
    
    connection: {
      connectionString: CON,
      ssl: {
        required: true,
        rejectUnauthorized: false
      }      
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "map",
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }

};
