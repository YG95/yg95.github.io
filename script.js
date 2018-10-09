$(document).ready(function(){
    
    var effect = "slideInRight";
		switch(Math.floor(Math.random() * 18)){
			case 1:
				effect = "bounce";
				break;
			case 2:
				effect = "shake";
				break;
			case 3:
				effect = "pulse";
				break;
			case 4:
				effect = "rubberBand";
				break;
			case 5:
				effect = "bounce";
				break;
			case 6:
				effect = "swing";
				break;
			case 7:
				effect = "tada";
				break;
			case 8:
				effect = "wobble";
				break;
			case 9:
				effect = "jello";
				break;
			case 10:
				effect = "bounceIn";
				break;
			case 11:
				effect = "fadeIn";
				break;
			case 12:
				effect = "flip";
				break;
			case 13:
				effect = "lightSpeedIn";
				break;
			case 14:
				effect = "rotateIn";
				break;
			case 15:
				effect = "zoomIn";
				break;
			case 16:
				effect = "rollIn";
				break;	
			case 17:
				effect = "jackInTheBox";
				break;
		}
		
			document.getElementById("ani").classList.add(effect);
		
});