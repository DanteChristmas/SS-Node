'use strict';

const knex = require('../../db/connection.js');
const uuid = require('uuid/v4');

function query(options) {
  var sql = knex.select().from('products');

  if(options.types)
    sql.andWhere({ type: options.types })
  if(options.available)
    sql.andWhere({available: (options.available == 'true')})
  if(options.min_price || options.max_price) {
    if(options.min_price) {
      if (options.max_price) {
        sql.whereBetween('price', [options.min_price, options.max_price]);
      } else {
        sql.andWhere('price', '>=', options.min_price);
      }
    } else {
      sql.andWhere('price', '<=', options.max_price);
    }
  }

  return sql;
}

function find(id) {
  return knex.select().from('products').where({_id: id});
}

function create(newProduct) {
  newProduct._id = uuid();
  return knex('products').insert(newProduct).returning('*');
}

function update(updateProduct) {
  updateProduct.updated_at = new Date().toISOString();
  return knex('products').where({_id: updateProduct._id}).update(updateProduct).returning('*');

}

function del(id) {
  return knex.delete().from('products').where({ _id: id });
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
