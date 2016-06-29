var socket = io();

socket.on('connect', function() {
	console.log("Connected to server");
});

$(function(){

  $('#color').on('click', function(){
    socket.emit('colors');
  })

  $('#shape').on('click', function(){
    socket.emit('shapes');
  })
});
