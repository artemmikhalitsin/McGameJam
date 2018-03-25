//Capture the keyboard arrow keys
let q = keyboard(81),
  w = keyboard(87),
  e = keyboard(69),
  r = keyboard(82);

keys = {}
handlePress = ()=>{}
handleRelease = ()=>{}

bindKeys = () => {
  keys = {
    'Q':{
      'key':sprites.keyQ,
      'keyPress':sprites.keyQPress
    },
    'W':{
      'key':sprites.keyW,
      'keyPress':sprites.keyWPress
    },
    'E':{
      'key':sprites.keyE,
      'keyPress':sprites.keyEPress
    },
    'R':{
      'key':sprites.keyR,
      'keyPress':sprites.keyRPress
    },
  }
  handlePress = handleRhythmPress;
  handleRelease = handleRhythmRelease;
}

handleRhythmPress = (letter) => {
  keys[letter].key.visible = false;
  keys[letter].keyPress.visible = true;
  if(MM.handleCollision(letter)){
    console.log("hit");
  }
  else {
    console.log("miss");
    lifeHit();
  }
}

handleRhythmRelease = (letter) => {
  keys[letter].key.visible = true;
  keys[letter].keyPress.visible = false;
}

q.press = () => {
  handlePress('Q');
};

q.release = () => {
  handleRelease('Q');
};

w.press = () => {
  handlePress('W');
};

w.release = () => {
  handleRelease('W');
};

e.press = () => {
  handlePress('E');
};

e.release = () => {
  handleRelease('E');
};

r.press = () => {
  handlePress('R');
};

r.release = () => {
  handleRelease('R');
};
