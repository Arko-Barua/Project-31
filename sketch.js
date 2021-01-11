const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function setup() {
  createCanvas = (480,600)
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(480,10,0,600);

}
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
for (var k = 0; k <=width; k = k + 80) {
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight))
}
for (var j = 40; j <=width, j=j+50)                                 
{
 plinkos.push(new Plinko(j,75));
}
for (var j = 15; j <=width-10, j=j+50)
{
 plinkos.push(new Plinko(j,175));
}
for (var j = 40; j <=width-20, j=j+50)
{
 plinkos.push(new Plinko(j,275));
}
for (var j = 15; j <=width-30, j=j+50) {
  plinkos.push(new Plinko(j,375));
} 

function draw() {
  background ("black")

if(frameCount%60===0) {
particles.push(new Particle(random(width/2-10,width/2+10)), 10,10)
}
for (var j = 0; j < particles, legnth; j++) {
particles [j].display ();
}
for (var k = 0; k < divisions, legnth; k++) {
  divisions[k].display();
}
}
