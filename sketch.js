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
  if (keyDown("left")) {
    quadrado.x= quadrado.x-2 
     } 
     if (keyDown("up")) {
      quadrado.y= quadrado.y-2 
       }
       if (keyDown("down")) {
        quadrado.y= quadrado.y+ 2
         }
drawSprites()
}




