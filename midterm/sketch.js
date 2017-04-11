function setup() {
	createCanvas(640, 640);
	background("white");
	
	var columns = 6;
	var rows = 6;
	var w = width/columns;
	var h = height/rows;
	
	for (var x = 53; x < width; x += w) {
		for (var y = 60; y < height/3; y += h) {
			ellipse (x, y, 100, 100);
      triangle (0, 0, 53, 60, 0, 0);
		}
	}
}