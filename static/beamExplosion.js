// BEGIN mystery code o0o0o0o0o -- particles
class beamExplosion{
  constructor(hostX, hostY, decayTime) {
    const numParticles = 25;
    this.beamBox = new PIXI.particles.ParticleContainer(10000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true
    });
    app.stage.addChild(this.beamBox);
    this.beams = [];
    this.decayTime = decayTime;

    for (let i = 0; i < Math.floor(numParticles); i++) {
      var shape = new PIXI.Graphics();

      // create a new Sprite
      shape.lineStyle(0);
      // shape.beginFill(colour, 1.0);
      shape.beginFill(0xFFBB00,
        0.6+0.2*Math.random());
      shape.drawRect(0, 0, 3, 30+0*Math.random());
      shape.endFill();

      // let q = new PIXI.autoDetectRenderer(window.innerWidth,
      // window.innerHeight, { transparent: true });
      // Turn shape into texture, and then use to make sprite
      var beam = new PIXI.Sprite(app.renderer.generateTexture(shape));

      // spark.tint = Math.random() * 0xFFFFFF;
      beam.anchor.set(1,1);
      beam.scale.set(0.5 + 1.5*Math.random());

      // Position
      beam.x = hostX;
      beam.y = hostY;
      // Velocity
      beam.direction = Math.PI*( 0.25 + 0.5*Math.random());
      beam.speed = 1.0*(1.0 + 1.0*Math.random());

      this.beams.push(beam);
      this.beamBox.addChild(beam);
    }

    app.ticker.add((delta) => this.update(delta));
  }

  update(delta){
    let extinct = true;
    for (let i = 0; i < this.beams.length; i++) {
      this.beams[i].x += 0.5 *this.beams[i].speed * Math.cos(this.beams[i].direction) * delta;
      this.beams[i].y += -3.0 * this.beams[i].speed * Math.sin(this.beams[i].direction) * delta;
      this.beams[i].alpha -= 0.4*delta/this.decayTime;
      if (this.beams[i].alpha > 0){
        extinct = false;
      }
    }
    if (extinct){
      delete(this);
    }
  }
}
