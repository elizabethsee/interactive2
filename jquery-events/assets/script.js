$(document).ready(function(){

	var scrollPos;
	var xPos;
	var yPos;
	var winWidth;
	var winHeight;


	// check when the mouse moves
	$(document).mousemove(function(e){

		// update mouse x and y position
		xPos = e.pageX;
		yPos = e.pageY;
		$('#mouse-pos').html('x-pos: ' + xPos + '<br />y-pos: ' + yPos);

		// change div with the id "element"s CSS when you move your mouse
		$('body').css({
			'background-color' : 'rgb('+ yPos/9 + ', ' + xPos/2 + ', ' + (xPos*yPos)*8 + ')',
		});
	});


	// // check when the user clicks
	// $(document).click(function(e){
	//
	// 	// store the click position
	// 	xPos = e.pageX;
	// 	yPos = e.pageY;
	//
	// 	// add text to the page where the user clicks
	// 	$('.container').append('<div style="top: ' + yPos +'px; left:' + xPos + 'px; position: absolute">' + xPos + ', ' + yPos + '</div>')
	//
	// });

	$('.button').click(function(){
		$('body').removeClass();
			$('body').addClass('bwcolour');
	});

	// // check when the window is resized
	// $(window).resize(function() {
	//
	// 	// update the webpage with the window dimensions
	// 	winWidth = $(window).width();
	// 	winHeight = $(window).height();
	// 	$('#window-size').html('window width: ' + winWidth + '<br />window height: ' + winHeight);
	// });


});
