let lanterns = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255);

  // Display existing lanterns
  for (let lantern of lanterns) {
    lantern.display();
    lantern.move();
  }
}

function mousePressed() {
  // Create a new lantern at the mouse position
  let newLantern = new Lantern(mouseX, mouseY);
  lanterns.push(newLantern);
}

class Lantern {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sizeX = 50; // Adjust the horizontal size of the lantern
    this.sizeY = 60; // Adjust the vertical size of the lantern (making it more oval)
    this.knotWidth = 10; // Adjust the width of the knot rectangle
    this.knotHeight = 6; // Adjust the height of the knot rectangle
    this.color = color(random(255), random(255), random(255)); // Random color
    this.speed = random(1, 2); // Random speed
  }

  move() {
    // Move the lantern upwards
    this.y -= this.speed;

    // Remove lantern if it goes off-screen
    if (this.y < -this.sizeY) {
      lanterns.splice(lanterns.indexOf(this), 1);
    }
  }

  display() {
    // Draw the balloon
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.sizeX, this.sizeY);

    // Draw the knot
    fill(0); // Knot color
    rectMode(CENTER);
    rect(this.x, this.y + this.sizeY / 2, this.knotWidth, this.knotHeight);

    // Draw the hanging string
    stroke(0);
    line(this.x, this.y + this.sizeY / 2, this.x, this.y + this.sizeY * 2);
  }
}

