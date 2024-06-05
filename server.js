const express = require("express");
const app = express();

app.use(express.static("public"));
const expressServer = app.listen(4000);
const { Server } = require("socket.io");
const socketio = require("socket.io");

const io = new Server(expressServer, {
  // serveClient:false,
  cors: ["http://localhost:4000"],
});

io.on("connect", (socket) => {
  // console.log(socket.handshake);
  // console.log(socket.id, "has ben joined server");
  // socket.emit("welcome", [1, 2, 3, 4, 5]);
  // io.emit("helloAllClient", `new:${socket.id}`);
  // socket.on("hi", (data) => {
  //   console.log("clinet response data", data);
  // });

  socket.on("messageFormClientServer",newMessage=>{
    io.emit("messageFormAllClientServer",newMessage)
  })
});
