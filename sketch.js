
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    ball= Bodies.circle(100,550,20,{isStatic:true});
    World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {

  Engine.update(engine)

  rectMode(CENTER);
  background(0);
   
  ellipseMode(RADIUS);
  ellipse(ball.x,ball.y,20,30);
 
  drawSprites();
   


}

