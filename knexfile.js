// Update with your config settings.
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import pg from "pg";

const knexConfig = {

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
      connectionString: process.env.DATABASE_URL,
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


export default knexConfig;