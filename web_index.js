var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

server.listen(8080);

io.on('connection', function(client){
  client.on('color', function(){
    console.log("color server");
    client.emit('calor');
  });
});

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render('index_web.ejs');
  });
