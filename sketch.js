const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var umbrella;

var lightning1Img , lightning2Img , lightning3Img , lightning4Img;

var maxDrops = 100;

var drop = [];

function preload(){
    lightning1Img = loadImage("images/thunderbolt/1.png");
    lightning2Img = loadImage("images/thunderbolt/2.png");
    lightning3Img = loadImage("images/thunderbolt/3.png");
    lightning4Img = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    canvas = createCanvas(1200,400); 

    umbrella = new Umbrella(200,300);

    for (var i = 0; i < 70; i++) {
        drop.push(new Drops(random(0, 500), random(0, 500)));
    }
}

function draw(){
    background(255);

    Engine.update(engine);

    umbrella.display();

    for (var i = 0; i < 70; i++) {
        drop[i].display();
        drop[i].update();
    }

        if (frameCount % 100 === 0) {
            lightning = createSprite(width / 2, 100, 10, 10);
            var rand = Math.round(random(1, 2));
            switch (rand) {
                case 1: lightning.addImage(lightning1Img);
                    break;
                case 2: lightning.addImage(lightning2Img);
                    break;
                case 3: lightning.addImage(lightning3Img);
                    break;
                case 4: lightning.addImage(lightning4Img);
                    break;
                default: break;
            }
        }
        
        drawSprites();
}

