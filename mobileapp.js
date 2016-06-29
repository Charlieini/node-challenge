var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(8080);

var clients = []

io.on('connect', function(client) {
	console.log("connected")
	clients.push(client)
  client.on('colors', function() {
    console.log("Emitting Color sorting");
    io.sockets.emit('colors_sorting');
  });
  client.on('shapes', function(){
    console.log("Emitting Shape sorting");
    io.sockets.emit('shape_sorting');
  });
});

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('mobile_index.ejs');
});
