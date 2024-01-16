
//HTTP server

// const http = require('http');

// http.createServer(function(req, res){

//     res.writeHead(200, {"Content-type": "text/plain"})
//     res.end("Hello, world from http server...")

// }).listen(8081, console.log('http server is running..'))


//Express server

const express = require('express');
const app = express();
const port = 8081;

app.get("/", (req, res)=> {
    res.status(200).send("Hello, world from express server...")
})

app.listen(port, ()=> console.log("Express server is running..."))
