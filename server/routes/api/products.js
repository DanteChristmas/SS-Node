const config = {
  version: 'V1',
  route: 'products',
  controller: 'ProductController'
}

var routes = require('./ApiRoutes')(config)

module.exports =  routes;
