var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var db;


MongoClient.connect('mongodb://charlie:12345678@ds023674.mlab.com:23674/shapes', function(err,database){
  if(err) return console.log(err);
  db = database;
});

router.route('/')
  .get(function (req, res) {
    db.collection('shapes').find().toArray(function(err, result){
      if (err) return console.log(err)
      res.render('web_index.ejs', {shapes: result})
    })});

router.route('/shapes/:id')
  .get(function(req,res){
  db.collection('shapes').find({"_id": ObjectId(req.params.id)}).toArray(function(err,result){
    res.send(JSON.stringify(result[0]));
  });
})

  .put(function(req,res){
  db.collection('shapes').findOneAndUpdate({"_id": ObjectId(req.params.id)}, {$inc: {times_seen: 1}});
  res.end();
});

module.exports = router;
