
//This `setup` function will run when the image has loaded
function gridSetup(number) {
  if (number == enemyEnum['hendrix']){
    var note4Light = PIXI.Texture.fromImage('static/images/note4Light.png')
    var charTexture = PIXI.Texture.fromImage('static/images/Hendrix.png')
    var charTexture1 = PIXI.Texture.fromImage('static/images/Hendrix1.png')
    var charTexture2 = PIXI.Texture.fromImage('static/images/Hendrix2.png')
    var charTexture3 = PIXI.Texture.fromImage('static/images/Hendrix3.png')
    var charTextureH = PIXI.Texture.fromImage('static/images/HendrixH.png')
    var charTextureV = PIXI.Texture.fromImage('static/images/HendrixV.png')
    var aspectRatioV = 1.5;
    var aspectRatioVD = 1.6;
    var aspectRatioH = 0.71;
    var scaleH = 1.0;
  }
  if (number == enemyEnum['zappa']){
    var charTexture = PIXI.Texture.fromImage('static/images/Zappa.png')
    var charTexture1 = PIXI.Texture.fromImage('static/images/Zappa1.png')
    var charTexture2 = PIXI.Texture.fromImage('static/images/Zappa2.png')
    var charTexture3 = PIXI.Texture.fromImage('static/images/Zappa3.png')
    var charTextureV = PIXI.Texture.fromImage('static/images/ZappaV.png')
    var charTextureH = PIXI.Texture.fromImage('static/images/ZappaH.png')
    var aspectRatioV = 1.5;
    var aspectRatioVD = 1.76;
    var aspectRatioH = 0.57;
    var scaleH = 1.0;
  }
  if (number == enemyEnum['prince']){
    var charTexture = PIXI.Texture.fromImage('static/images/Prince.png')
    var charTexture1 = PIXI.Texture.fromImage('static/images/Prince1.png')
    var charTexture2 = PIXI.Texture.fromImage('static/images/Prince2.png')
    var charTexture3 = PIXI.Texture.fromImage('static/images/Prince3.png')
    var charTextureV = PIXI.Texture.fromImage('static/images/PrinceV.png')
    var charTextureH = PIXI.Texture.fromImage('static/images/PrinceH.png')
    var aspectRatioV = 1.2;
    var aspectRatioVD = 1.59;
    var aspectRatioH = 0.62;
    var scaleH = 1.0;
  }
  if (number == enemyEnum['tartini']){
    var charTexture = PIXI.Texture.fromImage('static/images/Tartini.png')
    var charTexture1 = PIXI.Texture.fromImage('static/images/Tartini1.png')
    var charTexture2 = PIXI.Texture.fromImage('static/images/Tartini2.png')
    var charTexture3 = PIXI.Texture.fromImage('static/images/Tartini3.png')
    var charTextureH = PIXI.Texture.fromImage('static/images/TartiniDeadH.png')
    var charTextureV = PIXI.Texture.fromImage('static/images/TartiniDeadV.png')
    var aspectRatioV = 1.36;
    var aspectRatioVD = 1.5;
    var aspectRatioH = 0.61;
    var scaleH = 1.0;
  }
  if (number == enemyEnum['tartinidevil']){
    var charTexture = PIXI.Texture.fromImage('static/images/devil.png')
    var charTexture1 = PIXI.Texture.fromImage('static/images/devil1.png')
    var charTexture2 = PIXI.Texture.fromImage('static/images/devil2.png')
    var charTexture3 = PIXI.Texture.fromImage('static/images/devil3.png')
    var charTextureH = PIXI.Texture.fromImage('static/images/devilH.png')
    var charTextureV = PIXI.Texture.fromImage('static/images/devilV.png')
    var aspectRatioV = 1.22;
    var aspectRatioVD = 1.21;
    var aspectRatioH = 1.33;
    var scaleH = 0.5;
  }

  var tv = PIXI.Texture.fromImage('static/images/MCTV.png')
  var tv1 = PIXI.Texture.fromImage('static/images/MCTV1.png')
  var note1 = PIXI.Texture.fromImage('static/images/note1.png')
  var note1Light = PIXI.Texture.fromImage('static/images/note1Light.png')
  var note2 = PIXI.Texture.fromImage('static/images/note2.png')
  var note2Light = PIXI.Texture.fromImage('static/images/note2Light.png')
  var note3 = PIXI.Texture.fromImage('static/images/note3.png')
  var note3Light = PIXI.Texture.fromImage('static/images/note3Light.png')
  var note4 = PIXI.Texture.fromImage('static/images/note4.png')
  var mc1 = PIXI.Texture.fromImage('static/images/mc0.png')
  var mc2 = PIXI.Texture.fromImage('static/images/mc02.png')
  var mc3 = PIXI.Texture.fromImage('static/images/mc03.png')
  var mcD = PIXI.Texture.fromImage('static/images/mc0D.png')
  var mcH = PIXI.Texture.fromImage('static/images/mc0H.png')
  var background1Texture = PIXI.Texture.fromImage('static/images/background1.png')
  
  var win_tartini1 = PIXI.Texture.fromImage('static/images/win_phase1.png')
  var instruction = PIXI.Texture.fromImage('static/images/instructions1.png')
  var game_over = PIXI.Texture.fromImage('static/images/game_over.png')
  var welcome = PIXI.Texture.fromImage('static/images/welcome_page.png')
  var victory = PIXI.Texture.fromImage('static/images/win.png')
  
  win_phase1 = new PIXI.Sprite(win_tartini1);
  instruct = new PIXI.Sprite(instruction);
  g_over = new PIXI.Sprite(game_over);
  welcome_page = new PIXI.Sprite(welcome);
  game_won = new PIXI.Sprite(victory);
  
  background1 = new PIXI.Sprite(background1Texture);

  m01 = new PIXI.Sprite(mc1);
  m02 = new PIXI.Sprite(mc2);
  m03 = new PIXI.Sprite(mc3);
  m0D = new PIXI.Sprite(mcD);
  m0H = new PIXI.Sprite(mcH);

  character2 = new PIXI.Sprite(charTexture1);
  character3 = new PIXI.Sprite(charTexture2);
  character4 = new PIXI.Sprite(charTexture3);
  character1 = new PIXI.Sprite(charTexture);

  sprites.keyQ = new PIXI.Sprite(note1);
  sprites.keyQPress = new PIXI.Sprite(note1Light);
  sprites.keyW = new PIXI.Sprite(note2);
  sprites.keyWPress = new PIXI.Sprite(note2Light);
  sprites.keyE = new PIXI.Sprite(note3);
  sprites.keyEPress = new PIXI.Sprite(note3Light);
  sprites.keyR = new PIXI.Sprite(note4);
  sprites.keyRPress = new PIXI.Sprite(note4Light);

  sprites.player = new PIXI.Sprite(tv);
  sprites.playerH = new PIXI.Sprite(tv1);
  sprites.playerH.visible = false;


  // background1 = new PIXI.Sprite(background1Texture);
  background1.x = 0;
  background1.y = 0;

  //  m01 = new PIXI.Sprite(mc1);
  m01.x = 850;
  m01.anchor.set(0.5,0.0);
  m01.y = 475;
  m01.height = 200;
  m01.width = 100;
  m01.visible = true;

  // m02 = new PIXI.Sprite(mc2);
  m02.x = 850;
  m02.anchor.set(0.5,0.0);
  m02.y = 475;
  m02.height = 200;
  m02.width = 100;
  m02.visible = false;

  // m03 = new PIXI.Sprite(mc3);
  m03.x = 850;
  m03.anchor.set(0.5,0.0);
  m03.y = 475;
  m03.height = 200;
  m03.width = 100;
  m03.visible = false;

  // m0D = new PIXI.Sprite(mcD);
  m0D.x = 850;
  m0D.anchor.set(0.5,0.0);
  m0D.y = 540;
  m0D.height = 121.1;
  m0D.width = 100;
  m0D.visible = false;

  // m0H = new PIXI.Sprite(mcH);
  m0H.x = 850;
  m0H.anchor.set(0.5,0.0);
  m0H.y = 475;
  m0H.height = 200;
  m0H.width = 200/1.685;
  m0H.visible = false;

  // character1 = new PIXI.Sprite(charTexture);
  character1.x = 850;
  character1.anchor.set(0.5,0.0);
  character1.y = 25;
  character1.height = 300;
  character1.width = character1.height/aspectRatioV;
  character1.visible = false;

  // character2 = new PIXI.Sprite(charTexture1);
  character2.x = 850;
  character2.anchor.set(0.5,0.0);
  character2.y = 25;
  character2.height = 300;
  character2.width = character2.height/aspectRatioV;
  character2.visible = false;

  // character3 = new PIXI.Sprite(charTexture2);
  character3.x = 850;
  character3.anchor.set(0.5,0.0);
  character3.y = 25;
  character3.height = 300;
  character3.width = character3.height/aspectRatioV;
  character3.visible = false;

  // character4 = new PIXI.Sprite(charTexture3);
  character4.x = 850;
  character4.anchor.set(0.5,0.0);
  character4.y = 25;
  character4.height = 300;
  character4.width = character4.height/aspectRatioV;
  character4.visible = false;

  characterV = new PIXI.Sprite(charTextureV);
  characterV.x = 850;
  characterV.anchor.set(0.5,0.0);
  characterV.y = 25;
  characterV.height = 300;
  characterV.width = characterV.height/aspectRatioVD;
  characterV.visible = false;

  characterH = new PIXI.Sprite(charTextureH);
  characterH.x = 850;
  characterH.anchor.set(0.5,0.0);
  characterH.y = 150 - scaleH*60;
  characterH.width = scaleH*300;
  characterH.height = characterH.width*aspectRatioH;
  characterH.visible = false;

  //KeyCaps row
  // sprites.keyQ = new PIXI.Sprite(note1);
  sprites.keyQ.x =130;
  sprites.keyQ.y = 600;
  sprites.keyQ.visible = true;


  // sprites.keyQPress = new PIXI.Sprite(note1Light);
  sprites.keyQPress.x =130;
  sprites.keyQPress.y = 600;
  sprites.keyQPress.visible = false;

  // sprites.keyW = new PIXI.Sprite(note2);
  sprites.keyW.x = 250;
  sprites.keyW.y = 600;
  sprites.keyW.visible = true;


  // sprites.keyWPress = new PIXI.Sprite(note2Light);
  sprites.keyWPress.x = 250;
  sprites.keyWPress.y = 600;
  sprites.keyWPress.visible = false;

  //  sprites.keyE = new PIXI.Sprite(note3);
  sprites.keyE.x = 370;
  sprites.keyE.y = 600;
  sprites.keyE.visible = true;


  // sprites.keyEPress = new PIXI.Sprite(note3Light);
  sprites.keyEPress.x = 370;
  sprites.keyEPress.y = 600;
  sprites.keyEPress.visible = false;


  // sprites.keyR = new PIXI.Sprite(note4);
  sprites.keyR.x = 490;
  sprites.keyR.y = 600;
  sprites.keyR.visible = true;


  //  sprites.keyRPress = new PIXI.Sprite(note4Light);
  sprites.keyRPress.x = 490;
  sprites.keyRPress.y = 600;
  sprites.keyRPress.visible = false;


  //Player sprite//Grid top row
  // sprites.player = new PIXI.Sprite(gridTexture);
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
  app.stage.addChild(sprites.playerH);


  app.stage.addChild(character1);
  app.stage.addChild(character2);
  app.stage.addChild(character3);
  app.stage.addChild(character4);
  app.stage.addChild(characterV);
  app.stage.addChild(characterH);

  app.stage.addChild(m01);
  app.stage.addChild(m02);
  app.stage.addChild(m03);
  app.stage.addChild(m0D);
  app.stage.addChild(m0H);
}

function removeChildren(){
  while(app.stage.children.length > 0){
    var child = app.stage.getChildAt(0);
    currentCombo = 0;
    app.stage.removeChild(child);}
  }
