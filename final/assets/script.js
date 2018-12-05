$(document).ready(function(){


  var image =  document.getElementById("curveshape1");


  $('#curveshape1').on('click', function() {

    var n = Math.floor((Math.random() * 4) + 1);
    $("#curveshape1").attr('src', "assets/img/curve/curve"+n+".png");



  });

  var image =  document.getElementById("untitledshape1");


  $('#untitledshape1').on('click', function() {

    var n = Math.floor((Math.random() * 4) + 1);
    $("#untitledshape1").attr('src', "assets/img/untitle/untitle"+n+".png");


  });

  var image =  document.getElementById("whiteshape1");


  $('#whiteshape1').on('click', function() {

    var n = Math.floor((Math.random() * 4) + 1);
    $("#whiteshape1").attr('src', "assets/img/white/white"+n+".png");



  });



});
