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
    var x = 50
    var y = 20
        
        
            for (var i = 0; i < 4; i++) {
                for (var h = 0; h < 2; h++) {
                    reDraw(x + 150 * i , y + 250 * h, windowWidth, windowHeight);
                }
        }
}
function reDraw(x, y, windowWidth, windowHeight){
        fill("black");
            rect (x-5, y-5, windowWidth/2, 210);
    
        fill("top");
        rect (x, y, windowWidth/8, windowHeight/8);
        rect (x+25, y, windowWidth/8, windowHeight/8);
        rect (x+50, y, windowWidth/8, windowHeight/8);
    
        fill("topMid");
        rect (x+25, y+50, windowWidth/8, windowHeight/8);
        rect (x+50, y+50, windowWidth/8, windowHeight/8);
        rect (x, y+50, windowWidth/8, windowHeight/8);
    
        fill("bottoMid");
        rect (x, y+100, windowWidth/8, windowHeight/8);
        rect (x+25, y+100, windowWidth/8, windowHeight/8);
        rect (x+50, y+100, windowWidth/8, windowHeight/8);
    
        fill("bottom");
        rect (x, y+150, windowWidth/8, windowHeight/8);
        rect (x+25, y+150, windowWidth/8, windowHeight/8);
        rect (x+50, y+150, windowWidth/8, windowHeight/8);
    
}