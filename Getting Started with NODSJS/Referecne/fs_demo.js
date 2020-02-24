const fs = require('fs');
const path = require('path');

// Create Folder
/* fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err; 
    console.log("Folder Created...");
}); */

// Create Files
/* fs.writeFile(path.join(__dirname, '/test', 'Hello.txt'), 'I Love NodeJS', err => {
    if (err) throw err;
    console.log("File Written...");
}); */

//Append File
/* fs.appendFile(path.join(__dirname, '/test', 'Hello.txt'), 'I Love NodeJS', err => {
    if (err) throw err;
    console.log("Text Appended...");
}); */

// Read File
/* fs.readFile(path.join(__dirname, '/test', 'Hello.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
}); */

// Rename File
fs.rename(path.join(__dirname, '/test', 'Hello.txt'), path.join(__dirname, '/test',
'HelloWorld.txt'), (err) => {
    if(err) throw err;
    console.log("File Renamed...");
});