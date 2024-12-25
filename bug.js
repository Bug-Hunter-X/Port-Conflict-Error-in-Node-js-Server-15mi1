const http = require('http');

const server = http.createServer((req, res) => {
  // Logic to handle requests
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

//The bug is in the server.listen() method.  The port number 3000 is hardcoded and if another application is using it you'll get an error.  There is no error handling to check if the port is already in use.