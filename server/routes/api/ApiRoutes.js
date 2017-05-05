var express = require('express');
var router = express.Router();
const path = require('path');

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
      controller.query(req, res);
    });

    router.get(`/${routeVersion}${config.route}/:id`, (req, res, next) => {
      controller.find(req, res);
    });

    router.post(`/${routeVersion}${config.route}`, (req, res, next) => {
      controller.create(req, res);
    });

    router.put(`/${routeVersion}${config.route}/:id`, (req, res, next) => {
      controller.update(req, res);
    });

    router.delete(`/${routeVersion}${config.route}/:id`, (req, res, next) => {
      controller.del(req, res);
    });

    return router;
}

module.exports = ApiRoutes;
