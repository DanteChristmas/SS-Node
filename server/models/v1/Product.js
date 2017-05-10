const knex = require('../../db/connection.js');
const uuid = require('uuid/v4');

function query(req, res, next) {
  var sql = knex.select().from('products');
  
  if(req.query.types)
    sql.andWhere({ type: req.query.types })
  if(req.query.available)
    sql.andWhere({available: (req.query.available == 'true')})
  if(req.query.min_price || req.query.max_price) {
    if(req.query.min_price) {
      if (req.query.max_price) {
        sql.whereBetween('price', [req.query.min_price, req.query.max_price]);
      } else {
        sql.andWhere('price', '>=', req.query.min_price);
      }
    } else {
      sql.andWhere('price', '<=', req.query.max_price);
    }
  }


  sql.then((data) => {
    handleResponse(res, 200, 'success', data , {});
  })
  .catch((err) => {
    next(err);
  });
}

function find(req, res, next) {
  knex.select().from('products').where({_id: req.params.id})
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
  knex('products').insert(newProduct)
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
  knex('products').where({_id: req.body._id}).update(updateProduct)
  .returning('*')
  .then((data) => {
    handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function del(req, res, next) {
  knex.delete().from('products').where({ _id: req.params.id })
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
