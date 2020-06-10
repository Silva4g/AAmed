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

const connectedUsers = {}; //id_user: id_socket
io.on("connection", (socket) => {
  console.log("[SOCKET: connected] => ", socket.id);
  //console.log("[SOCKET: connected mobile] => ", socket.handshake.query);
  const { hospital_id, user_id } = socket.handshake.query;
  if (hospital_id && !user_id) {
    connectedUsers[hospital_id] = socket.id;
  }
  if (user_id && !hospital_id) {
    connectedUsers[user_id] = socket.id;
  }
  socket.on("user_solicitation", (data) => {
    const { user, description } = data;
    if (connectedUsers[user._id] === undefined) {
      console.log("nao existe esse socket");
      connectedUsers[user._id] = socket.id;
    }
    data.hospital_ids.map((ids) => {
      const ownerSocket = connectedUsers[ids];
      if (ownerSocket) {
        socket.to(ownerSocket).emit("aviso", { user, description }); //aqui os hospitais perto vão receber esse chamado
      }
    });
  });

  socket.on("accept", (data) => {
    io.sockets.emit("filter", data);
  });

  socket.on("disconnect", (reason) =>
    console.log("[SOCKET: disconnected] => ", reason)
  );
});
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    exposedHeaders: "id, tk_acc",
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
