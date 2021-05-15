var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var playerCount;

var car1, car2, car3, car4, cars;

var database;

var form, player, game;

var car1_Img,car2_Img,car3_Img,car5_Img, track, ground;

function preload(){

car1_Img = loadImage("images/car1.png")
car2_Img = loadImage("images/car2.png")
car3_Img = loadImage("images/car3.png")
car4_Img = loadImage("images/car4.png")
track = loadImage("images/track.jpg")
ground = loadImage("images/ground.png")

}

function setup(){
  canvas = createCanvas(displayWidth, displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("white")
  if(playerCount == 4){
    game.update(1)
  }
  if(gameState == 1){
    game.play()
  }
  if(gameState ==2){
    game.end()
  }
}


