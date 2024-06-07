import express from 'express';
import {createServer} from 'http'
import { WebSocketServer }  from 'ws'

const app = express();

const server = createServer(app)

const wsocket = new WebSocketServer({server})

wsocket.on('connection', (ws, req) => {
    console.log("Client connected", req.headers['upgrade'])

    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
    })


    ws.on('close', () => {
        console.log('Client disconnected');
    });

    ws.send("WebSocket server is listening on ws://localhost:3000")

})



server.listen(3000)