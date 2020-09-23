var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
 // createSprite(400, 200, 50, 50);
 car=createSprite(50,200,50,20)
 
 weight=random(400,1500);
 wall=createSprite(1500,200,60,canvas.height/2)
 fill ("80,80,80")
 speed=random(0,150);
 car.velocityX=speed;
 
}

function draw() {
  //background(255,255,255);  
  background("black");
 
  car.collide(wall);
  if(wall.x-car.x<(car.width+wall.width/2))
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>100)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation>180 &&deformation<100 )
    {
      car.shapeColour=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}