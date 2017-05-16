const Customer = require('../../../models/v1/Customer');

function query(req, res, next) {
  Customer.query(req.query).then((data) => {
    handleResponse(res, 200, 'success', data , {});
  })
  .catch((err) => {
    next(err);
  });
}

function find(req, res, next) {
  Customer.find(req.params.id).then((data) => {
    if(data.length > 0)
      handleResponse(res, 200, 'success', data[0], {});
    else {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    }
  })
  .catch((err) => {
    next(err);
  });
}

function create(req, res, next) {
  Customer.create(req.body).then((data) => {
    handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function update(req, res, next) {
  Customer.update(req.body).then((data) => {
    handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function del(req, res, next) {
  Customer.del(req.params.id).then((data) => {
    handleResponse(res, 200, 'success', { message: 'Delete Successful' }, {});
  })
  .catch((err) => {
    next(err);
  });;
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
