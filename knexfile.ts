// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgresql://db:db@127.0.0.1:5550/db",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "migrations",
    },
  },
};
