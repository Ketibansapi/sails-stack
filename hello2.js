var http = require ('http');
var fs = require ('fs');                                              // File System

http.createServer(function (req, res) {
  var name = require ('url').parse(req.url, true).query.name;

  if (name === undefined) name = 'world';

  if (name === 'hello') {
    var file = 'monkey.jpg';
    fs.stat(file, function (err, stat) {
      if (err) {
        console.error(err);
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end("Sorry, there's no monkey right now");
      } else {
        var img = fs.readFileSync(file);
        res.contentType = './';
        res.contentLength = stat.size;
        res.end(img, 'binary');
      }
    });
  } else {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello ' + name + '\n');
  }
}).listen(8124)
