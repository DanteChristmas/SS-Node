var express = require('express');
var router = express.Router();
const path = require('path');

const apiHelper = require('../../middleware/apiHelper');

// var isSet = require('../utils/validate'); //TODO: Fix this because node 6 doesn't support "import"

function isSet(item){
  return typeof item !== 'undefined' &&
          item !== null &&
          item != '';
}

function ApiRoutes(config) {
    const controller = require(`../../controllers/api/${config.controller}`);

    const routeVersion = isSet(config.version) ? config.version + '/' : '';

    router.get(`/${routeVersion}${config.route}`, (req, res, next) => {
      controller.query(req, res, next);
    });

    router.get(`/${routeVersion}${config.route}/:id`, apiHelper.verifyId, (req, res, next) => {
      controller.find(req, res, next);
    });

    router.post(`/${routeVersion}${config.route}`, (req, res, next) => {
      controller.create(req, res, next);
    });

    router.put(`/${routeVersion}${config.route}/:id`, apiHelper.verifyId, (req, res, next) => {
      controller.update(req, res, next);
    });

    router.delete(`/${routeVersion}${config.route}/:id`, apiHelper.verifyId, (req, res, next) => {
      controller.del(req, res, next);
    });

    return router;
}

module.exports = ApiRoutes;
