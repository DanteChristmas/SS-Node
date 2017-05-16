const Product = require('../models/v1/Product');
const Customer = require('../models/v1/Customer');

function index(req, res, next) {
  var products = new Promise((resolve, reject) => {
    Product.query({}).then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });

  var customers = new Promise((resolve, reject) => {
    Customer.query({}).then((data) => {
      resolve(data);
    })
    .catch((err) => {
      reject(err);
    });
  });

  Promise.all([products, customers]).then((vals) => {
    res.render('cms', {
      initialState: {
        productList: {
          products: vals[0]
        },
        customerList: {
          customers: vals[1]
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
