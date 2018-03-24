// BEGIN mystery code o0o0o0o0o -- particles
class sparkExplosion{
  constructor(hostX, hostY, decayTime, colour, intensityMultiplier) {
    const numParticles = 10;
    this.sparkBox = new PIXI.particles.ParticleContainer(10000, {
      scale: true,
      position: true,
      rotation: true,
      uvs: true,
      alpha: true
    });
    app.stage.addChild(this.sparkBox);
    this.sparks = [];
    this.decayTime = decayTime;

    for (let i = 0; i < Math.floor(intensityMultiplier*numParticles); i++) {
      var shape = new PIXI.Graphics();

      // create a new Sprite
      shape.lineStyle(0);
      shape.beginFill(0xFFFFFF, 0.5);
      shape.drawCircle(0, 0, 10);
      shape.endFill();

      // let q = new PIXI.autoDetectRenderer(window.innerWidth,
      // window.innerHeight, { transparent: true });
      // Turn shape into texture, and then use to make sprite
      var spark = new PIXI.Sprite(app.renderer.generateTexture(shape));

      // spark.tint = Math.random() * 0xFFFFFF;
      spark.anchor.set(0.5);
      spark.scale.set(0.1 + 0.7*Math.random());

      // Position
      spark.x = hostX;
      spark.y = hostY;
      // Velocity
      spark.direction = 2.0*Math.PI*Math.random();
      spark.speed = intensityMultiplier*(2.0 + 2.4*Math.random());

      this.sparks.push(spark);
      this.sparkBox.addChild(spark);
    }

    app.ticker.add((delta) => this.update(delta));
  }

  update(delta){
    for (let i = 0; i < this.sparks.length; i++) {
      this.sparks[i].x += this.sparks[i].speed * Math.cos(this.sparks[i].direction) * delta;
      this.sparks[i].y += this.sparks[i].speed * Math.sin(this.sparks[i].direction) * delta;
      this.sparks[i].alpha -= 0.03*delta/this.decayTime;
    }
  }
}
