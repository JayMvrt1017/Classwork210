// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(220);
    
    var ww = width/6; // window width
    var wh = height/2; // window height
    
    for (var x = ww/1.2; x < width; x+=ww) {
       for (var y = wh/1.2; y < height; y+=wh) {
           
           fill(50, 50, 50);
           rect(x, y, ww/4, wh/2);
           fill(0, 20, 50);
           rect(x, y, ww/4, wh/4);
           
           
           
        }
    }
        
}