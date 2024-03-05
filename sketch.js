var c = "white";

function setup() {
  createCanvas(600, 400);
	background(30);
}

function draw() {
    
  if (mouseIsPressed) {
		stroke(c);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

	noStroke();
  //draw the first button
  fill("purple");
  rect(0, 0, 40, 40);

  //draw the second button
  fill("green");
  rect(40, 0, 40, 40);

  
}

//this will run whenever the mouse is pressed
function mousePressed() {
  if (mouseX > 0 && mouseX < 40 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "purple";
  }
  if (mouseX > 40 && mouseX < 80 && mouseY > 0 && mouseY < 40) {
    //set the variables to random values
    c = "green";
  }
 
  
}