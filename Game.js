class Game {
  constructor(){}

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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }

      form = new Form()
      form.display();
    }

    cycle1 = createSprite(100,200)
    cycle2 = createSprite(200,200)
    cycle3 = createSprite(300,200)
    cycle4 = createSprite(400,200)
    cycles = [cycle1,cycle2,cycle3,cycle4]
    
  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
     // var display_position = 130;
     var index = 0
     var x = 0
     var y 
     for(var plr in allPlayers){
      x = x+200
      y = displayHeight-allPlayers[plr].distance
      index=index+1
      cycles[index-1].x=x
      cycles[index-1].y=y
      
      if(index===player.index){
        cycles[index-1].shapeColor="yellow"
        camera.position.x=displayWidth/2
        camera.position.y=cycles[index-1].y































        
        
      }

        //if (plr === "player" + player.index)
         // fill("red")
       // else
         // fill("black");

      //  display_position+=20;
        //textSize(15);
       // text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();

    }
    drawSprites();
  }
}
