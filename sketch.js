//values for walker
let x, y;
let w;
let x1;
let y1;
let w1;


function setup() {
  createCanvas(400, 400); 
  
  //setup values
  x = width/3;
  y = height/3;
  w = 50;
}


function draw() {
  background(220, 2);
  
  //update position
  x = x + random(-15, 15);
  y = y + random(-15, 15);

  //display walker
  fill(0, random(100, 150), 255);
  noStroke(ellipse(x, y, random(w-20, w+20)));

  
  //setup values
  x1 = width/2;
  y1 = height/2;
  w1 = 60;




  x1 = x1 + random(-25, 25);
  y1 = y1 + random(-25, 25);

  //display walker
  fill(255, random(150, 255), 94);
  noStroke(ellipse(mouseX, mouseY, random(w1-20, w1+20)));
  
  
}