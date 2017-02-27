function setup(){
    createCanvas(1080, 2000);
    
    var pink = "#d0a1a8";
    var gray = "#a9a9a9";
    var nocolor = "white";
    var a = 175;
    var b = 220;
    var c = 350;
    var d = 20;
    var e = 200;
    var f = 150;
    var g = 150;
    var h = 550;
    var i = 30;
    var j = 20;
    var k = 5;
    var l = 8;
    var m = 243;
    var n = 260;
    var o = 13;
    var p = 630;
    var q = 25;
    
    fill(pink)
    //Full Iphone Body
    rect(a, g, c, h, d);
    //Top Rect 
    rect(a, e, c, d);
    //Bottom Rect
    rect(a, p, c, q);
    
    fill(gray)
    //Iphone Primary Outside Lens
    ellipse(b, a, i);
    
    fill(nocolor)
    //Iphone Primary Middle Lens
    ellipse(b, a, j);
    
    //Iphone Primary Small Lens
    ellipse(b, a, k);
    
    //Secondary Small Lens
    ellipse(m, a, l);
    
    //Last Camera
    ellipse(n, a, o);
}