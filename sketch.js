var wall, thickness;
var weight, speed, bullet;




function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 50);
  thickness = random(22, 83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "grey";
  bullet = createSprite(50, 200, 50, 5);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  

  

}

function draw() {
 if(hasCollided(bullet, wall)){
  bullet.velocityX = 0;
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage > 10){
    wall.shapeColor = "red";
    }
  else{
    wall.shapeColor = "green";
  }
 }
  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x
  if(bulletRightEdge > wallLeftEdge){
    return true
  }
  else{
    return false
  }
}



