const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    /* if(req.url === '/'){
        fs.readFile(
            path.join(__dirname, 'public', 'home.html'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        );
    }
    if(req.url === '/about'){
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
            (err, content) => {
                if(err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content);
            }
        );
    }
    if(req.url === '/api/user'){

        const users = [
            { name: "Rahul Behera", age: 22 },
            { name : "Ketan Ishaan", age: 22}
        ];

        res.writeHead(200,{'Content-Type' : 'text/html'});
        res.end(JSON.stringify(users));

    } */

    // BBuild File Path
    let filePath = path.join(
        __dirname,
        'public',
        (req.url === '/') ? 'home.html' : req.url
    );

    // Extension of file
    let extension = path.extname(filePath);

    // Initial Content Type
    let contentType = 'text/html';

    // Check Ext and set content type
    switch (extension) {

        // Check ext and set content type
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;

    }

    // Read FIle
    fs.readFile(filePath, (err, content) => {
        if(err){
            if(err.code == 'ENDENT'){
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type' : 'text/html'});
                    res.end(content, 'utf8  ');
                });
            } else{
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            } 
        } else{
            // Success
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log("Server is running on..." + PORT));