// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(54, 72, 86);
    
    //*Outter Octagon Line*//
    point(260, 124);
    point(360, 124);
		line(260,124, 360, 124);
    point(420, 200);
    point(420, 300);
		line(420, 200, 420, 300);
    point(365, 376);
    point(260, 376);
        line(365, 376, 260, 376);
    point(198, 298);
    point(198, 200);
		line(198, 298, 198, 200);
		
		//*Inner Octagon Line*//
    point(277, 152);
    point(351, 152);
		line(277, 152, 351, 152);
    point(399, 209);
    point(399, 284);
		line(399, 209, 399, 284);
    point(352, 341);
    point(276, 341);
		line(352, 341, 276, 341);
    point(228, 209);
    point(228, 284);
		line(228, 209, 228, 284);
		
		//Diagonal Lines Of Outter Octagon
		line(360, 124, 420, 200);
		line(420, 300, 365, 376);
		line(260, 376, 198, 298);	
		line(198, 200, 260, 124);
	
		//Diagonal Lines Of Inner Octagon
		line(351, 152, 399, 209);
		line(399, 284, 352, 341);
		line(276, 341, 228, 284);
		line(228, 209, 277, 152);
		
		//Top Shapes
		triangle(244, 209, 280, 209, 280, 167);
		rect(288, 160, 45, 50);
		triangle(345, 209, 380, 209, 345, 167);
	
		//Middle Shapes
		rect(244, 215, 35, 65);
		rect(288, 215, 45, 65);
		rect(345, 215, 35, 65);
	
		//Lower Shapes
		triangle(244, 288, 280, 329, 280, 288);
		rect(288, 285, 45, 50);
		triangle(344, 288, 344, 328, 380, 288);
	
		
		stroke(255);
	

}