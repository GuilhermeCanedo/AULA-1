var quadrado
function setup() {
  createCanvas(400,400);
quadrado = createSprite(200,200, 50, 50)
quadrado.shapeColor="red"
}

function draw() 
{
  background(30);
  if (keyDown("right")) {
 quadrado.x= quadrado.x+ 2   
  }
drawSprites()
}




