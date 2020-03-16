const { Router } = require('express');

const { HomeController, HospitalController, SearchHospital, SupportController, UserController } = require('./controllers');
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
//all hospitals
routes.get('/hospital', HospitalController.index);
//delete hospital
routes.delete('/hospital/:id', HospitalController.destroy);

//route 10km distance hospital from user
routes.get('/search', SearchHospital.index);

//route register users
routes.post('/user'/*, multer(multerConfig).single('avatar')*/, UserController.store);
//route auth user
routes.post('/login/user', UserController.login);
//route update user
routes.put('/user/:id', UserController.update);
//all users
routes.get('/user', UserController.index);

//route register a support
routes.post('/support', SupportController.store);

//route hospital logged and user logged
routes.get('/hospital/home', authConfig.hospital, HomeController.home);
routes.get('/user/home', authConfig.user, HomeController.home);

module.exports = routes;