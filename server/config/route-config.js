(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const viewRoutes = require('../routes/views');
    // const authRoutes = require('../routes/auth');
    // const userRoutes = require('../routes/user');
    // const adminRoutes = require('../routes/admin');

    // *** register routes *** //
    app.use('/', viewRoutes);
    // app.use('/auth', authRoutes);
    // app.use('/', userRoutes);
    // app.use('/', adminRoutes);
  };

})(module.exports);
