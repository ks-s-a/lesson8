// Пример использования Web Sockets
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// Раздаем статику
app.use('/', express.static(__dirname + '/static'));

// Обработка сообщений Websockets
io.on('connection', function (socket) {
  // Посмотрим объект
  console.log('connected: ', socket);

  // Событие закрытия соединения
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

  // Событие прихода соощения от клиента
  socket.on('message', function (message) {
    // Показываем сообщение
    console.log('message is: ', message);

    // Только текущего клиента
    socket.emit('message', message);

    // Всем, кроме текущего
    socket.broadcast.emit('message', message);
  });
});

server.listen(8000, function () {
  console.log('Our app was launched on the 8000 port.');
});
