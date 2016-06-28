var socket = io();

socket.on('colors', function(){
  console.log('color');
  sortShapes('color');
});

socket.on('shapes', function(){
  console.log('shape');
  sortShapes("name");
});


function sortShapes(by){

  var myArray = $("img");

  console.log(myArray);

  myArray.sort(function (a, b) {

      a = $(a).attr(by);
      b = $(b).attr(by);

      if(a > b) {
          return 1;
      } else if(a < b) {
          return -1;
      } else {
          return 0;
      }
  });

  $("#original").append(myArray);
}

$(function() {

  $("img").mouseover(function(){
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/shapes/" + $(this).attr("mongo_id"),
      success: displayShapeInfo,
      error: function(){
        console.log("Error!")
      },
      dataType:"json"
    });
  });

  function displayShapeInfo(shape){
    $('#shape_info').text("type: " + shape.name + " color: " + shape.color + " times seen: " + shape.times_seen);
    addTimesSeen(shape._id);
  }

  function addTimesSeen(id){
    $.ajax({
      type: "PUT",
      url: "http://localhost:3000/shapes/" + id,
    });
  }

});
