$(document).ready(function() {
  initialize();
});

function getPosition(mouseEvent, sigCanvas) {
    var rect = sigCanvas.getBoundingClientRect();
    return {
      X: mouseEvent.clientX - rect.left,
      Y: mouseEvent.clientY - rect.top
    };
}


function initialize() {


  var sigCanvas = document.getElementById("canvas");
  var context = sigCanvas.getContext("2d");

  context.canvas.width  = window.innerWidth;
  context.canvas.height = window.innerHeight;

  context.strokeStyle = "#000000";
  context.lineJoin = "round";
  context.lineWidth = .4;


  var background = new Image();


  background.onload = function() {
    context.drawImage(background, 0, 0);
  }





  $("#canvas").mouseenter(function(mouseEvent) {
    var position = getPosition(mouseEvent, sigCanvas);
    context.moveTo(position.X, position.Y);
    context.beginPath();


    $(this).mousemove(function(mouseEvent) {
      drawLine(mouseEvent, sigCanvas, context);
    }).mouseup(function(mouseEvent) {
      finishDrawing(mouseEvent, sigCanvas, context);
    }).mouseout(function(mouseEvent) {
      finishDrawing(mouseEvent, sigCanvas, context);
    });
  });

}

$(document).click(function(e){


        xPos = e.pageX;
        yPos = e.pageY;


        $('.blank').append('<div class="clickaddition"; style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute"></div>')

    });



function drawLine(mouseEvent, sigCanvas, context) {

  var position = getPosition(mouseEvent, sigCanvas);

  context.lineTo(position.X, position.Y);
  context.stroke();
}




function finishDrawing(mouseEvent, sigCanvas, context) {

  drawLine(mouseEvent, sigCanvas, context);


}


function clearCanvas(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}



  var clickTimer;

  var n = 0;

  $('body').mouseup(function(){
    clearTimeout(clickTimer);

    return false;

  }).mousedown(function(){


    clickTimer = window.setInterval(function() {


      n++;


      $('#stoppedcircle').css('transform', 'scale('+n/10+')');

    },4);
    return false;
  });
