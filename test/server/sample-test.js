process.env.NODE_ENV = 'test';
const knex = require('../../server/db/connection');

beforeEach(() => {
  return knex.migrate.rollback()
  .then(() => { return knex.migrate.latest(); })
  .then(() => { return knex.seed.run(); })
});

afterEach(() => {
  return knex.migrate.rollback();
});
