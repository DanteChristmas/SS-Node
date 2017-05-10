const Customer = require('../../../models/v1/Customer');

function query(req, res, next) {
  Customer.query(req, res, next);
}

function find(req, res, next) {
  Customer.find(req, res, next);
}

function create(req, res, next) {
  Customer.create(req, res, next);
}

function update(req, res, next) {
  Customer.update(req, res, next);
}

function del(req, res, next) {
  Customer.del(req, res, next);
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
