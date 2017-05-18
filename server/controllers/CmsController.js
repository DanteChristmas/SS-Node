const Product = require('../models/v1/Product');
const Customer = require('../models/v1/Customer');
const apiUtils = require('../utils/apiUtils');

function index(req, res, next) {
  var products = new Promise((resolve, reject) => {
    Product.query({}).then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });

  var productMeta = new Promise((resolve, reject) => {
    Product.count({}).then((data) => {
      data = apiUtils.buildMeta(data[0], req.query);
      resolve(data)
    })
    .catch((err) => {
      reject(err);
    })
  });

  var customers = new Promise((resolve, reject) => {
    Customer.query({}).then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });

  Promise.all([products, productMeta, customers]).then((vals) => {
    res.render('cms', {
      initialState: {
        productList: {
          products: vals[0],
          meta: vals[1]
        },
        customerList: {
          customers: vals[2]
        }
      }
    });
  }).catch((err) => {
    next(err);
  });;
}

function handleResponse(res, code, statusMsg, data, meta) {
  res.status(code).json({ status: statusMsg, content: data , meta: {} });
}

module.exports = {
  index
}
