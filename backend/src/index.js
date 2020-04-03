require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const path = require("path");
const socketio = require("socket.io");
const http = require("http");

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
io.on("connection", (socket) => {
  console.log("socket conectado " + socket.id);
  const { hospital_id } = socket.handshake.query;
  connectedUsers[hospital_id] = socket.id;

  //vai funcionar no mobile quando o user clicar em uma opção, o código de exemplo está na
  //pasta 'mobile/example'
  socket.on("hospitals_id", (data) => {
    data.ids.allIds.map((ids) => {
      const ownerSocket = connectedUsers[ids];
      if (ownerSocket) {
        socket //aqui os hospitais perto vão receber esse chamado
          .to(ownerSocket)
          .emit("aviso", { user: data.email, user_id: data.user_id });
      }
    });
  });
});

app.use(cors());
//uso do json para envio e recebimento de dados
app.use(express.json());
//url de fotos
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);
app.use(routes);
//log de requisições http
app.use(morgan("dev"));
server.listen(3333);
