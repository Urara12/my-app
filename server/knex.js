const knex = require("knex");

const db = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/workout`,
  searchPath: "public",

  migrate: {
    tableName: "knex_migrations",
    directory: "./migrations",
  },
  seeds: {
    seedName: "knex_migrations",
    directory: "./data",
  },
};

module.exports = db;
