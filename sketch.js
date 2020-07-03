const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg;
var bird, slingshot;
var gameState="onSling"
var bgimg,score=0;
var enemyarr=[];
    function preload() {
  //  backgroundImg = loadImage("sprites/bacg.png");
  getbackgroundImage();
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(displayWidth/2,height,displayWidth,25);
   // platform = new Ground(150, 305, 300, 170);

   
    enemy1 = new Enemy(displayWidth*7/10, displayHeight*9/10);    
    enemy2 = new Enemy(810, displayHeight*9/10);
 villian1  = new Villian(1050,displayHeight*9/10);
   

    arrow1= new Bird(130,580);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(arrow1.body,{x:displayWidth/20, y:displayHeight/2});
}

function draw(){
    if (bgimg)
    background(bgimg);
   console.log(mouseX+" "+mouseY)
    fill(0);
    text("score"+score,width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    
    ground.display();
   
   spawnEnemies();
    enemy1.display();
    enemy1.score();
enemy2.display();
villian1.display();
villian1.score();
enemy2.score();

    arrow1.display();
    //platform.display();
    //log6.display();
    slingshot.display();
        
}

function mouseDragged(){
if(gameState=== "onSling")
    Matter.Body.setPosition(arrow1.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    gameState="launched";
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && arrow1.body.speed<1){
        gameState="onSling";
        slingshot.attach(arrow1.body);
        bird.trajectory=[];
        Matter.Body.setPosition(arrow1.body, {x: 200 , y: 50});

       }
       if(keyCode === 32 &&(arrow1.body.position.x<0 || arrow1.body.position.x>1200 || arrow1.body.position.y<0)){
        gameState="onSling";
        slingshot.attach(arrow1.body);
        arrow1.trajectory=[];
        Matter.Body.setPosition(arrow1.body, {x: 200 , y: 50});

       }
}
async function getbackgroundImage(){
    var response=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson=await response.json();
    var datetime=responsejson.datetime;
    var hour=datetime.slice(11,13);
    if (hour>=06 && hour<=18){
        bg="sprites/bacg.png";
    }
    else{
        bg="sprites/bacg2.png";
    }
    bgimg=loadImage(bg);
  

}
function spawnEnemies(){
    if(World.frameCount%200===0){
        var r=Math.round(random(200,displayHeight-200));
        enemy=new Enemy(displayWidth,r);
       // enemyarr.push(enemy);
        enemy1.velocity.x=-15;
        enemy.display();
        console.log(enemy);
    }
}