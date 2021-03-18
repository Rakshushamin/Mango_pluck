
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var cons;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	//text("Press space to get a chance to play",200,100);

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,172,30);
	mango3=new mango(900,172,30);
	mango4=new mango(1000,180,30);
	mango5=new mango(1150,220,30);
	mango6=new mango(1175,150,30);
	mango7=new mango(1225,190,30);
	mango8=new mango(1020,105,30);
	mango9=new mango(945,235,30);
	mango10=new mango(1050,230,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stoneObj=new Stone(240,416,20);

	cons= new Cons(stoneObj.body,{x:240,y:420});



	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  
  text("Press space to get a chance to play",200,100);
  image(boy ,200,340,200,300);
  
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stoneObj.display();
  cons.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mang010);

  keyPressed();

}

function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  cons.fly();
}

function detectCollision(lstone,lmango)
{
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.Position;

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.Body,false);
	}
}

function keyPressed()
{
	if(keyCode===32)
	{
		Matter.Body.setPosition(stoneObj.Body,{x:235,y:420})
		launcherObject.attach(stoneObj.Body);
	}
}

