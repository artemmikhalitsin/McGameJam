class Note {
  constructor(noteTexture, x, y, speed){
    this.sprite = new PIXI.Sprite(noteTexture);
    this.speed = speed;
    this.sprite.anchor.set(0);
    app.stage.addChild(this.sprite);
    this.sprite.x = x;
    this.sprite.y = y;
    this.f = () => {};
    // this.update = (delta) => this.sprite.y += speed*delta;
  }
}

class musicManager{
  constructor(trackPath, sequenceQWER, bpm, noteSpeed) {
    // WARNING: Note texture needs to be loaded again after a terminate()
    this.noteTexture = PIXI.Texture.fromImage('static/images/placeholder_note.png')
    this.bpm = bpm;
    this.fixedDelay = 1.0;
    // Fixed note speed?
    this.noteSpeed = noteSpeed;
    // Initial drop distance
    this.dropDistance = +this.noteTexture.height - (app.stage.height - 50);
    // Is it really loaded????
    // Load a track
    this.track = PIXI.sound.Sound.from({
      url: trackPath, // 'static/music/Tartini1.midi',
      autoPlay: false,
      loop: true,
      complete: function() {
          console.log('Track over');
      }
    })
    // Parse sequence
    this.sequences = this.parseSequences(sequenceQWER);
    this.allNotes = [];
    this.active = [];
  }

  parseSequences(sequenceQWER){
    let sequences = []
    for (let i = 0; i < sequenceQWER.length; i++){
      sequences[i] = [];
      for (let j in sequenceQWER[i].split('')){
        sequences[i].push(parseInt(sequenceQWER[i][j]))
      }
    }
    return sequences;
  }

  terminate(){
    // Get rid of the notes
    for (let i = 0; i < this.allNotes.length; i++){
      this.allNotes[i].sprite.destroy(true)
    }
    this.allNotes = [];
    app.ticker.remove(this.f);
  }

  // Push note by lane
  pushNoteLane(lane, speed, extraY){
    var x;
    switch (lane) {
      case 'Q':
        x = 130;
        this.noteTexture = PIXI.Texture.fromImage('static/images/note1.png');
        break;
      case 'W':
        x = 250;
        this.noteTexture = PIXI.Texture.fromImage('static/images/note2.png');
        break;
      case 'E':
        x = 370;
        this.noteTexture = PIXI.Texture.fromImage('static/images/note3.png');
        break;
      case 'R':
        x = 490;
        this.noteTexture = PIXI.Texture.fromImage('static/images/note4.png');
        break;
      default:
        console.error('Yo your lane does not exist. Relinquish your property!');
        return
    }
    // Recycle a note of the same lane
    for (let i = 0; i < this.active.length; i++){
      if (!this.active[i] && Math.abs(this.allNotes[i].sprite.x - x) < 1e-1){
        this.allNotes[i].sprite.x = x;
        this.allNotes[i].sprite.y = -this.noteTexture.height+ extraY;
        this.allNotes[i].speed = speed;
        this.active[i] = true;
        this.allNotes[i].sprite.visible = true;
        return;
      }
    }
    this.allNotes.push(
      new Note (this.noteTexture, x, -this.noteTexture.height + extraY, speed))
    this.active.push(true);
  }

  // Push note by coordinate
  pushNoteCoord(x, y, speed) {
    this.allNotes.push(new Note (this.noteTexture, x, y, speed))
    this.active.push(true);
  }

  startTrack(bpm, sequenceQWER, trackPath){
    // Timing
    this.clockTime = -this.fixedDelay;
    this.spawnProgress = this.clockTime;
    this.sequenceIndex = 0;
    this.trackDelayTime = this.dropDistance / this.noteSpeed / 5.0;
    this.trackPlaying = false;
  }

  update(delta){
    // console.log(delta - app.ticker.deltaTime)
    // Update note position
    for (let i = 0; i < this.allNotes.length; i++){
      this.allNotes[i].sprite.y += this.allNotes[i].speed*delta;
    }

    // Update internal clock for timely dispensing [s]
    this.clockTime += delta/60;
    // console.log(this.clockTime/60);
    this.spawnProgress += delta/60;

    const spawnTimer = 60.0/this.bpm;

    // Start playing after the initial drop delay
    if(!this.trackPlaying){
      if (this.clockTime > this.trackDelayTime){
        // Play a track
        this.track.play();
        this.trackPlaying = true;
      }
    }

    // Spawn cycle
    while (this.spawnProgress >= spawnTimer){
      for (let track = 0; track < this.sequences.length; track++){
        if (this.sequences[track][this.sequenceIndex]){
          // Spawn
          const laneMapping = ['Q', 'W', 'E', 'R'];
          this.pushNoteLane(laneMapping[track], this.noteSpeed, (this.spawnProgress - spawnTimer)*this.noteSpeed);
        }
      }
      this.spawnProgress -= spawnTimer;
      this.sequenceIndex++;
      // Make periodic
      this.sequenceIndex = this.sequenceIndex % this.sequences[0].length;
    }

    // // Test random spawn timer
    // if (false){
    //   const randomSpawnTimer = 1.0;
    //   while (this.spawnProgress >= randomSpawnTimer){
    //     // Pick random lane and generate note
    //     const laneMapping = ['Q', 'W', 'E', 'R'];
    //     this.pushNoteLane(laneMapping[Math.floor(4*Math.random())], 3.0);
    //     this.spawnProgress -= randomSpawnTimer;
    //   }
    //   // Spawn random note every second
    //   console.log(this.allNotes.length);
    // }

  }

  // gameLoop(delta) {
  //   this.updateNotes(delta);
  // }

  handleCollision(lane) {
    var x_l, x_r, colour;
    // Fudge factor "close enough" for position detection
    const epsilon = 10;
    // Find lane coordinates
    switch (lane) {
      case 'Q':
        x_l = 130 - epsilon;
        x_r = 215 + epsilon;
        colour = 0xF7E685;
        break;
      case 'W':
        x_l = 250 - epsilon;
        x_r = 335 + epsilon;
        colour = 0xAF2AFA;
        break;
      case 'E':
        x_l = 370 - epsilon;
        x_r = 455 + epsilon;
        colour = 0x6AAE67;
        break;
      case 'R':
        x_l = 490 - epsilon;
        x_r = 575 + epsilon;
        colour = 0x9595DB;
        break;
      default:
        console.error('Invalid lane in MusicManager! Identify yourself!');
    }
    // Default: miss
    var successHit = false;
    // Bbox

    //console.log(x_l)
    // Find first note to collide
    for (let i = 0; i < this.allNotes.length; i++){
      //console.log(this.allNotes[i].sprite.x)
      if(this.active[i] &&
        x_l < this.allNotes[i].sprite.x &&
        this.allNotes[i].sprite.x < x_r &&
        500 < this.allNotes[i].sprite.y &&
        this.allNotes[i].sprite.y < 610){
          // Found hit!
          successHit = true;
          var successSpark = new sparkExplosion(
            this.allNotes[i].sprite.x + 0.5*this.allNotes[i].sprite.width,
            this.allNotes[i].sprite.y,
            1.0, colour, 1.0);
          this.allNotes[i].sprite.visible = false;
          this.active[i] = false;
          break;
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
          // new beamExplosion(this.allNotes[i].sprite.x +
          //   0.5* this.allNotes[i].sprite.width, app.screen.height, 10);
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
        playerY - 50 < this.allNotes[i].sprite.y &&
        playerY + 50 > this.allNotes[i].sprite.y){
          collision = true;
          this.allNotes[i].sprite.visible = false;
          this.active[i] = false;
      }
    }
    return collision;
  }
}
