//Capture the keyboard arrow keys
let q = keyboard(81),
  w = keyboard(87),
  e = keyboard(69),
  r = keyboard(82),
  enter = keyboard(13);

keys = {}
handlePress = ()=>{}
handleRelease = ()=>{}

bindRhythmKeys = () => {
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
  bindPlayerControls();
}

bindTitleKeys = () => {
  handlePress = handleTitlePress;
  handleRelease = handleTitleRelease;
  unbindPlayerControls();
}

handleTitlePress = (letter) => {
  if (!['ENTER'].includes(letter)){
    return;
  }
  state = overworldScreen;
}

handleTitleRelease = () => {
}

bindOverworldKeys = () => {
  handlePress = handleOverworldPress;
  handleRelease = handleOverworldRelease;
  unbindPlayerControls();
}

handleOverworldPress = (letter) => {
  if (!['ENTER'].includes(letter)){
    return;
  }
  state = preGame;
}

handleOverworldRelease = () => {
}

handleRhythmPress = (letter) => {
  if (!['Q','W','E','R'].includes(letter)){
    return;
  }
    keys[letter].key.visible = false;
    keys[letter].keyPress.visible = true;
    if(MM.handleCollision(letter)){
      console.log("hit");
      monsterLife--;
      currentCombo++;
    }
    else {
      console.log("miss");
      currentCombo = 0;
      lifeHit();
    }
}
handleRhythmRelease = (letter) => {
  if (!['Q','W','E','R'].includes(letter)){
    return;
  }
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

enter.press = () => {
  handlePress('ENTER');
};

enter.release = () => {

};
