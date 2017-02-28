// system variable 
var x = 10;
var y = 50;
function setup() {
    createCanvas(640, 480);
    background ('skyblue');
}



function draw() {
    background ('skyblue');
    rect(x, y, 50, 50);
    

    if (x < width-100){
        x += 10;
    } else { y += 10;
    }
    
}