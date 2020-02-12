const { Router } = require('express');

const HospitalController = require('./controllers/HospitalController');
const UserController = require('./controllers/UserController');
const SearchHospital = require('./controllers/SearchHospital');

const routes = Router();

//route get all hospitals
routes.get('/hospital', HospitalController.index); // Listar/Pesquisar
//route register hospitals
routes.post('/hospital', HospitalController.store); // Cadastrar
//route delete hospital
routes.delete('/hospital/:id', HospitalController.destroy); // Delete
//route update hospital
routes.put('/hospital/:id', HospitalController.update); //Atualizar/Editar
// route auth hospital
routes.post('/loginHospital', HospitalController.login);

//route 10km distance hospital from user
routes.get('/search', SearchHospital.index);

//route register users
routes.post('/user', UserController.store);
//route auth user
routes.post('/loginUser', UserController.login);
//route get all users
routes.get('/user', UserController.index);
//route delete user
routes.delete('/user/:id', UserController.destroy);
//route update user
routes.put('/user/:id', UserController.update);

routes.get('/', (req, res) => {
    res.send('ola')
});

module.exports = routes;