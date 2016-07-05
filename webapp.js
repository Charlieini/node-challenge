var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io-client');

server.listen(3000);

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'));

var webroute = require('./routes/webroutes');

app.use('/', webroute);
