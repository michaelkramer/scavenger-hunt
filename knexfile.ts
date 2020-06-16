// Update with your config settings.
require("dotenv").config();
module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL, //"postgresql://db:db@127.0.0.1:5550/db",
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "migrations",
  },
};
