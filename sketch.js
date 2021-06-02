const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);

    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber = new Rubber(900,450,70);
    hammer = new Hammer(10,100);
    //iron = new Iron(600,20);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    stone.display();
    iron.display();
    rubber.display();
    hammer.display();
    
    
    //iron.display();

    
 
}