require.paths.unshift(__dirname + '/app_modules');
var id3v2 = require('id3v2'),
    fs = require('fs'),
    http = require('http');
    
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");
/*
console.log('Server running at http://127.0.0.1:1337/');

id3v2.parseFile('./music/Tip.mp3', function(tag) {
    console.log(tag);
})
*/