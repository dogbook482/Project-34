const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ocean;
var house, houseImg;

function preload(){
  ocean = loadImage("ocean.gif");
  houseImg = loadImage("house.png");

}
function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  house=createSprite(20,20,20,20);
  house.addImage(houseImg);
  house.scale = 0.5;
  
}


function draw() 
{
  background(ocean);
  Engine.update(engine);
  
}

