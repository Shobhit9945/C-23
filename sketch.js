const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box, box2;
var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;


    box = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);

    ground = new Ground(200,height,400,20);



  
  

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    box.display();
    box2.display();
    ground.display();


}