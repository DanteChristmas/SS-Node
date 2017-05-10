(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const viewRoutes = require('../routes/views');
    const productRoutes = require('../routes/api/productConfig');
    const customerRoutes = require('../routes/api/customerConfig');
    // const authRoutes = require('../routes/auth');
    // const userRoutes = require('../routes/user');
    // const adminRoutes = require('../routes/admin');

    // *** register routes *** //
    app.use('/', viewRoutes);
    app.use('/api', productRoutes);
    app.use('/api', customerRoutes);
  };

})(module.exports);
