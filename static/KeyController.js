//Capture the keyboard arrow keys
let q = keyboard(81),
  w = keyboard(87),
  e = keyboard(69),
  r = keyboard(82),
  enter = keyboard(13),
  left = keyboard(37),
  up = keyboard(38),
  right = keyboard(39),
  down = keyboard(40);

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
}

handleTitlePress = (letter) => {
  if (!['ENTER'].includes(letter)){
    return;
  }
  setup = true;
  state = overworldScreen;
}

handleTitleRelease = () => {
}

bindOverworldKeys = () => {
  handlePress = handleOverworldPress;
}

handleOverworldPress = (letter) => {
  if (!['ENTER', 'UP', 'DOWN', 'LEFT', 'RIGHT'].includes(letter)){
    return;
  }
  if (['UP', 'DOWN', 'LEFT', 'RIGHT'].includes(letter)){
    move(letter)
  }
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
      // console.log("hit");
      monsterLifeHit();
      comboUp();
    }
    else {
      // console.log("miss");
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

enter.release = () => {};

up.press = () => {
  handlePress('UP');
};
down.press = () => {
  handlePress('DOWN');
};
left.press = () => {
  handlePress('LEFT');
};
right.press = () => {
  handlePress('RIGHT');
};

function bindPlayerControls(){
  left.press = () => {
    if(sprites.player.x == 130 ){
    } else {
      sprites.player.x -= 120;
    }
  };
  up.press = () => {
    if(sprites.player.y == 700 ){
    } else {
      sprites.player.y -= 150;
    }
  };
  right.press = () => {
    //Change the cat's velocity when the key is pressed
    if(sprites.player.x == 490 ){
    } else {
      sprites.player.x += 120;
    }
  };
  down.press = () => {
    if(sprites.player.y == 400){
    } else {
      sprites.player.y += 150;
    }
  };
}

function unBindPlayerControls(){
  up.press = () => {
    handlePress('UP');
  };
  down.press = () => {
    handlePress('DOWN');
  };
  left.press = () => {
    handlePress('LEFT');
  };
  right.press = () => {
    handlePress('RIGHT');
  };
}
