// Final
var x = 100, y = 0;
var w, h, ellipseWidth, ellipseHeight, ellipseSize;
function setup() { 
    createCanvas(720, 480);

    var yPosition = [];
		w = width/2+80
    h = height 
    ellipseWidth = width/16
    ellipseHeight = height/2
    ellipseSize = 20
    GoalKeepHeight = 10
    GoalBoxHeight = 185
		MiddleEllipses = ellipseHeight/4
		
}

function draw() {
    
    background("green");
    //Main Rect In The Middle
    fill("none")
    rect (x, y, w, h)
    
    //Start && Tries Text // Rect
    fill("black")
		rect (0, 0, 720, 20)
		fill("white")
		textSize(25)
		text ("Tries:", 510, 20)
		text ("START", 255, 20)
		
    
    //Main ellipse
    fill("Black");
    ellipse (ellipseWidth, ellipseHeight, ellipseSize)
			
      if (keyIsDown(LEFT_ARROW))
			ellipseWidth-=4
			if (keyIsDown(RIGHT_ARROW))
			ellipseWidth+=4
			if (keyIsDown(UP_ARROW))
			ellipseHeight-=4
			if (keyIsDown(DOWN_ARROW))
			ellipseHeight+=4
	    
    //GoalBox
    fill("none")
    rect (x + 575, GoalBoxHeight, w, h - 350)
    
	   
    //GoalKeepBox 
    fill("Black");
    rect (x + 550, GoalKeepHeight + 205, w - 425, h - 410) 
        
				while (GoalKeepHeight < GoalBoxHeight/5) { 
            GoalKeepHeight++ 
				}

    // for Loop For Middle Ellipses That will Move 
    fill("blue")
		
			for (var i = 2; i < 10; i++) {
		ellipse (width/37 * 3 * i , MiddleEllipses , ellipseSize/2)  
		}
	 
	 MiddleEllipses = random (25, width)
	
}
 

