//Capture the keyboard arrow keys
let q = keyboard(81),
  w = keyboard(87),
  e = keyboard(69),
  r = keyboard(82);

handle = (letter) => {
  if(MM.handleCollision(letter)){
    console.log("hit");
  }
  else {
    console.log("miss");
    lifeHit();
  }
}

q.press = () => {
  sprites.keyQ.visible = false;
  sprites.keyQPress.visible = true;
  handle('Q');
};

q.release = () => {
  sprites.keyQPress.visible = false;
  sprites.keyQ.visible = true;
};

w.press = () => {
  sprites.keyW.visible = false;
  sprites.keyWPress.visible = true;
  handle('W');
};

w.release = () => {
  sprites.keyWPress.visible = false;
  sprites.keyW.visible = true;

};

e.press = () => {
  sprites.keyE.visible = false;
  sprites.keyEPress.visible = true;
  handle('E');
};

e.release = () => {
  sprites.keyEPress.visible = false;
  sprites.keyE.visible = true;
};

r.press = () => {
  sprites.keyR.visible = false;
  sprites.keyRPress.visible = true;

  handle('R');
};

r.release = () => {
  sprites.keyRPress.visible = false;
  sprites.keyR.visible = true;
};
