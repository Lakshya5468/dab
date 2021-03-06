class Slingshot{
    constructor(bodyA,pointA){
        var options = {
            bodyA: bodyA.body,
            pointA: pointA,
            length: 10,
            stiffness: 0.04
        }
        //this.chain=Constraint.create(options);
        this.pointA=pointA;
        //World.add(world,this.chain);
    }
        fly(){
        this.chain.pointA=null;
        }
        attach(body){
            this.chain.bodyA=body;
        }
    }