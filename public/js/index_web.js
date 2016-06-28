var socket = io();
console.log(socket);

socket.on('connect', function() {
	console.log("Connected to server");
});

$(function(){

  $('#color').on('click', function(){
    console.log("color");
    socket.emit('colors');
  })

  $('#shape').on('click', function(){
    console.log("shapes");
    socket.emit('shapes');
  })
});
