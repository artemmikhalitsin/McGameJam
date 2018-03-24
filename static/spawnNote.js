class Note {
  constructor(noteTexture, x, y, speed){
    this.sprite = new PIXI.Sprite(noteTexture);
    this.speed = speed;
    this.sprite.anchor.set(0.5);
    app.stage.addChild(this.sprite);
    this.sprite.x = x;
    this.sprite.y = y;
    // this.update = (delta) => this.sprite.y += speed*delta;
  }
}

// function setupNote(){
//   var noteTexture = PIXI.Texture.fromImage('static/images/placeholder_note.png')
//   return {noteTexture:noteTexture}
// }

// function spawnNote(noteTexture, x, y, speed) {
//   var note = new PIXI.Sprite(noteTexture.noteTexture)
//   note.speed = speed;
//   note.anchor.set(0.5);
//   app.stage.addChild(note);
//   note.x = x; // app.screen.width / 2;
//   note.y = y; // app.screen.height / 2;
//   return delta => {note.y++}
// }

// function deleteNote(){
//
// }

class musicManager{
  constructor() {
    this.allNotes = [];
    this.active = [];
    this.noteTexture = PIXI.Texture.fromImage('static/images/placeholder_note.png')
  }

  // Push note by lane
  pushNoteLane(lane, speed){
    var x;
    switch (lane) {
      case 'Q':
        x = 50;
        break;
      case 'W':
        x = 50+100;
        break;
      case 'E':
        x = 50+200;
        break;
      case 'R':
        x = 50+300;
        break;
      default:
        console.error('Yo your lane does not exist. Relinquish your property!');
        return
    }
    this.allNotes.push(
      new Note (this.noteTexture, x, -this.noteTexture.height, speed))
    this.active.push(true);
  }

  // Push note by coordinate
  pushNoteCoord(x, y, speed) {
    this.allNotes.push(new Note (this.noteTexture, x, y, speed))
    this.active.push(true);
  }

  update(delta){
    // Update note position
    for (let i = 0; i < this.allNotes.length; i++){
      this.allNotes[i].sprite.y += this.allNotes[i].speed*delta;
    }
    // console.log('Notes updated')
  }

  // gameLoop(delta) {
  //   this.updateNotes(delta);
  // }

  handleCollision(lane) {
    var x_l, x_r;
    // Fudge factor "close enough" for position detection
    const epsilon = 10;
    // Find lane coordinates
    switch (lane) {
      case 'Q':
        x_l = 50 - epsilon;
        x_r = 100 + epsilon;
        break;
      case 'W':
        x_l = 50+100 - epsilon;
        x_r = 100+100 + epsilon;
        break;
      case 'E':
        x_l = 50+200 - epsilon;
        x_r = 100+200 + epsilon;
        break;
      case 'R':
        x_l = 50+300 - epsilon;
        x_r = 100+300 + epsilon;
        break;
      default:
        console.error('Invalid lane in MusicManager! Identify yourself!');
    }
    // Default: miss
    var successHit = false;
    // Bbox

    console.log(x_l)
    // Find first note to collide
    for (let i = 0; i < this.allNotes.length; i++){
      console.log(this.allNotes[i].sprite.x)
      if(x_l < this.allNotes[i].sprite.x &&
        this.allNotes[i].sprite.x < x_r &&
        690 < this.allNotes[i].sprite.y &&
        this.allNotes[i].sprite.y < 710){
          // Found hit!
          successHit = true;
          this.allNotes[i].sprite.visible = false;
          this.active[i] = false;
      }
    }

    return successHit;
  }

  handleBoundary(yBoundary){
    var numberEscapedBoundary = 0;

    for (let i = 0; i < this.allNotes.length; i++){
      if (this.allNotes[i].sprite.y > yBoundary &&
        this.active[i]){
          numberEscapedBoundary++;
          this.allNotes[i].sprite.visible = false;
          this.active[i] = false;
      }
    }
    return numberEscapedBoundary;
  }

  handleCrash(playerX, playerY){
    var collision = false;
    for (let i = 0; i < this.allNotes.length; i++){
      if (this.active[i] &&
        playerX == this.allNotes[i].sprite.x &&
        playerY - 5 < this.allNotes[i].sprite.y &&
        playerY + 5 > this.allNotes[i].sprite.y){
          collision = true;
          this.allNotes[i].sprite.visible = false;
          this.active[i] = false;
      }
    }
    return collision;
  }
}
