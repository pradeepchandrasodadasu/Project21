
var bullet,wall;
var weight,thickness;
var damage;

function setup() {
  createCanvas(1200,400);

  wall = createSprite(1000, 200, Math.round(random(22,83)), height/2);
  wall.shapeColor = color(80,80,80);
  //wall.debug = true;

  weight = Math.round(random(30,52));

  bullet = createSprite(50, 200, 20, 5);
  bullet.velocityX = Math.round(random(223,321));
  bullet.shapeColor = color(250,250);
  //bullet.debug = true;
  //console.log(bullet.velocityX);
  
  
  
  damage = Math.round(((0.5 * weight * bullet.velocityX * bullet.velocityX)/
  (wall.width*wall.width*wall.width)));

}

function draw() {
  background("black");  

  collide(wall,bullet);

  stroke("black");
  fill("blue");
  textSize(25);
  text("Damage = "+damage,width/2 - 50,50);
  
  drawSprites();
}

s