require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
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
  console.log("[SOCKET: connected] => ", socket.id);
  //console.log("[SOCKET: connected mobile] => ", socket.handshake.query);
  const { hospital_id } = socket.handshake.query;
  connectedUsers[hospital_id] = socket.id;

  //console.log('connectedUsersVar => ', connectedUsers);
  // socket.on("user_solicitation", (data) => console.log(data.hospital_ids));

  socket.on("user_solicitation", (data) => {
    console.log(data);
    const { user, description } = data;
    data.hospital_ids.map((ids) => {
      const ownerSocket = connectedUsers[ids];
      // console.log('[OWNERSOCKET] => ', ownerSocket);
      if (ownerSocket) {
        socket.to(ownerSocket).emit("aviso", { user, description }); //aqui os hospitais perto vão receber esse chamado
      }
    });
  });

  socket.on("disconnect", (reason) =>
    console.log("[SOCKET: disconnected] => ", reason)
  );
});

app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    exposedHeaders: "id",
    origin: "http://localhost:3000",
  })
);
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
