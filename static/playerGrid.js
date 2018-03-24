const sprites = {};
const grid = {};

//This `setup` function will run when the image has loaded
function gridSetup() {
  var gridTexture = PIXI.Texture.fromImage('static/images/test1.png')
  var keyCapsTexture = PIXI.Texture.fromImage('static/images/KeyCaps.png')
  var hendrixTexture = PIXI.Texture.fromImage('static/images/Hendrix.png')
  var background1Texture = PIXI.Texture.fromImage('static/images/background1.png')

  background1 = new PIXI.Sprite(background1Texture);
  background1.x = 0;
  background1.y = 0;

  hendrix = new PIXI.Sprite(hendrixTexture);
  hendrix.x = 700;
  hendrix.y = 50;
  hendrix.height = 400;
  hendrix.width = 300;

  //KeyCaps row
  sprites.keyQ = new PIXI.Sprite(keyCapsTexture);
  sprites.keyQ.x =130;
  sprites.keyQ.y = 600;
  sprites.keyQ.visible = false;
  sprites.keyQ.click = false;


  sprites.keyW = new PIXI.Sprite(keyCapsTexture);
  sprites.keyW.x = 250;
  sprites.keyW.y = 600;
  sprites.keyW.visible = false;
  sprites.keyW.click = false;

  sprites.keyE = new PIXI.Sprite(keyCapsTexture);
  sprites.keyE.x = 370;
  sprites.keyE.y = 600;
  sprites.keyE.visible = false;
  sprites.keyE.click = false;

  sprites.keyR = new PIXI.Sprite(keyCapsTexture);
  sprites.keyR.x = 490;
  sprites.keyR.y = 600;
  sprites.keyR.visible = false;
  sprites.keyR.click = false;

  //Player sprite//Grid top row
  sprites.player = new PIXI.Sprite(gridTexture);
  sprites.player.x = 370;
  sprites.player.y = 400;

  app.stage.addChild(background1);

  //Add the KeyCaps to the stage
  app.stage.addChild(sprites.keyQ);
  app.stage.addChild(sprites.keyW);
  app.stage.addChild(sprites.keyE);
  app.stage.addChild(sprites.keyR);

  //Add player to the stage
  app.stage.addChild(sprites.player);

  app.stage.addChild(hendrix);
}
