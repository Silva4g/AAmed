require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');


const app = express();
const server = http.Server(app);
//conexão com o banco de dados mongo local
mongoose.connect("mongodb://localhost:27017/tcc", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//conexão do websocket
const io = socketio(server);

//o certo seria colocar no banco, dps eu vejo isso
const connectedUsers = {}; //id_user: id_socket
let count = 0;
io.on('connection', socket => {
    count++;
    const { hospital } = socket.handshake.query //pegar o id do hospital logado
    console.log('hospital conectado ' + count + ' id: ' + socket.id + ' hospital: ' + hospital);
    connectedUsers[hospital] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
});


app.use(cors());
//uso do json para envio e recebimento de dados
app.use(express.json());
//url de fotos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);
//log de requisições http
app.use(morgan('dev'));
server.listen(3333);