import express from 'express';
import http from 'http'
import accepts from 'accepts'
// import cors from 'cors'
const app = express();
import fs from 'fs';
import path from 'path'

// // app.use(cors())

// function uersOnly(req, res, next){
//     res.setHeader('Origin', 'http://localhost:5174/');
//     // res.setHeader('Access-Control-Allow-Methods', 'GET');
//     // res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     // res.setHeader('Access-Control-Allow-Credentials', 'true')
//     next()
// }

// app.get('/', (req, res) => {
//     res.send("Hello")
// })
import net from 'net'

app.get('/video', (req, res) => {
    
    res.send('hello')
})

app.listen(3000)
