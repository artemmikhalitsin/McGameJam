
//This `setup` function will run when the image has loaded
function hendrixSetup() {
  var gridTexture = PIXI.Texture.fromImage('static/images/test1.png')
  var keyCapsTexture = PIXI.Texture.fromImage('static/images/KeyCaps.png')
  var charTexture = PIXI.Texture.fromImage('static/images/Hendrix.png')
  var charTexture1 = PIXI.Texture.fromImage('static/images/Hendrix1.png')
  var charTexture2 = PIXI.Texture.fromImage('static/images/Hendrix2.png')
  var charTexture3 = PIXI.Texture.fromImage('static/images/Hendrix3.png')
  var mc1 = PIXI.Texture.fromImage('static/images/mc0.png')
  var mc2 = PIXI.Texture.fromImage('static/images/mc02.png')
  var mc3 = PIXI.Texture.fromImage('static/images/mc03.png')
  var background1Texture = PIXI.Texture.fromImage('static/images/background1.png')

  background1 = new PIXI.Sprite(background1Texture);
  background1.x = 0;
  background1.y = 0;

  m01 = new PIXI.Sprite(mc1);
  m01.x = 800;
  m01.y = 475;
  m01.height = 200;
  m01.width = 100;
  m01.visible = true;

  m02 = new PIXI.Sprite(mc2);
  m02.x = 800;
  m02.y = 475;
  m02.height = 200;
  m02.width = 100;
  m02.visible = false;

  m03 = new PIXI.Sprite(mc3);
  m03.x = 800;
  m03.y = 475;
  m03.height = 200;
  m03.width = 100;
  m03.visible = false;

  character2 = new PIXI.Sprite(charTexture1);
  character2.x = 750;
  character2.y = 25;
  character2.height = 300;
  character2.width = 200;
  character2.visible = false;

  character3 = new PIXI.Sprite(charTexture2);
  character3.x = 750;
  character3.y = 25;
  character3.height = 300;
  character3.width = 200;
  character3.visible = false;

  character4 = new PIXI.Sprite(charTexture3);
  character4.x = 750;
  character4.y = 25;
  character4.height = 300;
  character4.width = 200;
  character4.visible = false;

  character1 = new PIXI.Sprite(charTexture);
  character1.x = 750;
  character1.y = 25;
  character1.height = 300;
  character1.width = 200;
  character1.visible = true;



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

  app.stage.addChild(character1);
  app.stage.addChild(character2);
  app.stage.addChild(character3);
  app.stage.addChild(character4);

  app.stage.addChild(m01);
  app.stage.addChild(m02);
  app.stage.addChild(m03);



  }
