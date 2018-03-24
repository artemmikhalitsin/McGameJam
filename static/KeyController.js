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
  sprites.keyQ.visible = true;
  handle('Q');
};

q.release = () => {
  sprites.keyQ.visible = false;
};

w.press = () => {
  sprites.keyW.visible = true;
  handle('W');
};

w.release = () => {
  sprites.keyW.visible = false;
};

e.press = () => {
  sprites.keyE.visible = true;
  handle('E');
};

e.release = () => {
  sprites.keyE.visible = false;
};

r.press = () => {
  sprites.keyR.visible = true;
  handle('R');
};

r.release = () => {
  sprites.keyR.visible = false;
};
