// windows
function setup() { 
   createCanvas(640, 680);
}

function draw() {
    background("lightyellow");
    
    var windowWidth = width/4; // window width
    var windowHeight = height/2; // window height
		var top = color(76, 60, 112); //Top-Rect-Color
		var topMid = color (39, 83, 93); //topMid-Rect-Color
		var bottoMid = color(100, 55, 33); //bottoMid-Rect-color
		var bottom = color(47, 76, 11); //bottom-Rect-Color
	
			for (var x = windowWidth/6; x < width; x+=windowWidth) {
				for (var y = windowHeight/8; y < height; y+=windowHeight) {
				
				
			fill("black");
			rect (x-5, y-5, windowWidth/2, 210);
	
		fill(top);
		rect (x, y, windowWidth/8, windowHeight/8);
		rect (x+25, y, windowWidth/8, windowHeight/8);
		rect (x+50, y, windowWidth/8, windowHeight/8);
	
		fill(topMid);
		rect(x+25, y+50, windowWidth/8, windowHeight/8);
		rect(x+50, y+50, windowWidth/8, windowHeight/8);
		rect(x, y+50, windowWidth/8, windowHeight/8);
	
		fill(bottoMid);
		rect(x, y+100, windowWidth/8, windowHeight/8);
		rect(x+25, y+100, windowWidth/8, windowHeight/8);
		rect(x+50, y+100, windowWidth/8, windowHeight/8);
	
		fill(bottom);
		rect(x, y+150, windowWidth/8, windowHeight/8);
		rect(x+25, y+150, windowWidth/8, windowHeight/8);
		rect(x+50, y+150, windowWidth/8, windowHeight/8);

				}
	
	 	}

}