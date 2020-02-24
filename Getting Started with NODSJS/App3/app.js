// Required Modules
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

// Mimetypes
var mimetypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css"
};


// Create Server

http.createServer(function(req, res) {
    var uri = url.parse(req.url).pathname;
    var fileName = path.join(process.cwd(), unescape(uri));
    console.log("laoding..."+uri);
    var stats;
    try {
        stats = fs.lstatSync(fileName);
    } catch (error) {
        res.writeHead(404, {'Content-Type':'text/plain'});
        res.write("404 Not Found");
        res.end();
        return;
    }

    // Check if File/Directory
    if(stats.isFile()){
        var mimetype = mimetypes[path.extname(fileName).split(".").reverse()[0]];
        res.writeHead(200, {'Conetent-type': mimetype});

        var filestream = fs.createReadStream(fileName);
        filestream.pipe(res);
    }else if(stats.isDirectory()){
        res.writeHead(302, {'Location': 'index.html'});
    }else{
        res.writeHead(500, {'Content-Type' :'text/plain'});
        res.write("500. Internal Error");
        res.end();
    }
}).listen(8080);