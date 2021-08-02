var garden,rabbit,apple,leave;
var gardenImg,rabbitImg,appleImg,leafImg;






function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg=loadImage("apple.png");
leafImg = loadImage("leaf.png")
  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background


//creating boy running

rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("r1", rabbitImg);

}


function draw() {
  background(gardenImg);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  
  
  
  drawSprites();
  
  spawnApple()
  spawnLeaves()


}

function spawnApple(){
  if (frameCount % 80===0){
    apple=createSprite(200,200,20,10)
    apple.x=Math.round(random(80,350))
    apple.scale=0.1;
    apple.addImage("C1",appleImg)
    
    apple.velocityY=6;
   

   apple.lifetime=100;
    
  }
}

function spawnLeaves(){
  if (frameCount % 60===0){
    leaf=createSprite(200,100,20,10)
    leaf.x= Math.round(random(100,300))
    leaf.addImage("C1",leafImg)
  leaf.scale=0.1;
  leaf.velocityY=6;


  leaf.lifetime=100;
  }
    
  
 

}

