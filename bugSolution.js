const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  // Logic to handle requests
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
}

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  }
};

const serverInstance = server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  })

serverInstance.on('error', onError); 

startServer();