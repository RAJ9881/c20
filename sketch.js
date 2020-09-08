var car,wall ; 
var speed,weight ; 

function setup() {
 var canvas =  createCanvas(800,400);
 canvas.shapeColor = color(80,80,80);


  speed=random(55,90);
  weight=random(400,1500);

 car =  createSprite(50,200,50,50);
 
 wall = createSprite(400,200,60,height/2);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background(80,80,80);  

  car.velocityX = speed ; 

  if(wall.x-car.x <(car.weight+wall.weight)/2)
  {
      car.velocityX = speed;
      var deformation = 0.5*weight*speed*speed /22509 ; 
      if(deformation > 180 )
      {
        car.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        car.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        car.shapeColor = color(0,255,0);
      }
    } 
    drawSprites();
}