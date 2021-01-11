class Plinko {
constructor (x,y,r) {
var options ={  
restitution:1

}

this.r=10;
this.body = Bodies.circle(x,y,this.r,options)
World.add(world, this.body);

}
}
