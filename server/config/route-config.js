(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const viewRoutes = require('../routes/views');
    const productRoutes = require('../routes/api/products');
    // const authRoutes = require('../routes/auth');
    // const userRoutes = require('../routes/user');
    // const adminRoutes = require('../routes/admin');

    // *** register routes *** //
    app.use('/', viewRoutes);
    app.use('/api', productRoutes);
  };

})(module.exports);
