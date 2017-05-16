const knex = require('../../db/connection.js');
const uuid = require('uuid/v4');

function query(options) {
  var sql = knex.select().from('customers');

  return sql;
}

function find(id) {
  return knex.select().from('customers').where({_id: id});
}

function create(newCustomer) {
  newCustomer._id = uuid();
  return knex('customers').insert(newCustomer).returning('*');
}

function update(updateCustomer) {
  updateCustomer.updated_at = new Date().toISOString();
  return knex('customers').where({_id: updateCustomer._id}).update(updateCustomer).returning('*');
}

function del(id) {
  return knex.delete().from('customers').where({ _id: id });
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
