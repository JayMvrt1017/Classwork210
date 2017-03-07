// system variable 
var x = 10;
var y = 50;
function setup() {
    createCanvas(640, 480);
    background ('skyblue');
}

var position = 20;
var speed = 15;


function draw() {
    background ('skyblue');
    rect(x, y, 50, 50);
draw = function() {
    createCanvas(405, 405)}
    
}
    if (x < width-100){
        x += 10;
    } else { y += 10;
    rect(0, 0, 200, 400); // top left
    rect(200, 0, 200, 400); // top right
    rect(0, 200, 200, 200); // bottom left
    rect(200, 200, 200, 200); // bottom right
    
    position = position + speed;
    
    
    if (mouseX < 200) {
        fill("red");
        rect(0, 0, 200, 400);   
    }
     
    if (mouseX > 200) {
        fill("blue")
        rect(200, 0, 200, 400);
    }
    
    fill(255, 214, 253);
    ellipse(position, mouseY, 50, 50);
    if (mouseIsPressed) {
        ellipse(mouseX, position, 50, 50);
    }
    
    if (position > 375) {
        speed = -10;
    }   if (position < 25) {
        speed = 10;
    }
}