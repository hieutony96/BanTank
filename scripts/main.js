var TankOnline = {};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    { preload: preload, create: create, update: update });
}

var tank, tank1;

var preload = function(){
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
}

var create = function(){
  //Ban dau khoi tao
  // tank = TankOnline.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'tankDown');

  tank = new Tank(window.innerWidth/2, window.innerHeight/2);
  tank1 = new Tank(window.innerWidth/2-100, window.innerHeight/2);

  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.game.physics.arcade.enable(tank);

  TankOnline.keyboard = TankOnline.game.input.keyboard;
}

var update = function(){
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)){
    // tank.body.velocity.x = -150;
    directionX = -1;
    // tank.loadTexture('tankLeft');
  }
  else if(TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)){
    // tank.body.velocity.x = 150;
    directionX = 1;
    // tank.loadTexture('tankRight');
  }
  else{
    // tank.body.velocity.x = 0;
    directionX = 0;
  }

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)){
    // tank.body.velocity.y = -150;
    directionY = -1;
    // tank.loadTexture('tankUp');
  }
  else if(TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)){
    // tank.body.velocity.y = 150;
    directionY = 1;
    // tank.loadTexture('tankDown');
  }
  else{
    // tank.body.velocity.y = 0;
    directionY = 0;
  }
  tank.update(directionX, directionY);
  tank1.update(directionX, directionY);
}
