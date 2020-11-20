var kitchen,kitchenImage;
var character,characterImage;
var food,burger,cupcake,frenchfries,icecream,omlet,pizza,soda;
var FOOD;
var Soda;
var SodA;
var PLAY=1;
var END=0;
var gameState=PLAY;
var CharacterImage;
function preload(){
 kitchenImage=loadImage("kitchen_0.png"); 
  
  characterImage=loadImage("character_0.png");
  
  burger=loadImage("burger_0.png");
  cupcake=loadImage("cupcake_0.png");
  frenchfries=loadImage("french fries_0.png");
  icecream=loadImage("ice cream_0.png");
  omlet=loadImage("omlet_0.png");
  pizza=loadImage("pizza_0.png");
  soda=loadImage("soda_0.png");
  
  CharacterImage=loadImage("sprite_0.png");
  
}
function setup(){
  createCanvas(600,600);
  
  kitchen=createSprite(300,300,50,10);
  kitchen.addImage(kitchenImage);
  kitchen.scale=1.5;
  if(gameState===PLAY){
    character=createSprite(300,480,50,10);
  character.addImage(characterImage);
  character.scale=0.4;
    
     FOOD=createSprite(55,320,50,10)
  SodA=createSprite(545,320,50,10);
  }
  foodGroup=new Group();
  SodaGroup=new Group();
 
  
}
function draw(){
  background("yellow");
  createEdgeSprites();
  drawSprites();
   textSize(20);
  text("FOOD",25,500);
  textSize(20);
  text("SODA",525,500);
  if(gameState===PLAY){
   
    if(keyDown(LEFT_ARROW)){
    character.x=character.x-10;
  }
  if(keyDown(RIGHT_ARROW)){
    character.x=character.x+10;
  }
  if(character.isTouching(foodGroup)){
    FOOD.height=FOOD.height+10;
    foodGroup.destroyEach();
  }
  if(character.isTouching(SodaGroup)){
   SodA.height=SodA.height+10;
    SodaGroup.destroyEach();
  }
  if(FOOD.height===200||SodA.height===100){
    gameState=END
    
  }
    spawnFood();
  SODA();
  }
  
  
  if(gameState===END){
    textSize(20);
    text("My stomach is fully filled with food and soda,so please stop.",50,200)
    text("Press ENTER to restart",150,220);
    character.y=480;
    character.addImage(CharacterImage);
     character.scale=0.7;
     foodGroup.destroyEach();
     SodaGroup.destroyEach();
    if(keyDown("ENTER")){
      reset();
    }
  }
}
function spawnFood(){
 if (frameCount % 100 === 0){
   var food = createSprite(200,0,10,40);
 food.velocityY = 6;

   food.x=Math.round(random(50,450));
    // //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: food.addImage(burger);
              break;
      case 2: food.addImage(cupcake);
              break;
      case 3: food.addImage(pizza);
              break;
      case 4: food.addImage(icecream);
              break;
      case 5: food.addImage(frenchfries);
              break;
      case 6: food.addImage(omlet);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    food.scale = 0.2;
    food.lifetime = 600;
   foodGroup.add(food);
 }
}
function SODA(){
  if(frameCount%250===0){
  Soda=createSprite(200,0,50,10);
  Soda.velocityY=6;
  Soda.addImage(soda);
  Soda.scale =0.2; 
   Soda.x=Math.round(random(50,450));
    SodaGroup.add(Soda);
  }
}
function reset(){
  gameState = PLAY;
 
  character.addImage(characterImage);
  character.scale=0.4;
 foodGroup.destroyEach();
  SodaGroup.destroyEach();
   FOOD.height=10;
  SodA.height=10;
  
  
}
