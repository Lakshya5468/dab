const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone,tree,boy,chain1,treeImg,boyImg;
var backgroundImg;

function preload() {
    treeImg=loadImage("sprites/tree.png");
    boyImg=loadImage("sprites/boy.png");
}

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    tree=createSprite(590,290,20,20);
    tree.addImage(treeImg);
    tree.scale=0.35;

    boy=createSprite(200,435,20,20);
    boy.addImage(boyImg);
    boy.scale=0.125;

    stone=new Stone(225,400,100,100);

    ground = new Ground(width/2,500,width,30);
    chain1=new Slingshot(stone.body,{x:200,y:350});

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    Engine.update(engine);

    ground.display();
    drawSprites();
    stone.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain1.attach(stone.body);
    }
}