setupMap = () => {
  var passageTexture = PIXI.Texture.fromImage('static/images/placeholder_wall.png')
  var wallTexture = PIXI.Texture.fromImage('static/images/placeholder_passage.png')
  loadMap(passageTexture, wallTexture);
}

loadMap = (passageTexture, wallTexture) => {
$.ajax({
  url: '/gen_map',
  type: 'post',
  dataType: 'json',
  contentType: 'application/json',
  success: function (xhr) {
    console.log(xhr)
    buildMap({passageTexture:passageTexture, wallTexture:wallTexture, mapData:xhr.grid})
  },
  error: function(xhr) {
    alert('nuh');
    console.log(xhr);
  }
});
}

// Load tile textures
function buildMap(mapStuff){
  mapData = mapStuff.mapData;
  // Create map container that contains tiles
  var overworldMapContainer = new PIXI.Container();
  // Add container to stage
  app.stage.addChild(overworldMapContainer);
  // Generate map sample data
  var tileWidth = 32;
  var tileHeight = 32;
  // Popular and render tiles
  for (var y = 0; y < mapData.length; y++) {
    for (var x = 0; x < mapData[y].length; x++){
      // Assign graphic to terrain type
      if(mapData[y][x].type == "wall"){
          var tile = new PIXI.Sprite(mapStuff.wallTexture);
      }
      if(mapData[y][x].type != "wall"){
          var tile = new PIXI.Sprite(mapStuff.passageTexture);
      }
      // Set anchor to top left corner
      tile.anchor.set(0.0);
      tile.x = x * tileWidth;
      tile.y = y * tileHeight;
      overworldMapContainer.addChild(tile);
    }
  }
  return overworldMapContainer;
}
