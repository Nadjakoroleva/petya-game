
		let hero;
		let food;
		let vrag;
		let foodX = 0;
		let foodY = 0;
		let x = 0;
		let dx = 5;
		let y = 0;
		let dy = 5;
		let health = 100;
		let vragX = 0;
		let vragY = 0;
		let dHealth = 0;

function setup() {
	createCanvas(800, 800);
	food.resize(0, 100);  
  foodX = random(100, 700);   
  foodY = random(100, 700);
  vragX = random(400, 700);
  vragY = random(400, 700);
  health = 100;
}
  
function preload() {  // preload() runs once
	food = loadImage("food.png");
	vrag = loadImage("vrag.png");
	hero = loadImage("hero.png");

		}


function draw() {
  background('#FCFCFC');

  image(food, foodX, foodY);

  hero.resize(0, 200);
  image(hero, x, y);

  vrag.resize(0, 200);
	image(vrag, vragX, vragY);
	rect(width - 130, 30, health, 30);

  if (x < vragX) {
    vragX = vragX - 1;
  }
  if (x > vragX) {
  vragX = vragX + 1;
  }
if (y > vragY) {
vragY = vragY + 1;
}
else if (y < vragY) {
vragY = vragY - 1;
}
  if (health < 0) {
    textSize(50);
    text("GAME OVER", 80, 400);
  } else {
    fill('#55FC03');
    health = 100 - millis() / 1000 + dHealth;
    
    if (health < 20) {
      fill(250, 0, 0);
    }

   
  }

  if (x + 100 > foodX - 125 && x - 100 < foodX + 50) {
    if (y + 100 > foodY - 100 && y - 100 < foodY + 100) {
      dHealth = dHealth + 1;
      foodX = random(100, 700);
      foodY = random(100, 700);
    }
  }
}



function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    x = x + dx;
  } else if (keyCode == LEFT_ARROW) {
    x = x - dx;
  }

  if (keyCode == UP_ARROW) {
    y = y - dy;
  }
  if (keyCode == DOWN_ARROW) {
    y = y + dy;
  }
}
	