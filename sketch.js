const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
const Constraint = Matter.Constraint

var engine, world
var stand1, stand2
var ball
var slingshot
var ground


function setup() {
  createCanvas(900,450);

  engine = Engine.create();
  world = engine.world();
  Engine.run(engine)


  ground = new Ground(450, 380, 900, 20)
  stand1 = new Stand(390, 300, 250, 10)
  stand2 = new Stand(700, 200, 200, 10)

  //level 1
  block1 = new Block(265, 300, 30, 40)
  block2 = new Block(295, 300, 30, 40)
  block3 = new Block(325, 300, 30, 40)
  block4 = new Block(355, 300, 30, 40)
  block5 = new Block(385, 300, 30, 40)
  block6 = new Block(415, 300, 30, 40)
  block7 = new Block(445, 300, 30, 40)

  //level 2
  block8 = new Block(295, 260, 30, 40)
  block9 = new Block(325, 260, 30, 40)
  block10 = new Block(355, 260, 30, 40)
  block11 = new Block(385, 260, 30, 40)
  block12 = new Block(415, 260, 30, 40)

  //level 3
  block13 = new Block(325, 220, 30, 40)
  block14 = new Block(355, 220, 30, 40)
  block15 = new Block(385, 220, 30, 40)

  //top
  block16 = new Block(355, 180, 30, 40)

  polygon = Bodies.circle(50, 200, 20);
  World.add(world, polygon);

  imageMode(CENTER)

  image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);


  slingShot = new Slingshot(this.polygon,{x:100, y:200});
}

function draw() {
  background(255,255,255);  

  ground.display();
  stand1.display();
  stand2.display();

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
}
