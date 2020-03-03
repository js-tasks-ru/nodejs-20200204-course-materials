const {Server} = require('http');

const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();
const server = new Server(app.callback());
const io = require('socket.io')(server);

app.use(serve('./public'));

server.listen(3000, (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log('Server started');
});

io.on('connection', socket => {

  socket.on('start', (...a) => {
    console.log('start');
  });

  socket.on('message', ({from, message}) => {
    socket.broadcast.emit('message', {from, message})
  });


});


// client-id:client-port - server-ip:server-port;
// 2**16 = 65535; 1 - 1024;
//
// http -> 80
// https -> 443
// telnet -> 21
// ssh -> 22
