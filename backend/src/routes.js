const { Router } = require('express');

const HospitalController = require('./controllers/HospitalController');
const UserController = require('./controllers/UserController');
const SearchHospital = require('./controllers/SearchHospital');
const SupportController = require('./controllers/SupportController');
const HomeController = require('./controllers/HomeController');
const authConfig = require('./middleware/auth');
const multer = require('multer'); //envio de arquivos
const multerConfig = require('./config/multer');

const routes = Router();

//route register hospitals
routes.post('/hospital', HospitalController.store);
//route update hospital
routes.put('/hospital/:id', HospitalController.update);
// route auth hospital
routes.post('/login/hospital', HospitalController.login);
routes.get('/hospital', HospitalController.index);

//route 10km distance hospital from user
routes.get('/search', SearchHospital.index);

//route register users
routes.post('/user', multer(multerConfig).single('avatar'), UserController.store);
//route auth user
routes.post('/login/user', UserController.login);
//route update user
routes.put('/user/:id', UserController.update);

//route register a support
routes.post('/support', SupportController.store);

//route hospital logged
routes.get('/home', authConfig, HomeController.home);

module.exports = routes;