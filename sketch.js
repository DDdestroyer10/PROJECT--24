const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var b1,b2,b3;
var gr;
var pa;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	b1 = new dustbin(650,670,150,20)
	b2 = new dustbin(575,620,20,100)
	b3 = new dustbin(725,620,20,100)
	gr = new ground(400,690,800,20)
	pa = new paper(200,670,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  b1.display();
  b2.display();
  b3.display();
  gr.display();
  pa.display();
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(pa.body,pa.body.position,{x:88,y:-88});

  }
}