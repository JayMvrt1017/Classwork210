// Animation
function setup() { 
   createCanvas(640, 680);
}

x = 50
y = 10
var ellipseSize = 150
var ellipseEye = 20

function draw() {
    
    background("black");
    fill("yellow");
    ellipse (x + width/4, y + height/2.5, ellipseSize);
    
    fill("black");
    ellipse (x + width/4 + 20, y + height/3, ellipseEye);
    
    fill("black");
    triangle (x + 150, y + width/2.3, x + 200 + 85, y + height/2.2, x + 200 + 90, y + width/2.7 );
    
    x = x + 5
    
    if (x > width) {
        x = -100;
    } 
    
}