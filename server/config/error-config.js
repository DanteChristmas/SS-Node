'use strict';
const path = require('path');

(function (errorConfig) {
  errorConfig.init = function (app) {

    app.use(function(req, res, next) {
      const err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    if (process.env.NODE_ENV == 'development') {
      app.use(function(err, req, res, next) {
        res.status(err.status || 500).send({
          message: err.message,
          error: err
        });
      });
    }

    app.use(function(err, req, res, next) {
      switch(err.status) {
        case 404:
          res.status(404).sendFile(path.join(__dirname, '..', 'public', '404.html'));
        case 401:
          res.status(401).sendFile(path.join(__dirname, '..', 'public', '401.html'));
        default:
          res.status(err.status || 500).sendFile(path.join(__dirname, '..', 'public', '500.html'));
      }
    });

  };

})(module.exports);
