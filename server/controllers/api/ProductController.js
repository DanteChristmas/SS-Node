const knex = require('../../db/connection.js');

function query(req, res, next) {
  knex.select().from('products')
  .then((data) => {
    handleResponse(res, 200, 'success', data, {});
  })
  .catch((err) => {
    next(err);
  });
}

function find(req, res, next) {
  knex.select().from('products').where({id: req.params.id})
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
  handleResponse(res, 200, 'success');
}

function update(req, res, next) {
  handleResponse(res, 200, 'success');
}

function del(req, res) {
  handleResponse(res, 200, 'success');
}

function handleResponse(res, code, statusMsg, data, meta) {
  res.status(code).json({ status: statusMsg, content: data, meta: {} });
}

module.exports = {
  query,
  find,
  create,
  update,
  del
}
