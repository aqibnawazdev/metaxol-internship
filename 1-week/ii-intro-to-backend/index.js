const http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {"Content-type": "text/plain"})

    res.end("Hello, world server created...")
}).listen(8081)