
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(290,600,50,50);
	bob2 = new Bob(345,600,50,50);
	bob3 = new Bob(400,600,50,50);
    bob4 = new Bob(455,600,50,50);
	bob5 = new Bob(510,600,50,50);

    roof = new Roof(400,300,400,30);

	Engine.run(engine);
 
	rope1 = new Rope(bob1.body, roof.body, bobDiameter*2, 0);
	

}


function draw() {
  rectMode(CENTER);
  background(200);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  
  drawSprites();
 
}



