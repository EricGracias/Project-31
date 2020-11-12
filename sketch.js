const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var par1,par2,par3,par4,par5,par6,par7,par8,par9,par10;

var division1,division2,division3,division4,division5,division6,division7;

var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20;

function setup() {
  createCanvas(620,720);
 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);


  ground = new Ground(width/2,height-13,width+1,20);

  division1 = new Divisions(10,350,5,690);
  division2 = new Divisions(110,570,5,250);
  division3 = new Divisions(210,570,5,250);
  division4 = new Divisions(310,570,5,250);
  division5 = new Divisions(410,570,5,250);
  division6 = new Divisions(510,570,5,250);
  division7 = new Divisions(610,350,5,690);

  p1 = new Plinko(100,100,20,20);
  p2 = new Plinko(200,100,20,20);
  p3 = new Plinko(300,100,20,20);
  p4 = new Plinko(400,100,20,20);
  p5 = new Plinko(500,100,20,20);

  p6 = new Plinko(150,200,20,20);
  p7 = new Plinko(250,200,20,20);
  p8 = new Plinko(350,200,20,20);
  p9 = new Plinko(450,200,20,20);

  p10 = new Plinko(100,300,20,20);
  p11 = new Plinko(200,300,20,20);
  p12 = new Plinko(300,300,20,20);
  p13 = new Plinko(400,300,20,20);
  p14 = new Plinko(500,300,20,20);

  p15 = new Plinko(50,400,20,20);
  p16 = new Plinko(150,400,20,20);
  p17 = new Plinko(250,400,20,20);
  p18 = new Plinko(350,400,20,20);
  p19 = new Plinko(450,400,20,20);
  p20 = new Plinko(550,400,20,20);

  par1 = new Particle(50,0,20,20);
  par2 = new Particle(120,0,20,20);
  par3 = new Particle(130,0,20,20);
  par4 = new Particle(210,0,20,20);
  par5 = new Particle(240,0,20,20);
  par6 = new Particle(315,0,20,20);
  par7 = new Particle(340,0,20,20);
  par8 = new Particle(420,0,20,20);
  par9 = new Particle(420,0,20,20);
  par10 = new Particle(530,0,20,20);

  par11 = new Particle(60,0,20,20);
  par12 = new Particle(110,0,20,20);
  par13 = new Particle(140,0,20,20);
  par14 = new Particle(220,0,20,20);
  par15 = new Particle(230,0,20,20);
  par16 = new Particle(325,0,20,20);
  par17 = new Particle(360,0,20,20);
  par18 = new Particle(460,0,20,20);
  par19 = new Particle(410,0,20,20);
  par20 = new Particle(540,0,20,20);


}

function draw() {
  background("black");  

  ground.display();

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();
  p6.display();
  p7.display();
  p8.display();
  p9.display();
  p10.display();
  p11.display();
  p12.display();
  p13.display();
  p14.display();
  p15.display();
  p16.display();
  p17.display();
  p18.display();
  p19.display();
  p20.display();




  fill("yellow");
  par1.display();
  par2.display();

  fill("magenta");
  par3.display();
  par4.display();
  par5.display();

  fill("turquoise");
  par6.display();
  par7.display();

  fill("lightgreen");
  par8.display();
  par9.display();
  par10.display();

  fill("red");
  par11.display();
  par12.display();

  fill("lightblue");
  par13.display();
  par14.display();
  par15.display();

  fill("lightgreen");
  par16.display();
  par17.display();

  fill("pink");
  par18.display();
  par19.display();
  par20.display();
  
}