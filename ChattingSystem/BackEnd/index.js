import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import moment from 'moment'

moment().format();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery : {
    maxDisconnectionDuration: 2 * 60 * 1000,
  },
  cors: {
    origin: "http://localhost:5173", // Adjust this to the origin of your client
    // methods: ["GET", "POST"],
    // allowedHeaders: ["my-custom-header"],
    // credentials: true
  }
});

let connectedUsers = {};


// Serve a basic HTTP response
app.all('/', (req, res) => {
  // console.log("HTTP", req.headers)
  res.status(200).json({"data": "success"})
});

io.on('connection', (socket) => {
  console.log(`Client Connected`);
  console.log(socket.handshake.headers);

  socket.on('join-room', (data) => {
    socket.join(data.room);
    console.log(data)
    connectedUsers[socket.id] = { username: data.name, room: data.room };
  })

  socket.on('message', (message) => {
    console.log(`Message from ${socket.id}: ${message}`);
    let user = connectedUsers[socket.id]
    io.to(user.room).emit('message', ` ${user.username}: Message: ${message}`); // Broadcast to room1
    console.log(connectedUsers)
  });

  socket.on('disconnect', () => {
    console.log(`Client Disconnected`);
    delete connectedUsers[socket.id];
  });

});


server.listen(3000);
