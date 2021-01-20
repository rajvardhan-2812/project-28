class stone
{
    constructor(x,y,rad)
    {
        var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density:1.2
			}
		

            
		this.image=loadImage("images/stone.png")
        this.body=Bodies.circle(x,y, rad, options)

        this.rad = rad

		World.add(world, this.body);
    }
    display()
	{
		var Pos=this.body.position;	
		push()
		translate(Pos.x, Pos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image,0,0,this.rad*2,this.rad*2)
		pop()
 }
} 