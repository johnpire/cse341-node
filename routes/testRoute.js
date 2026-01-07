const routes = require('express').Router();
const testController = require('../controllers/testController');

routes.get('/', testController.welcome);

module.exports = routes;