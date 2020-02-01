const { Router } = require('express');

const MedController = require('./controllers/MedController');
const UserController = require('./controllers/UserController');

const routes = Router();
//route get all hospitals
routes.get('/hosp', MedController.index);
//route register hospitals
routes.get('/hosp', MedController.store);

//route register users
routes.post('/user', UserController.store);
//route get all users
routes.get('/user', UserController.index);
//route delete user
routes.delete('/user/:id', UserController.destroy);
//route update user
routes.put('/user/:id', UserController.update);

module.exports = routes;