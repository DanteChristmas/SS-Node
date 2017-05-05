require('dotenv').config();
const databaseName = "ss";

module.exports = {
  development: {
    client: 'postgresql',
    connection: `${process.env.DB_CONNECTION}/${databaseName}_dev`,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `${process.env.DB_CONNECTION}/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/server/db/seeds'
    }
  }
}
