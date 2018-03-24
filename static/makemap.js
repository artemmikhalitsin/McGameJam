// Load tile textures
var passageTexture = PIXI.Texture.fromImage('{{url_for('static', filename='images/placeholder_passage.png')}}')
var wallTexture = PIXI.Texture.fromImage('{{url_for('static', filename='images/placeholder_wall.png')}}')
// Create map container that contains tiles
var overworldMapContainer = new PIXI.Container();
// Add container to stage
app.stage.addChild(overworldMapContainer);
// Generate map sample data
mapData = [[0, 0, 0, 0, 0],[0, 0, 0, 0, 0,],[0, 1 ,1, 1, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
var tileWidth = 32;
var tileHeight = 32;
// Popular and render tiles
for (var y = 0; y < mapData.length; y++) {
  for (var x = 0; x < mapData[y].length; x++){
    // Assign graphic to terrain type
    switch (mapData[y][x]){
      case 0:
        var tile = new PIXI.Sprite(wallTexture);
        break;
      case 1:
        var tile = new PIXI.Sprite(passageTexture);
        break;
    }
    // Set anchor to top left corner
    tile.anchor.set(0.0);
    tile.x = x * tileWidth;
    tile.y = y * tileHeight;
    overworldMapContainer.addChild(tile);
  }
}