var ground1, ground2, ground3, ground4
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10
var block11, block12,block13, block14, block15,block16,block17,block18, block19, block20
var block21, block22, block23,block24,block25,block26,block27,block28,block29,block30
var ball
var slingshot
var score = 0

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
//const Render = Matter.Render



function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,770,1200,10);
	ground2 = new Ground(500,500,230,10);
	ground3 = new Ground(800,200,230,10)
	ground4 = new Ground(1000,500,230,10)

	//extreme left row 1
	block1 = new Block(575,475,50,45);
	block2 = new Block(530,475,50,45);
	block3 = new Block(480,475,50,45);
	block4 = new Block(430,475,50,45)
	// row 2
	block5 = new Block(450,430,50,45);
	block6 = new Block(500,430,50,45);
	block7 = new Block(550,430,50,45);
	//row3
	block8 = new Block(475,385,50,45);
	block9 = new Block(520,385,50,45);
	//row4
	block10 = new Block(495,340,50,45)

	//extreme right row 1
	block11 = new Block(925,475,50,45);
	block12 = new Block(975,475,50,45);
	block13 = new Block(1025, 475,50,45)
	block14 = new Block(1075,475,50,45);
	//row2
	block15 = new Block(950,430,50,45);
	block16 = new Block(1000,430,50,45);
	block17 = new Block(1050,430,50,45);
	//row3
	block18 = new Block(975,385,50,45);
	block19 = new Block(1020,385,50,45);
	//row4
	block20 = new Block(995,340,50,45)

	//extreme top row 1
	block21 = new Block(720,170,50,45)
	block22 = new Block(770,170,50,45)
	block23 = new Block(820,170,50,45);
	block24 = new Block(870,170,50,45);
	//row 2
	block25 = new Block(745,125,50,45);
	block26 = new Block(795,125,50,45);
	block27 = new Block(840,125,50,45);
	//row3
	block28 = new Block(765,80,50,45);
	block29 = new Block(815,80,50,45);
	//row4
	block30 = new Block(790,35,50,45);

	ball = new Polygon(200,500,20,20);

	
	slingshot = new SlingShot(100,400,ball.body)

	
	

	
	/*var render = Render.create({
		element:document.body,
		engine: engine,
		options:{
			width:1200,
			height:700,
			wireframes:false
		}
	});*/


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();

  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();

  block1.Score();
  block2.Score();
  block3.Score();
  block4.Score();
  block5.Score();
  block6.Score();
  block7.Score();
  block8.Score();
  block9.Score();
  block10.Score();

  block11.Score();
  block12.Score();
  block13.Score();
  block14.Score();
  block15.Score();
  block16.Score();
  block17.Score();
  block18.Score();
  block19.Score();
  block20.Score();

  block21.Score();
  block22.Score();
  block23.Score();
  block24.Score();
  block25.Score();
  block26.Score();
  block27.Score();
  block28.Score();
  block29.Score();
  block30.Score();

  if(score === 600){
    fill("white");
    text("you win",500,500);
    text("press the page and start playing again!! ", 500,400);
  }


  
  //score
  
  
  ball.display();

  fill("white");
  text("score :" +score,1000,50 );

  //fill("black")
  //text("press right arrow to get one more chance",600,700);

  
  
  

  //line(ball.body.position.x,ball.body.position.y,200,100)

  //line(ball.x,ball.y, bodyB.x,bodyB.y)

  slingshot.display();
  //drawSprites();
 
}

function drawLine(constraint){
	ballBodyPosition = constraint.bodyA.position
	groundBodyPosition = constraint.bodyB.position
	groundBodyOffset = constraint.pointB
	groundBodyX = groundBodyPosition.x + groundBodyOffset.x
	groundBodyY = groundBodyPosition.y + groundBodyOffset.y
	line(ballBodyPosition.x,ballBodyPosition.y,groundBodyX,groundBodyY);
  }

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slingshot.fly();
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
		slingshot = new SlingShot(100,400,ball.body)
		
	}
}

