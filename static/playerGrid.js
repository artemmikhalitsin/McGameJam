//This `setup` function will run when the image has loaded
function gridSetup() {
  var gridTexture = PIXI.Texture.fromImage('static/images/test1.png')
  var keyCapsTexture = PIXI.Texture.fromImage('static/images/KeyCaps.png')

  //KeyCaps row
  let keyQ = new PIXI.Sprite(keyCapsTexture);
  keyQ.x = 50;
  keyQ.y = 700;

  let keyW = new PIXI.Sprite(keyCapsTexture);
  keyW.x = 150;
  keyW.y = 700;

  let keyE = new PIXI.Sprite(keyCapsTexture);
  keyE.x = 250;
  keyE.y = 700;

  let keyR = new PIXI.Sprite(keyCapsTexture);
  keyR.x = 350;
  keyR.y = 700;

  //Grid top row
  let g00 = new PIXI.Sprite(gridTexture);
  g00.x = 50;
  g00.y = 400;

  let g10 = new PIXI.Sprite(gridTexture);
  g10.x = 150;
  g10.y = 400;

  let g20 = new PIXI.Sprite(gridTexture);
  g20.x = 250;
  g20.y = 400;

  let g30 = new PIXI.Sprite(gridTexture);
  g30.x = 350;
  g30.y = 400;

  //Grid middle row
  let g01 = new PIXI.Sprite(gridTexture);
  g01.x = 50;
  g01.y = 500;

  let g11 = new PIXI.Sprite(gridTexture);
  g11.x = 150;
  g11.y = 500;

  let g21 = new PIXI.Sprite(gridTexture);
  g21.x = 250;
  g21.y = 500;

  let g31 = new PIXI.Sprite(gridTexture);
  g31.x = 350;
  g31.y = 500;

  //Grid bottom row
  let g02 = new PIXI.Sprite(gridTexture);
  g02.x = 50;
  g02.y = 600;

  let g12 = new PIXI.Sprite(gridTexture);
  g12.x = 150;
  g12.y = 600;

  let g22 = new PIXI.Sprite(gridTexture);
  g22.x = 250;
  g22.y = 600;

  let g32 = new PIXI.Sprite(gridTexture);
  g32.x = 350;
  g32.y = 600;


  //Add the KeyCaps to the stage
  app.stage.addChild(keyQ);
  app.stage.addChild(keyW);
  app.stage.addChild(keyE);
  app.stage.addChild(keyR);

  //Add the grid top row to the stage
  app.stage.addChild(g00);
  app.stage.addChild(g10);
  app.stage.addChild(g20);
  app.stage.addChild(g30);

  //Add the grid middle row to the stage
  app.stage.addChild(g01);
  app.stage.addChild(g11);
  app.stage.addChild(g21);
  app.stage.addChild(g31);

  //Add the grid bottom row to the stage
  app.stage.addChild(g02);
  app.stage.addChild(g12);
  app.stage.addChild(g22);
  app.stage.addChild(g32);

  playerGrid = [[g00, g10, g20, g30], [g01, g11, g21, g31], [g02, g12, g22 , g32]];
  for (let i = 0; i < 3; i++){
    for (let j = 0; j < 4; j++){
      console.log(i + " , " + j);
      playerGrid[i][j].visible = false;
    }
  }

  let posX = 2;
  let posY = 1;
  playerGrid[posY][posX].visible = true;


  //Capture the keyboard arrow keys
    let left = keyboard(37),
        up = keyboard(38),
        right = keyboard(39),
        down = keyboard(40);

    //Left arrow key `press` method
    left.press = () => {
      //Change the cat's velocity when the key is pressed
      if(posX ==0 ){
        console.log ("x = -1");
      }
      else {
        playerGrid[posY][posX].visible = false;
        posX--;
        playerGrid[posY][posX].visible = true;
      }
    };

    //Left arrow key `release` method
    left.release = () => {


    };

    //Up
    up.press = () => {
      if(posY ==0 ){
        console.log ("y = -1");
      }
      else {
        playerGrid[posY][posX].visible = false;
        posY--;
        playerGrid[posY][posX].visible = true;
      }
    };
    up.release = () => {

    };

    //Right
    right.press = () => {
      //Change the cat's velocity when the key is pressed
      if(posX ==3 ){
        console.log ("x = 4");
      }
      else {
        playerGrid[posY][posX].visible = false;
        posX++;
        playerGrid[posY][posX].visible = true;
      }
    };

    right.release = () => {
    };

    //Down
    down.press = () => {
      if(posY ==2 ){
        console.log ("y = 3");
      }
      else {
        playerGrid[posY][posX].visible = false;
        posY++;
        playerGrid[posY][posX].visible = true;
      }
    };
    down.release = () => {

    };
  }
