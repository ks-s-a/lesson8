// Пример работы с модулем faye
var express = require('express');
var faye = require('faye');
var http = require('http');
    
var app = express();
var server = http.Server(app);
var bayeux = new faye.NodeAdapter({mount: '/f'});

// Раздаем статику
app.use('/', express.static(__dirname + '/static'));

// Регистрируем на сервере
bayeux.attach(server);

server.listen(8000, function () {
  console.log('App was launched on 8000 port');
});
