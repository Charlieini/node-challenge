var socket = io();

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
