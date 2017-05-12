const Product = require('../models/v1/Product');

function index(req, res, next) {
  Product.query({}).then((data) => {
    res.render('cms', {products: data});
  })
  .catch((err) => {
    next(err);
  });;
}

function handleResponse(res, code, statusMsg, data, meta) {
  res.status(code).json({ status: statusMsg, content: data , meta: {} });
}

module.exports = {
  index
}
