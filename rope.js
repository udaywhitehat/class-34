class Rope{
    constructor(pointa,bodyb){
        var options = {
            pointA:pointa,
            bodyB:bodyb,
            length:350,
            stiffness:0.5
        }
        this.Rope = Constraint.create(options)
        this.pointA = pointa 
    World.add(world,this.Rope)
    }
    display(){
        var pointA  = this.pointA
        var pointB = this.Rope.bodyB.position
        strokeWeight (5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
    
}
