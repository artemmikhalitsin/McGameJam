loadView = (name) => {
  loader
  .add("static/images/test1.png")
  .add("static/images/note1.png")
  .add("static/images/note1Light.png")
  .add("static/images/note2.png")
  .add("static/images/note2Light.png")
  .add("static/images/note3.png")
  .add("static/images/note3Light.png")
  .add("static/images/note4.png")
  .add("static/images/note4Light.png");

  //load an image and run the `setup` function when it's done
  if (name == "hendrix"){
    loader
    .add("static/images/Hendrix.png")
    .add("static/images/Hendrix1.png")
    .add("static/images/Hendrix2.png")
    .add("static/images/Hendrix3.png")
    .add("static/images/mc0.png")
    .add("static/images/mc02.png")
    .add("static/images/mc03.png")
    .add("static/images/background1.png")
    .load(hendrixSetup);
  }
  if(name == "zappa"){
    loader
    .add("static/images/Zappa.png")
    .add("static/images/Zappa1.png")
    .add("static/images/Zappa2.png")
    .add("static/images/Zappa3.png")
    .add("static/images/mc0.png")
    .add("static/images/mc02.png")
    .add("static/images/mc03.png")
    .add("static/images/background1.png")
    .load(zappaSetup);
  }

  if(name == "prince"){
    loader
    .add("static/images/Prince.png")
    .add("static/images/Prince1.png")
    .add("static/images/Prince2.png")
    .add("static/images/Prince3.png")
    .add("static/images/mc0.png")
    .add("static/images/mc02.png")
    .add("static/images/mc03.png")
    .add("static/images/background1.png")
    .load(princeSetup);
  }
  if(name == "tartini"){
    loader
    .add("static/images/Tartini.png")
    .add("static/images/Tartini1.png")
    .add("static/images/Tartini2.png")
    .add("static/images/Tartini3.png")
    .add("static/images/TartiniDeadH.png")
    .add("static/images/TartiniDeadV.png")
    .add("static/images/mc0.png")
    .add("static/images/mc02.png")
    .add("static/images/mc03.png")
    .add("static/images/background1.png")
    .load(tartiniSetup);
  }
}
