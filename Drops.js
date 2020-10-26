class Drops{
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0.1,
            isStatic:false
        }  
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }

    display() {
        fill("blue");
        ellipse(this.body.x,this.body.y,10);
    }

    update() {
        if (this.body.position.y > height) {
            Matter.Body.setPosition(this.body,{ x: random(0, 400),y: random(0, 400) });
        }
    }
}