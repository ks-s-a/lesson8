var http = require('http'),
    faye = require('faye'),
    express = require('express'),
    app = express();

var server = http.Server(app),
    bayeux = new faye.NodeAdapter({mount: '/f'});

app.use('/', express.static(__dirname + '/static'));

bayeux.attach(server);

var PORT = 8000;
server.listen(PORT, function () {
  console.log('App was launched on '+ PORT +' port');
});
