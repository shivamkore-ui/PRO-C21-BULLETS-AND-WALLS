var bullet;
var wall;
var thickness, speed, weight;
var damage;

function setup() {
  createCanvas(1200,800);
  
  speed = random(53, 112);
  weight = random(30, 52);
  thickness = random(22, 83); 
  damage = 0.5 * speed * speed * speed/(thickness * thickness * thickness); 
 
  bullet = createSprite(400,200,50,10);
  bullet.shapeColor = "green";
  bullet.velocityX = speed;
  bullet.debug = true;
  
  wall = createSprite(700,200,thickness,150);
  wall.shapeColor = color(0, 0, 0);
  wall.debug = true;

}

function draw() {
  background(0,0,0);  

  if(isTouching(bullet, wall)){
    damage = 0.5 * speed * speed * speed/(thickness * thickness * thickness); 
  if(damage > 10){
    wall.shapeColor = color(255, 0, 0);
  }
  if(damage < 10){
    wall.shapeColor = color(0, 255, 0); 
  }
}
  drawSprites();
}

