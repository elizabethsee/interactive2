$(document).ready(function(){

  var ctx = canvas.getContext("2d"),
      img = new Image,
      radius = 40;

  img.onload = setup;
  img.src = "assets/img/Artboard 5-8.png";

  function setup() {

    // set image as pattern for fillStyle
    ctx.fillStyle = ctx.createPattern(this, "no-repeat");

    // for demo only, reveals image while mousing over canvas
    canvas.mousedown = function(e) {
      var r = this.getBoundingClientRect(),
          x = e.clientX - r.left,
          y = e.clientY - r.top;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arc(x, y, radius, 0, 2*Math.PI);
      ctx.fill();
    };
  }

  $('#contractmenu').click(function() {
		$(this).toggleClass('expandmenu');
    $('menu').toggleClass('menu2');
	});

});
