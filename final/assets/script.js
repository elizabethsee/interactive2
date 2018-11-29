$(document).ready(function(){


  var image =  document.getElementById("curveshape1");


  $('#curveshape1').on('click', function() {

    var n = Math.floor((Math.random() * 4) + 1);
    $("#curveshape1").attr('src', "assets/img/curve/curve"+n+".png");


    // if (document.getElementById("curveshape1").src == "assets/img/curve/curve2.png") {
    //   document.getElementById("curveshape1").src = "assets/img/curve/curve.png";
    //   console.log('hello');
    // } else {
    //   document.getElementById("curveshape1").src = "assets/img/curve/curve2.png";
    //   console.log('hi');
    // }
  });


  // function changeImage() {
  //
  //         if (document.getElementById("curveshape1").src == "assets/img/curve/curve.png")
  //         {
  //             document.getElementById("curveshape1").src = "assets/img/curve/curve2.png";
  //         }
  //         else
  //         {
  //             document.getElementById("curveshape1").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
  //         }
  //     }
});
