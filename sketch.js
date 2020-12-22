var fixedRect, movingRect;
var object3,object4,object5,object6;

function setup() {
  createCanvas(900,600);

  fixedRect = createSprite(300, 200, 50, 80);
  fixedRect.shapeColor = "orange";
  fixedRect.velocityY = 5;

  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "orange";

  object3 = createSprite(600,200,50,50);
  object3.shapeColor = "blue";

  object4 = createSprite(200,200,50,50);
  object4.shapeColor = "green";

  object5 = createSprite(300,500,50,50);
  object5.shapeColor = "violet";
  object5.velocityY = -5;

  object6 = createSprite(400,200,50,50);
  object6.shapeColor = "white";

}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(object3,movingRect)){
    object3.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  } 
  else {
    object3.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  
  bounceOff(fixedRect,object5);

  drawSprites();
}



