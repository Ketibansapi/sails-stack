var http = require('http');

http.createServer(function (request, response) {                        // This process called Callback request and response
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World');
}).listen(8124)

console.log('Server running on')
