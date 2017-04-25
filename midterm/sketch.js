// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(255); 
    
   noStroke();
    
    var numberOfRectangles = 300;
		var rows = 20;
    var columns = numberOfRectangles / rows;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempW = w;
            
            
            // rain
            if (x + y+50 < height/3) {
                // random rain blue color
                r = random(200, 255);         
                g = random(235, 255);
                b = random(0); 
								ellipse (0, 0, 400);

            } else if (y > height * 3/4) {
							
                // water ellipses color
                r = random(100, 100);
                g = random(100, 120);
                b = random(120, 255);
							
                // water ellipses size
                w = h = random(15, 25);
            } else {
							
                // random green grass color
                r = random(245, 255);
                g = random(155, 255);
                b = random(0, 255);
            }
            
            // all of the color fills
            fill(r, g, b);            
            
            // Mini Blue River
            if (y > height * 3/4) {
							
            // Bottom Blue Water
                rect(x, y, w+20, h);
   
            } else {
							
            // rain & grass
                rect(x, y+200, w/2, h);
            }
					
            w = tempW;
					
						ellipse(300, 100, 50);
						ellipse(320, 100, 50);
						ellipse(340, 100, 50);
						ellipse(360, 100, 50);
						ellipse(380, 100, 50);
					
						ellipse(460, 100, 50);
						ellipse(480, 100, 50);
						ellipse(500, 100, 50);
						ellipse(520, 100, 50);
						ellipse(540, 100, 50);
					
  
        }
    }
}