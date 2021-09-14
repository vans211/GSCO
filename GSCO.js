var car,wall;
var weight,speed;

function setup() {
  createCanvas(800,400);

  speed= random(55,300);
  weight= random(400,1200);


  car= createSprite(50,100,50,50);
  car.velocityX = speed;

  wall= createSprite(1500,200,60,height/2)

 
}

function draw() {
  background("blue");  
  console.log(car.velocityX);

if(wall.x-car.x < (car.width+wall.width)/2)
{
  car.velocityX-0;
  var deformation=-0.5 * weight * speed* speed/22500;
  if(deformation>180)
  {
    car.shapeColor=color(255,0,0);
  }
  
  if(deformation<180 && deformation>100)
  {
    car.shapeColor=color(230,230,0);
  }

  if(deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }

}

  drawSprites();
}