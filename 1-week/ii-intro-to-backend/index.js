const http = require('http');
const express = require('express');

/*============================
 Http server
=============================*/

http.createServer(function(req, res){

    res.writeHead(200, {"Content-type": "text/plain"})
    res.end("Hello, world from http server...")

})
// .listen(8081, console.log('http server is running..'))



/*============================
 Express server
=============================*/
const app = express();
const port = 8081;

app.get("/", (req, res)=> {
    res.status(200).send("Hello, world from express server...")
})

// app.listen(port, ()=> console.log("Express server is running..."))
