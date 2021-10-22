
var trex ,trex_running;
var ground
var groundImage
var invisibleGround
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
 groundImage=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,185,20,20)
 trex.addAnimation("trexrunning",trex_running)
 trex.scale=0.5
 //creating a ground
ground=createSprite(200,180,600,20)
ground.addImage(groundImage)
ground.x=ground.width/2

invisibleGround=createSprite(200,190,600,10)
invisibleGround.visible=false

}

function draw(){
  background("white")
  ground.velocityX=-2
  console.log(trex.y)
if(ground.x<0){
  ground.x=ground.width/2
}


  //jumping trex
if(keyDown("space") && trex.y>=100){
  trex.velocityY=-10
}
//adding gravity
trex.velocityY=trex.velocityY+0.5
//stop trex falling on the ground
trex.collide(invisibleGround)

//rex.velocityX=+5
  drawSprites()

}
