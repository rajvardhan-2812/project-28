class string
{
    constructor(bodyA,pointB)
{
   var options = {
        bodyA:bodyA,
        pointB:pointB,
        stiffness:0.04,
        length:60
    }
    this.pointB = pointB

    this.string = Constraint.create(options)

    World.add(world,this.string)
    
}
fly()
{
    this.string.bodyA = null
}
display()
{
    if(this.string.bodyA)
    {
   var pos=this.string.bodyA.position

   var pos2=this.string.pointB

    line(pos.x,pos.y,pos2.x,pos2.y)
    }
}
}