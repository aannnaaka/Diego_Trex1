var dino;
var imagen;
var miau;
var mim
function preload(){
  imagen=loadAnimation("trex1.png","trex3.png","trex4.png");
  mim=loadImage("ground2.png");
}
function setup(){
  createCanvas(1000,300) 
  dino=createSprite(200,200,100,30);
  dino.addAnimation("a",imagen)
miau=createSprite(200,300,100,30);
miau.addImage("ground",mim);
}
function draw(){
  background("cyan")
  if (keyDown("space")){
    dino.velocityY=-10
  }
  dino.velocityY=dino.velocityY+0.8
  drawSprites();
}
  ground.addImage("ground",groundImage);
  