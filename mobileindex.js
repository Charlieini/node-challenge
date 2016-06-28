var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var db;

server.listen(3000);

app.set('view engine', 'ejs')

MongoClient.connect('mongodb://charlie:12345678@ds023674.mlab.com:23674/shapes', function(err,database){
  if(err) return console.log(err);
  db = database;
});

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  db.collection('shapes').find().toArray(function(err, result){
    if (err) return console.log(err)
    res.render('index.ejs', {shapes: result})
  })});

app.get('/shapes/:id', function(req,res){
  db.collection('shapes').find({"_id": ObjectId(req.params.id)}).toArray(function(err,result){
    res.send(JSON.stringify(result[0]));
  });
});

app.put('/shapes/:id', function(req,res){
  db.collection('shapes').findOneAndUpdate({"_id": ObjectId(req.params.id)}, {$inc: {times_seen: 1}});
  res.end();
});
