function setup(){
    createCanvas(750, 450);
    background("lightpink");
    
    //ts means textsize
    var ts = 110;
    var lineNumber = 1;
    var textColor = ("Black");
    var name = "JäY";
    var a = 100;
    var font = ("courier");
    var str = 1000;
    var tfz = 250;
    var tsf = 375;
    var tzz = 200;
    var off = 155;
    var osf = 175;
    var fez = 480;
    var sfz = 750;
    var ffz = 450;
    var doublefz = 440;
    var ttf = 235;
    var toz = 310;
    var tof = 215;
    var ffo = 550;
    var onf = 195;
    var fivefz = 550;
    
    
    textSize(ts);
    textFont(font);
        
    fill(textColor);
    textSize(ts);
    textAlign(CENTER);
    text(name, tsf, tzz);
    
    //First 2 lines
    stroke(str);
    line(tfz, off, fez, off);
    line(tfz, osf, fez, osf);
    
    translate(sfz, ffz);
    rotate(PI);
    
    textSize(ts);
    textAlign(CENTER);
    text(name, doublefz, ttf);
    
    //Last 2 lines
    line(toz, tof, ffo, tof);
    line(toz, onf, fivefz, onf);
}