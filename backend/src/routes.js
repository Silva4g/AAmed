const { Router } = require('express');

const MedController = require('./controllers/MedController');

const routes = Router();

routes.get('/hosp', MedController.index);
routes.get('/hosp', MedController.store);

module.exports = routes;