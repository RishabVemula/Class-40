class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,200) 
    car1.addImage("car1", car1_Img)
    car2 = createSprite(300,200)
    car2.addImage("car2", car2_Img)
    car3 = createSprite(500,200)
    car3.addImage("car3", car3_Img)
    car4 = createSprite(700,200)
    car4.addImage("car4", car4_Img)
    cars = [car1,car2,car3,car4]
  }

 

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background(ground)
      image(track, 0,-displayHeight * 4, displayWidth, displayHeight * 5)
      var index = 0
      var x = 350
      var y 
      for(var plr in allPlayers){
       index = index + 1
       x = x + 250
       y = displayHeight - allPlayers[plr].distance
       cars[index - 1].x = x
       cars[index - 1].y = y
       if(index == player.index){
        fill("red") 
        stroke(10)
        ellipse(x,y,60,60)
         cars[index - 1].shapeColor = "red" 
         camera.position.x = displayWidth/2
         camera.position.y = cars[index - 1].y
         
       }
      }
      
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance > 5300){
      gameState = 2
    }
    drawSprites()

  }

  end(){
    alert("Game Ended")
  }

}