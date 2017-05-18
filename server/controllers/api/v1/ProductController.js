const Product = require('../../../models/v1/Product');
const apiUtils = require('../../../utils/apiUtils');

function query(req, res, next) {
  var meta = new Promise((resolve, reject) => {
    Product.count(req.query).then((data) => {
      data = apiUtils.buildMeta(data[0], req.query);
      resolve(data)
    })
    .catch((err) => {
      reject(err);
    })
  });
  var products = new Promise((resolve, reject) => {
    query = Product.query(req.query).then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });


  Promise.all([products, meta]).then((vals) => {
    apiUtils.handleResponse(res, 200, 'success', vals[0] , vals[1]);
  })
  .catch((err) => {
    next(err);
  });
}

function find(req, res, next) {
  Product.find(req.params.id).then((data) => {
    if(data.length > 0)
      apiUtils.handleResponse(res, 200, 'success', data[0], {});
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
  Product.create(req.body).then((data) => {
    apiUtils.handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function update(req, res, next) {
  Product.update(req.body).then((data) => {
    apiUtils.handleResponse(res, 200, 'success', data[0], {});
  })
  .catch((err) => {
    next(err);
  });
}

function del(req, res, next) {
  Product.del(req.params.id).then((data) => {
    apiUtils.handleResponse(res, 200, 'success', { message: 'Delete Successful' }, {});
  })
  .catch((err) => {
    next(err);
  });;
}



module.exports = {
  query,
  find,
  create,
  update,
  del
}
