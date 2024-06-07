import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io";
import {availableParallelism} from 'os'

import cors from 'cors';

// Create an Express application
const app = express();
// app.use(cors())

const server = createServer(app);
const io = new Server(server, {
  connectionStateRecovery : {},
  cors: {
    origin: "http://localhost:5173", // Adjust this to the origin of your client
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

// Serve a basic HTTP response
app.get('/', (req, res) => {
  res.status(200).json({"data": "success"})
});

io.on('connection', (socket) => {
  console.log(`Client Connected`);


  socket.on('message', (message, clientOffset) => {

    console.log(`Client Sent the message: ${message}: id => ${clientOffset}`)

    io.emit('message', `${clientOffset} : ${message}`)

  })

  socket.on('disconnect', () => {
    console.log(`Client Disconnected`);
  });

});

server.listen(3000);
