
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1200,130,40);
	mango3 = new mango(1075,215,40)
	mango4 = new mango(900,125,40)
	mango5 = new mango(1000,140,40)
	mango6 = new mango(980,215,40)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	
	stone1 = new stone(230,424,20)

string1 = new string(stone1.body,{x:230,y:424})
	

	Engine.run(engine);


}

function draw() {

  background(230);

  image(boy ,200,340,200,300);
  
  console.log(mouseY)

  var collision = Matter.SAT.collides(stone1.body,mango1.body);
   if (collision.collided) 
   {    Matter.Body.setStatic(mango1.body,false)  }

   var collision1 = Matter.SAT.collides(stone1.body,mango2.body);
   if (collision1.collided) 
   {    Matter.Body.setStatic(mango2.body,false)  }

   var collision2 = Matter.SAT.collides(stone1.body,mango3.body);
   if (collision2.collided) 
   {    Matter.Body.setStatic(mango3.body,false)  }

   var collision3 = Matter.SAT.collides(stone1.body,mango4.body);
   if (collision3.collided) 
   {    Matter.Body.setStatic(mango4.body,false)  }

   var collision4 = Matter.SAT.collides(stone1.body,mango5.body);
   if (collision4.collided) 
   {    Matter.Body.setStatic(mango5.body,false)  }

   var collision5 = Matter.SAT.collides(stone1.body,mango6.body);
   if (collision5.collided) 
   {    Matter.Body.setStatic(mango6.body,false)  }

	text("press up key to try again",200,200)
  
  treeObj.display();
  mango1.display();
mango2.display()
mango3.display()

mango4.display()
mango5.display()
mango6.display()
  groundObject.display();

  stone1.display();
  string1.display()

 /* if(stone1.isTouchung(mango1))
  {
	  Matter.body.setStatic(mango1.body,false)
  }*/
}



function mouseDragged()
{

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
}

function mouseReleased()
{
	string1.fly();


}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		stone1.x = 230
		stone1.y = 424

		string1 = new string(stone1.body,{x:230,y:424})
	}
}