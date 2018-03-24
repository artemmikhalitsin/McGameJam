class Note {
  constructor(noteTexture, x, y, speed){
    this.sprite = new PIXI.Sprite(noteTexture.noteTexture);
    this.speed = speed;
    this.sprite.anchor.set(0.5);
    app.stage.addChild(this.sprite);
    this.sprite.x = x;
    this.sprite.y = y;
    this.update = (delta) => this.sprite.y += speed*delta;
  }
}

function setupNote(){
  var noteTexture = PIXI.Texture.fromImage('static/images/placeholder_note.png')
  return {noteTexture:noteTexture}
}

function spawnNote(noteTexture, x, y, speed) {
  var note = new PIXI.Sprite(noteTexture.noteTexture)
  note.speed = speed;
  note.anchor.set(0.5);
  app.stage.addChild(note);
  note.x = x; // app.screen.width / 2;
  note.y = y; // app.screen.height / 2;
  return delta => {note.y++}
}

function deleteNote(){

}
