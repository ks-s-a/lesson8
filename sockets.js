var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var PORT = 8000;

app.use('/', express.static(__dirname + '/static'));

io.sockets.on('connection', function (socket) {
  console.dir(socket, {depth: null});

  socket.on('disconnect', function () {
    console.log('user disconnected');
  })

  socket.on('message', function (message) {
    console.log('message is: ', message);

    // Только текущего клиента
    socket.emit('message', message);

    // Всем, кроме текущего
    socket.broadcast.emit('message', message);
  });
});

server.listen(PORT, function () {
  console.log('Our app was launched on the '+ PORT + ' port.');
});
