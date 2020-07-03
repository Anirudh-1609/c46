class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1 = loadImage('sprites/archer.png');
        
       // this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.sling1,displayWidth/20,displayHeight/1.625,150,300);
      //  image(this.sling2,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(2);
                line(pointA.x + 40, pointA.y+180, pointB.x +100, pointB.y+110);
                line(pointA.x + 40, pointA.y+180, pointB.x + 110, pointB.y +275);
              //  image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            }
            else{
                strokeWeight(2);
                line(pointA.x + 40, pointA.y, pointB.x -20, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
               // image(this.sling3,pointA.x + 25, pointA.y -10,15,30);
            }
           
            
            pop();
        }
    }
    
}