
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var goal1;
var goal2



function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		restitution: 0.9,
		frictionAir:0.01
	  }

	  var ground_options ={
		isStatic: true
	  };

	//Create the Bodies Here.
	
	ground = Bodies.rectangle(400,690,800,20,ground_options);
	World.add(world,ground);
  
	ball = Bodies.circle(100,600,20,ball_options);
	World.add(world,ball);

	goal1= Bodies.rectangle(500,640,10,80,ground_options);
	World.add(world, goal1);
	goal2= Bodies.rectangle(640,640,10,80, ground_options);
	World.add(world,goal2);

	ellipseMode(RADIUS);
	rectMode(CENTER);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();



  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,800,20);

  rect(goal1.position.x,goal1.position.y,10,80);
  rect(goal2.position.x,goal2.position.y,10,80);
}

function keyPressed(){
	if (keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball,{x:ball.position.x,y:ball.position.y},{x:0.05,y:0.05})
	}
}



