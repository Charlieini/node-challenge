var socket = io('http://localhost:8080');

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
