'use strict';
const path = require('path');

(function (apiConfig) {
  apiConfig.init = function (app) {
    app.use('/api/*/*/:id',function(req, res, next) {
      const uuidReg = /[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/;
      if(uuidReg.exec(req.params.id)) {
        next();
      } else {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
      }
    });
  };

})(module.exports);
