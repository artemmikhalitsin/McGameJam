const sprites = {};
const grid = {};

//This `setup` function will run when the image has loaded
function gridSetup() {
  var gridTexture = PIXI.Texture.fromImage('static/images/test1.png')
  var keyCapsTexture = PIXI.Texture.fromImage('static/images/KeyCaps.png')


  //KeyCaps row
  sprites.keyQ = new PIXI.Sprite(keyCapsTexture);
  sprites.keyQ.x =50;
  sprites.keyQ.y = 700;
  sprites.keyQ.visible = false;
  sprites.keyQ.click = false;


  sprites.keyW = new PIXI.Sprite(keyCapsTexture);
  sprites.keyW.x = 150;
  sprites.keyW.y = 700;
  sprites.keyW.visible = false;
  sprites.keyW.click = false;

  sprites.keyE = new PIXI.Sprite(keyCapsTexture);
  sprites.keyE.x = 250;
  sprites.keyE.y = 700;
  sprites.keyE.visible = false;
  sprites.keyE.click = false;

  sprites.keyR = new PIXI.Sprite(keyCapsTexture);
  sprites.keyR.x = 350;
  sprites.keyR.y = 700;
  sprites.keyR.visible = false;
  sprites.keyR.click = false;

  //Player sprite//Grid top row
  sprites.player = new PIXI.Sprite(gridTexture);
  sprites.player.x = 250;
  sprites.player.y = 500;

  //Grid top row
  grid.g00 = new PIXI.Sprite(gridTexture);
  grid.g00.x = 50;
  grid.g00.y = 400;

  grid.g10 = new PIXI.Sprite(gridTexture);
  grid.g10.x = 150;
  grid.g10.y = 400;

  grid.g20 = new PIXI.Sprite(gridTexture);
  grid.g20.x = 250;
  grid.g20.y = 400;

  grid.g30 = new PIXI.Sprite(gridTexture);
  grid.g30.x = 350;
  grid.g30.y = 400;

  //Grid middle row
  grid.g01 = new PIXI.Sprite(gridTexture);
  grid.g01.x = 50;
  grid.g01.y = 500;

  grid.g11 = new PIXI.Sprite(gridTexture);
  grid.g11.x = 150;
  grid.g11.y = 500;

  grid.g21 = new PIXI.Sprite(gridTexture);
  grid.g21.x = 250;
  grid.g21.y = 500;

  grid.g31 = new PIXI.Sprite(gridTexture);
  grid.g31.x = 350;
  grid.g31.y = 500;

  //Grid bottom row
  grid.g02 = new PIXI.Sprite(gridTexture);
  grid.g02.x = 50;
  grid.g02.y = 600;

  grid.g12 = new PIXI.Sprite(gridTexture);
  grid.g12.x = 150;
  grid.g12.y = 600;

  grid.g22 = new PIXI.Sprite(gridTexture);
  grid.g22.x = 250;
  grid.g22.y = 600;

  grid.g32 = new PIXI.Sprite(gridTexture);
  grid.g32.x = 350;
  grid.g32.y = 600;


  //Add the KeyCaps to the stage
  app.stage.addChild(sprites.keyQ);
  app.stage.addChild(sprites.keyW);
  app.stage.addChild(sprites.keyE);
  app.stage.addChild(sprites.keyR);

  //Add player to the stage
  app.stage.addChild(sprites.player);

  //Capture the keyboard arrow keys
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = () => {
      //Change the cat's velocity when the key is pressed
      if(sprites.player.x == 50 ){
      }
      else {
      //  for (let i = 0; i< 1000; i++)
        sprites.player.x -= 100;
      }
    };

    //Left arrow key `release` method
    left.release = () => {


    };

    //Up
    up.press = () => {
      if(sprites.player.y == 400 ){
      }
      else {
        sprites.player.y -=100;
      }
    };
    up.release = () => {

    };

    //Right
    right.press = () => {
      //Change the cat's velocity when the key is pressed
      if(sprites.player.x == 350 ){
      }
      else {
        sprites.player.x += 100;
      }
    };

    right.release = () => {
    };

    //Down
    down.press = () => {
      if(sprites.player.y ==600 ){
      }
      else {
        sprites.player.y += 100;
      }
    };
    down.release = () => {

    };
    //Capture the keyboard arrow keys
      let q = keyboard(81),
          w = keyboard(87),
          e = keyboard(69),
          r = keyboard(82);

      //Left arrow key `press` method
      q.press = () => {
        //Change the cat's velocity when the key is pressed
        sprites.keyQ.visible = true;
        sprites.keyQ.click = true;

      };

      //Left arrow key `release` method
      q.release = () => {
        sprites.keyQ.visible = false;

      };

      //Left arrow key `press` method
      w.press = () => {
        //Change the cat's velocity when the key is pressed
        sprites.keyW.visible = true;
        sprites.keyW.click = true;
      };

      //Left arrow key `release` method
      w.release = () => {
        sprites.keyW.visible = false;
      };

      //Left arrow key `press` method
      e.press = () => {
        //Change the cat's velocity when the key is pressed
        sprites.keyE.visible = true;
        sprites.keyE.click = true;
      };

      //Left arrow key `release` method
      e.release = () => {
        sprites.keyE.visible = false;
      };

      //Left arrow key `press` method
      r.press = () => {
        //Change the cat's velocity when the key is pressed
        sprites.keyR.visible = true;
        sprites.keyR.click = true;
      };

      //Left arrow key `release` method
      r.release = () => {
        sprites.keyR.visible = false;
      };

  }
