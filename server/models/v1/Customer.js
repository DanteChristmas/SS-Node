const knex = require('../../db/connection.js');
const uuid = require('uuid/v4');

function query(req, res, next) {
  var sql = knex.select().from('customers');

  sql.then((data) => {
    handleResponse(res, 200, 'success', data , {});
  })
  .catch((err) => {
    next(err);
  });
}

function find(req, res, next) {
  knex.select().from('customers').where({_id: req.params.id})
  .then((data) => {
    if(data.length > 0)
      handleResponse(res, 200, 'success', data[0], {});
    else {
      let err = new Error('Not Found');
      err.status = 404;
      next(err);
    }
  })
  .catch((err) => {
    next(err);
  });
}

function create(req, res, next) {
  var newProduct = req.body;
  newProduct._id = uuid();
  knex('customers').insert(newProduct)
  .returning('*')
  .then((data) => {
    handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function update(req, res, next) {
  var updateProduct = req.body;
  updateProduct.updated_at = new Date().toISOString();
  knex('customers').where({_id: req.body._id}).update(updateProduct)
  .returning('*')
  .then((data) => {
    handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function del(req, res, next) {
  knex.delete().from('customers').where({ _id: req.params.id })
  .then((data) => {
    handleResponse(res, 200, 'success', { message: 'Delete Successful' }, {});
  })
  .catch((err) => {
    next(err);
  });
}

function handleResponse(res, code, statusMsg, data, meta) {
  res.status(code).json({ status: statusMsg, content: data , meta: {} });
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
