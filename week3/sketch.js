function setup(){
    createCanvas(750, 450);
    background("lightpink");
    
    //ts means textsize
    var ts = 80;
    var lineNumber = 1;
    var textColor = ("Black");
    
    textSize(ts);
    textFont("courier");
    
    //rect(320, 240, 70, 12);
        
    var y = 100;
    var x = 100;
    
    fill(textColor);
    textSize(110);
    textAlign(CENTER);
    text("JäY", 375, 200);
    
    //First 2 lines
    line(250, 155, 480, 155);
    line(250, 175, 480, 175);
    
    translate(750, 450);
    rotate(PI);
    
    textSize(110);
    textAlign(CENTER);
    text("JäY", 440, 235);
    
    //Last 2 lines
    line(310, 215, 550, 215);
    line(310, 195, 550, 195);
    

}