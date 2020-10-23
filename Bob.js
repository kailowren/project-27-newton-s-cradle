class Bob {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution: 0.3,
          friction: 0.3,
          density: 1.2
      }
      
      this.body = Bodies.circle(x,y,radius,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("pink");
      Engine.update(engine); 
      ellipseMode(RADIUS); 
      ellipse(pos.x, pos.y, 20, 20);
    }
  };