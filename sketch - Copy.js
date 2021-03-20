var x,y;




function setup() {
  createCanvas(800,400);
  x = createSprite(400, 200, 50, 50);
  x.shapeColor = "green"
  y = createSprite(200,200,80,30);
  y.shapeColor = "green"
}

function draw() {
  background(255,255,255);  
  x.x = World.mouseX
  x.y = World.mouseY
  if (x.x - y.x < y.width/2 + x.width/2 )
   {x.shapeColor = "red"
    y.shapeColor = "red"   }
  else { x.shapeColor = "green"
        y.shapeColor = "green"    }
  drawSprites();
}