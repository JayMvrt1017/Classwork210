function setup(){
    createCanvas(800, 550);
    
    background('lightgray');
    //Head
    strokeWeight(4);
    ellipse(400, 100, 150);
    strokeWeight(2);
    ellipse(375, 90, 25);
    ellipse(420, 90, 25);
    
    //Body
    strokeWeight(4);
    rect (275, 150, 250, 250, 25);
    
    //Arms
    line(175, 270, 615, 270);
    //LeftFingers
    line(175, 270, 150, 220);
    line(175, 270, 130, 230);
    line(175, 270, 130, 260);
    line(175, 270, 135, 290);
    //RightFingers
    line(615, 270, 650, 250);
    line(615, 270, 660, 265);
    line(615, 270, 670, 290);
    line(615, 270, 650, 310);
    
    fill('black');
    triangle(275, 270, 525, 270, 395, 400);
    fill('white');
    triangle(276, 270, 400, 150, 525, 270);

    rect (315, 402, 55, 155);
    rect (430, 402, 55, 155);
    
}