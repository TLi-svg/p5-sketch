function setup() {
  createCanvas(800, 800);
  console.log(mouseX, mouseY)
}

function draw() {
  background(0, 200, 255);
  
  // Main Rectangle of Building
  fill('#2A2A2A');
  noStroke();
  rect(100, 200, 600, 700);
  rect(100, 100, 300, 150);
  fill('#414141');
  rect(500, 50, 150, 150);
  
  // Left Side Windows
  fill('#000550');
  for (let i = 150; i <= 590; i+=110){
      fill('#000550');
      rect(300, i, 50, 60);
      fill('rgba(255,255,255,0.3)');
      rect(303, i + 3, 10, 10);
  } 
  fill('#000550');
  rect(175, 590, 50, 60);
  fill('rgba(255,255,255,0.3)');
  rect(178, 593, 10, 10);
  
  // Right Side Windows
  fill('#000550');
  for (let i = 260; i <= 590; i+= 110) {
      fill('#000550');
      rect(600, i, 50, 60);
        fill('rgba(255,255,255,0.3)');
      rect(603, i + 3, 10, 10);
  }
  
  // Balconies
  
  // Doorways
  fill('#6A6A6F');
  for(let i = 140; i < 500; i+= 110) {
    rect(175, i, 50, 70);
  }
  
  for(let i = 250; i < 600; i +=110) {
    rect(475, i, 50, 70);
  }
  
  // Guardrails and Platform
  fill('#DCDCE3');
  for(let i = 140; i < 500; i+= 110) {
    rect(160, i + 65, 80, 5);
    rect(160, i + 25, 80, 5);
    rect(160, i + 25, 5, 40);
    rect(235, i+ 25, 5, 40);
    rect(160, i + 35, 80, 2);
    rect(160, i + 45, 80, 2);
    rect(160, i + 55, 80, 2);
  }
    for(let i = 250; i < 600; i+= 110) {
    rect(460, i + 65, 80, 5);
    rect(460, i + 25, 80, 5);
    rect(460, i + 25, 5, 40);
    rect(535, i+ 25, 5, 40);
    rect(460, i + 35, 80, 2);
    rect(460, i + 45, 80, 2);
    rect(460, i + 55, 80, 2);
  }
  
  
  
  
  // Highlights
  fill('#FFFFFF');
  rect(400, 200, 300, 5);
  rect(100, 100, 300, 5);
  rect(500, 50, 150, 5);
  
  // Ground Floor
  fill('#777777');
  rect(150, 700, 100, 100);
  fill('#FF6C00');
  rect(300, 675, 200, 35);
  fill('#F1E547');
  rect(300, 720, 35, 75);
  rect(345, 720, 35, 75);
  rect(390, 720, 50, 75);
  rect(450, 720, 50, 75);
  fill('#000000');
  rect(550, 700, 125, 100);
  
}
