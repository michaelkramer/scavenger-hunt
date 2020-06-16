// Update with your config settings.
const env = require("./src/env");
module.exports = {
  development: {
    client: "postgresql",
    connection: env.env.db.connection, //"postgresql://db:db@127.0.0.1:5550/db",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },
};
