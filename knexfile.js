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
    connection: CON,
    "pool": {
      "min": 2,
      "max": 10,
      "createTimeoutMillis": 3000,
      "acquireTimeoutMillis": 30000,
      "idleTimeoutMillis": 30000,
      "reapIntervalMillis": 1000,
      "createRetryIntervalMillis": 100,
      "propagateCreateError": false // <- default is true, set to false
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
