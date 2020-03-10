require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');

const app = express();
//conexão com o banco de dados mongo local
mongoose.connect("mongodb://localhost:27017/tcc", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});


app.use(cors());
//uso do json para envio e recebimento de dados
app.use(express.json());
//url de fotos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);
//log de requisições http
app.use(morgan('dev'));
app.listen(3333);