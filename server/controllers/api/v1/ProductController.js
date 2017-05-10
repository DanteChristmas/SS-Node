const Product = require('../../../models/v1/Product');

function query(req, res, next) {
  Product.query(req, res, next);
}

function find(req, res, next) {
  Product.find(req, res, next);
}

function create(req, res, next) {
  Product.create(req, res, next);
}

function update(req, res, next) {
  Product.update(req, res, next);
}

function del(req, res, next) {
  Product.del(req, res, next);
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
