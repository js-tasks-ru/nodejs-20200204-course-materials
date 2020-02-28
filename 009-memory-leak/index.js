const {Server} = require('http');

const server = new Server();

const buffer = [];

server.on('request', (req, res) => {
  buffer.push(Buffer.alloc(1e6))
});

server.listen(3000);
