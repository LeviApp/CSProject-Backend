// Update with your config settings.

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
    connection: 'postgres://localhost/island',
    migrations: {
      tableName: "island",
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  }

};
