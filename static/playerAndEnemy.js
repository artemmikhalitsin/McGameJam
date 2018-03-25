
function Player(base_damage, health){
  this.max_health = health;
  this.health = health;
  this.base_damage = base_damage;
  this.bonus = 1; 
  this.damage;
  
  this.get_health = function(){
    console.log(this.health);
    return this.health;
  }
  
  this.take_damage = function(damage){
    this.health = this.health-damage;
    console.log(this.health); 
    if(this.health <= 0){
      console.log("you are dead");
    }
  }
  
  this.calculate_damage= function(){
    this.damage = base_damage*bonus;
    return damage; 
  }
  
  this.gain_health = function(health){ //over heal allowed
    this.health = this.health+health;
    if(this.health > this.max_health)
      this.max_health = this.health; 
    console.log(this.health);
  }
  
  this.gain_bonus = function(){ //bonus if the player successively hits note successfully 
    this.bonus = this.bonus+1; //bonus is incremental. 
  }
  
  this.reset_bonus = function(){ //bonus reset when the player misses a note 
    this.bonus = 1; 
  }
  
  this.health_ratio = function(){ //percentage of health left. useful for graphical display? 
    return this.health/this.max_health;
  }
}

function Enemy(base_damage, health, name){
  this.name = name;
  this.max_health = health;
  this.health = health;
  this.damage = base_damage; 
  
  this.get_name = function(){ //name of the enemy 
    return this.name;
  }
  
  this.take_damage = function(damage){
    this.health = this.health - damage;
    console.log(this.health); 
    if(this.health <= 0){
      console.log(this.name + " is dead, congrats");
    }
  }
  
  this.get_damage = function(){
    return this.damage; 
  }
  
  this.reset_health = function(){ //troll the player 
    this.health = this.max_health;
  }
  
  this.powerup = function(damage){ //if the damage output of the enemy changes
    this.damage = damage;
  }
  
  this.health_ratio = function(){ //percentage of health left. useful for graphical display? 
    return this.health/this.max_health;
  }
}
