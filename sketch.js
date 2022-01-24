function setup() {
	createCanvas(650,600); // make an HTML canvas element width x height pixels
	frameRate(1);
}

function draw() {
	let h = hour()
	let m = minute()
	let s = second()
	background(225 - 7 * h, 248 - 8 * (h - 7), 255 - 5 * (h - 7));
	// textSize(32);
	// fill(180);
	// text(h, 10, 30);
	// fill(100);
	// text(m, 10, 60);
	// fill(0);
	// text(s, 10, 90);
	fill(251, 198, 164);
	noStroke();
	rect(100, 300 + 300 * (s / 60), 50, 300 - (300 * (s / 60)), 10, 10, 0, 0);
	fill(244, 169, 168);
	noStroke();
	rect(300, 300 + 300 * (m / 60), 50, 300 - (300 * (m / 60)), 10, 10, 0, 0);
	fill(206, 151, 176);
	noStroke();
	rect(500, 300 + 300 * (h / 24), 50, 300 - (300 * (h / 24)), 10, 10, 0, 0);
	stroke(0);
	line(125, 290 + 300 * (s / 60), 125, 300 + 300 * (s / 60));
	stroke(0);
	line(325, 290 + 300 * (m / 60), 325, 300 + 300 * (m / 60));
	stroke(0);
	line(525, 290 + 300 * (h / 24), 525, 300 + 300 * (h / 24));
	fill(255, 189, 46);
	noStroke();
	ellipse(125, 280 + 300 * (s / 60), 15, 25)
	ellipse(325, 280 + 300 * (m / 60), 15, 25)
	ellipse(525, 280 + 300 * (h / 24), 15, 25)

	if (s == 0) {
		console.log(m);
	}
}
