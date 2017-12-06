$(document).ready(function () {
	let lCounter = 0;
	let aCounter = 0; 

$("html").on("keydown",function(e) {
	let keyVal = e.which; 
	
	if (keyVal === 76){
		lCounter ++;
	};
	if (keyVal === 65){
		aCounter++; 
	};

	switch(aCounter){
	case 1:
		$('#one').css("background-color",'#551A8B');
		break;
	case 2:
		$('#two').css("background-color",'#551A8B');
		break;
	case 3:
		$('#three').css("background-color",'#551A8B');
		break;
	case 4:
		$('#four').css("background-color",'#551A8B');
		break;
	case 5:
		$('#five').css("background-color",'#551A8B');
		break;
	case 6:
		$('#six').css("background-color",'#551A8B');
		break;
	case 7:
		$('#seven').css("background-color",'#551A8B');
		break;
	case 8:
		$('#eight').css("background-color",'#551A8B');
		break;
	case 9:
		$('#nine').css("background-color",'#551A8B');
		break;
	case 10:
		$('#ten').css("background-color",'#551A8B');
		break;
	case 11:
		$('#eleven').css("background-color",'#551A8B');
		break;
	case 12:
		$('#twelve').css("background-color",'#551A8B');
		$('.winner-box').text("~*~*Player 1 Wins*~*~");
		lCounter = 100; 
		break;
	};

	switch(lCounter){
	case 1:
		$('#thirteen').css("background-color",'#5e0231');
		break;
	case 2:
		$('#fourteen').css("background-color",'#5e0231');
		break;
	case 3:
		$('#fifteen').css("background-color",'#5e0231');
		break;
	case 4:
		$('#sixteen').css("background-color",'#5e0231');
		break;
	case 5:
		$('#seventeen').css("background-color",'#5e0231');
		break;
	case 6:
		$('#eighteen').css("background-color",'#5e0231');
		break;
	case 7:
		$('#nineteen').css("background-color",'#5e0231');
		break;
	case 8:
		$('#twenty').css("background-color",'#5e0231');
		break;
	case 9:
		$('#twentyone').css("background-color",'#5e0231');
		break;
	case 10:	
		$('#twentytwo').css("background-color",'#5e0231');
		break;
	case 11:
		$('#twentythree').css("background-color",'#5e0231');
		break;
	case 12:
		$('#twentyfour').css("background-color",'#5e0231');
		$('.winner-box').text("~*~*Player 2 Wins*~*~");
		aCounter = 100; 
		break;
	};
});

});




/* l = 76 & a = 65 */

