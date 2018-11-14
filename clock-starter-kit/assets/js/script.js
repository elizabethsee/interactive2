$(document).ready(function(){

    // add a zero to times below 10
    function addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // set up time getting function
    function getTime(){
        // get the date
    	var d = new Date();

        // get hours, minutes, and seconds
        var h = addZero(d.getHours());
        var m = addZero(d.getMinutes());
        var s = addZero(d.getSeconds());

        // update the clock's text
        $('#clock').html(h + ":" + m + ":" + s);

        // rotate clock based on the minute
        $('#sec').css('transform', 'rotate('+ s * 6 +'deg');

        $('#min').css('transform', 'rotate('+ m * 6 +'deg');

        $('#hrs').css('transform', 'rotate('+ h * 30 +'deg');

        $('#sec1').css('transform', 'rotate('+ s * 6 +'deg');

        $('#min1').css('transform', 'rotate('+ m * 6 +'deg');

        $('#hrs1').css('transform', 'rotate('+ h * 30 +'deg');
        // detect a specific time
        if(7 > h || h > 19){
        	$('body').addClass('sunset');
          $('#sec').attr('id','sec1');
          $('#min').attr('id','min1');
          $('#hrs').attr('id','hrs1');
        } else {
        	$('body').removeClass('sunset');
          $('#sec1').attr('id','sec');
          $('#min1').attr('id','min');
          $('#hrs1').attr('id','hrs');
        }
    }

    // call getTime every 1 second
    setInterval(function() {
      getTime();
    }, 1000);


});
