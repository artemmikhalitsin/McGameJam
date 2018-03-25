
//This `setup` function will run when the image has loaded
function tartiniSetup() {
  var gridTexture = PIXI.Texture.fromImage('static/images/test1.png')
  var note1 = PIXI.Texture.fromImage('static/images/note1.png')
  var note1Light = PIXI.Texture.fromImage('static/images/note1Light.png')
  var note2 = PIXI.Texture.fromImage('static/images/note2.png')
  var note2Light = PIXI.Texture.fromImage('static/images/note2Light.png')
  var note3 = PIXI.Texture.fromImage('static/images/note3.png')
  var note3Light = PIXI.Texture.fromImage('static/images/note3Light.png')
  var note4 = PIXI.Texture.fromImage('static/images/note4.png')
  var note4Light = PIXI.Texture.fromImage('static/images/note4Light.png')
  var charTexture = PIXI.Texture.fromImage('static/images/Tartini.png')
  var charTexture1 = PIXI.Texture.fromImage('static/images/Tartini1.png')
  var charTexture2 = PIXI.Texture.fromImage('static/images/Tartini2.png')
  var charTexture3 = PIXI.Texture.fromImage('static/images/Tartini3.png')
  var charTextureH = PIXI.Texture.fromImage('static/images/TartiniDeadH.png')
  var charTextureV = PIXI.Texture.fromImage('static/images/TartiniDeadV.png')
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

  characterH = new PIXI.Sprite(charTextureH);
  characterH.x = 750;
  characterH.y = 25;
  characterH.height = 200;
  characterH.width = 300;
  characterH.visible = false;

  characterV = new PIXI.Sprite(charTextureV);
  characterV.x = 750;
  characterV.y = 25;
  characterV.height = 300;
  characterV.width = 200;
  characterV.visible = false;



  //KeyCaps row
  sprites.keyQ = new PIXI.Sprite(note1);
  sprites.keyQ.x =130;
  sprites.keyQ.y = 600;
  sprites.keyQ.visible = true;


  sprites.keyQPress = new PIXI.Sprite(note1Light);
  sprites.keyQPress.x =130;
  sprites.keyQPress.y = 600;
  sprites.keyQPress.visible = false;



  sprites.keyW = new PIXI.Sprite(note2);
  sprites.keyW.x = 250;
  sprites.keyW.y = 600;
  sprites.keyW.visible = true;


  sprites.keyWPress = new PIXI.Sprite(note2Light);
  sprites.keyWPress.x = 250;
  sprites.keyWPress.y = 600;
  sprites.keyWPress.visible = false;


  sprites.keyE = new PIXI.Sprite(note3);
  sprites.keyE.x = 370;
  sprites.keyE.y = 600;
  sprites.keyE.visible = true;


  sprites.keyEPress = new PIXI.Sprite(note3Light);
  sprites.keyEPress.x = 370;
  sprites.keyEPress.y = 600;
  sprites.keyEPress.visible = false;


  sprites.keyR = new PIXI.Sprite(note4);
  sprites.keyR.x = 490;
  sprites.keyR.y = 600;
  sprites.keyR.visible = true;


  sprites.keyRPress = new PIXI.Sprite(note4Light);
  sprites.keyRPress.x = 490;
  sprites.keyRPress.y = 600;
  sprites.keyRPress.visible = false;


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

  //Add the KeyCaps to the stage
  app.stage.addChild(sprites.keyQPress);
  app.stage.addChild(sprites.keyWPress);
  app.stage.addChild(sprites.keyEPress);
  app.stage.addChild(sprites.keyRPress);
  //Add player to the stage
  app.stage.addChild(sprites.player);

  app.stage.addChild(character1);
  app.stage.addChild(character2);
  app.stage.addChild(character3);
  app.stage.addChild(character4);
  app.stage.addChild(characterH);
  app.stage.addChild(characterV);

  app.stage.addChild(m01);
  app.stage.addChild(m02);
  app.stage.addChild(m03);




  }
