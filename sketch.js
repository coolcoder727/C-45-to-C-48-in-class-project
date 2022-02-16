const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, ballImg
var bottomGround
var topGround
var balloon, balloonImg
var player1,player1Img
var backGroundImg
var backImg
var wizard3,wizard3Img
var net1,net1Img
var net2,net2Img
var rect

function preload(){
backImg = loadImage("assets/soccerpitch.png")
wizard3Img = loadImage("assets/wizard3.png");
ballImg = loadImage("assets/soccerball.png")
player1Img = loadImage("assets/wizard5.png");
net1Img = loadImage("assets/rightNet.png")
net2Img = loadImage("assets/leftNet.png")
}

function setup(){
  engine = Engine.create();
  world = engine.world;

  createCanvas(1350,650);
edges = createEdgeSprites()
//rect = createSprite(675,400)


//creating top and bottom grounds
//wizard3 = createSprite(200,390,300,300);
//wizard3.addImage(wizard3Img);
//wizard3.scale =2.6;
//wizard3.setCollider("rectangle",0,0,100,54)
wizard3 = new Wizard(200,390,300,300);


player1 = new Player(1200,390,250,250);
//player1.addImage(player1Img);
//player1.scale = 0.3
//player1.setCollider("rectangle",0,0,400,490)

topGround = createSprite(650,515,1300,20);
topGround.visible = true;


      
//creating balloon     
ball = createSprite(720,360,20,50);
ball.addImage(ballImg)
ball.scale= 0.15


//net for right side
net1 = createSprite(1275,405,30,30)
net1.addImage(net1Img)
net1.scale=0.6

//net for left side
net2 = createSprite(80,400,30,30)
net2.addImage(net2Img)
net2.scale=2.2

}

function draw() {
  
  background(backImg);
  Engine.update(engine);

  player1.velocityX=0;
  player1.velocityY=0;
  
  keyPressed()
  


//wizard3.collide(topGround);
//player1.collide(topGround);

  if(keyDown("left")){
    player1.velocityX=player1.velocityX-5;
  }
  if(keyDown("right")){
    player1.velocityX=player1.velocityX+5;
  }
  if(keyDown("up")){
    player1.velocityY=player1.velocityY-5;
  }
  if(keyDown("down")){
    player1.velocityY=player1.velocityY+5;
  }
  
  //wizard 3 controls
    
  /*wizard3.velocityX=0;
  wizard3.velocityY=0;
  if(keyDown("a")){
    wizard3.velocityX=wizard3.velocityX-5;
  }
  if(keyDown("d")){
    wizard3.velocityX=wizard3.velocityX+5;
  }
  if(keyDown("w")){
    wizard3.velocityY=wizard3.velocityY-5;
  }
  if(keyDown("s")){
    wizard3.velocityY=wizard3.velocityY+5;
  }
  
    if(wizard3.isTouching(ball)){
      ball.velocityX=3
      ball.velocityY=4
    }   
    ball.bounceOff(topGround)

    if(player1.isTouching(ball)){
      ball.velocityX=3
      ball.velocityY=4
    }*/
          wizard3.display();
          player1.display();
          
          function keyPressed() {
            if (keyCode === UP_ARROW) {
             Matter.Body.applyForce(wizard3.body,wizard3.body.position,{x:0,y:-1});
             //wizard3.bounceOff(edges);
            }
          }
         
        
          drawSprites();
        
}
