const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write Response
    res.write("<html><body><h1>This is mine!</h1></body><html>");
    res.end();
}).listen(5000, () => console.log("Server Is Running..."));