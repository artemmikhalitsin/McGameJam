setupMap = () => {
  passageTexture = PIXI.Texture.fromImage('static/images/placeholder_passage.png')
  wallTexture = PIXI.Texture.fromImage('static/images/placeholder_wall.png')
  playerTexture = PIXI.Texture.fromImage('static/images/placeholder_note.png')
  bossTexture = PIXI.Texture.fromImage('static/images/placeholder_boss.png')
  treasureTexture = PIXI.Texture.fromImage('static/images/placeholder_treasure.png')
}

loadMap = () => {
  $.ajax({
    url: '/gen_map',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function (xhr) {
      setMap(xhr.grid);
    },
    error: function(xhr) {
      alert('nuh');
      console.log(xhr);
    }
  });
}

// Load tile textures
function setMap(mapDataArg){
  mapData = mapDataArg;
}

function renderMap() {
  // Create map container that contains tiles
  overworldMapContainer = new PIXI.Container();
  // Add container to stage
  app.stage.addChild(overworldMapContainer);
  // Generate map sample data
  tileWidth = 32;
  tileHeight = 32;
  xOff = 310;
  yOff = 170;
  // Popular and render tiles
  for (var y = 0; y < mapData.length; y++) {
    for (var x = 0; x < mapData[y].length; x++){
      // Assign graphic to terrain type
      if(mapData[y][x].type == "path" ){
          var tile = new PIXI.Sprite(passageTexture);
      }
      else if(mapData[y][x].type == "boss" ){
          var tile = new PIXI.Sprite(bossTexture);
      }
      else if(mapData[y][x].type == "treasure" ){
          var tile = new PIXI.Sprite(treasureTexture);
      }
      else if(mapData[y][x].type == "start"){
          mapData[y][x].type = 'path';
          playerLoc = [x, y];
          lookaround();
          if (sprites.mapPlayer == null) {
            var playerSprite = new PIXI.Sprite(playerTexture);
            playerSprite.anchor.set(0.0);
            playerSprite.x = x * tileWidth + xOff;
            playerSprite.y = y * tileHeight + yOff;
            sprites.mapPlayer = playerSprite;
            app.stage.addChild(playerSprite);
          }
          var tile = new PIXI.Sprite(passageTexture);
      }
      else{
          var tile = new PIXI.Sprite(wallTexture);
      }
      // Set anchor to top left corner
      tile.anchor.set(0.0);
      tile.x = x * tileWidth + xOff;
      tile.y = y * tileHeight + yOff;
      tile.visible = mapData[y][x].visible;
      overworldMapContainer.addChild(tile);
    }
  }
  if (sprites.mapPlayer != null) {
    app.stage.addChild(sprites.mapPlayer);
  }
  return overworldMapContainer;
}


function lookaround() {
  let x = playerLoc[0]
  let y = playerLoc[1]
  mapData[y][x].visible = true;
  if (y < mapData.length-1)
    mapData[y+1][x].visible = true;
  if (y >= 1)
    mapData[y-1][x].visible = true;
  if (x < mapData[y].length-1)
    mapData[y][x+1].visible = true;
  if (x >= 1)
    mapData[y][x-1].visible = true;
  renderMap();
}

function move(direction) {
  //console.log("pressed " + direction)
  let x = playerLoc[0]
  let y = playerLoc[1]
  mapData[y][x].visible = true;
  if (direction == 'DOWN' && (y < mapData.length-1) && (mapData[y+1][x].type != 'wall')){
    playerLoc[1] += 1
    sprites.mapPlayer.y +=32;
  }
  if (direction == 'UP' && (y >= 1) && (mapData[y-1][x].type != 'wall')){
    playerLoc[1] -= 1
    sprites.mapPlayer.y -=32;
  }
  if (direction == 'RIGHT' && (x < mapData[y].length-1) && (mapData[y][x+1].type != 'wall')){
    playerLoc[0] += 1
    sprites.mapPlayer.x +=32;
  }
  if (direction == 'LEFT' && (x >= 1) && (mapData[y][x-1].type != 'wall')){
    playerLoc[0] -= 1
    sprites.mapPlayer.x -=32;
  }
  lookaround(playerLoc[0],playerLoc[1]);
  engage();
}

engage = () => {
  if (mapData[playerLoc[1]][playerLoc[0]].type == 'treasure'){
    state = preGame;
  }
  if (mapData[playerLoc[1]][playerLoc[0]].type == 'boss'){
    state = preGame;
  }
}
