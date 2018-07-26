
const path = require('path')

module.exports = {

  development: {
    client: 'pg',
    connection:  'postgres://localhost/election_data',
    migrations: {
        directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/migrations',
    },
    seeds: {
      directory: __dirname + '/seeds',
    },
  }
};
