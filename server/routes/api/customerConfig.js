const config = {
  version: 'v1',
  route: 'customers',
  controller: 'CustomerController'
}

var routes = require('./ApiRoutes')(config)

module.exports =  routes;
