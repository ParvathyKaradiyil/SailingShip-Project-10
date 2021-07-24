var ship, shipImage, sea, seaImage
function preload(){
shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200);
  ship = createSprite(130,200,30,30);
  ship.addAnimation("sailing ship", shipImage);
  sea.addImage(seaImage);
  ship.scale = 0.25;
  sea.scale = 0.3;
  sea.velocityX = -5
}

function draw() {
  background("blue");
  drawSprites();
  console.log(sea.x);
  if(sea.x<0){
    sea.x = sea.width / 8;
  }
}