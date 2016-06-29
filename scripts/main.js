var TankOnline = {};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    { preload: preload, create: create, update: update });
}

var tank, tank1;
var bullet;
var text;
var bulletdirectionX, bulletdirectionY;
var thefirst=1;
var preload = function(){
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');
  TankOnline.game.load.image('bulletDown', './images/bullet_down.png');
  TankOnline.game.load.image('bulletUp', './images/bullet_up.png');
  TankOnline.game.load.image('bulletLeft', './images/bullet_left.png');
  TankOnline.game.load.image('bulletRight', './images/bullet_right.png');
}

var create = function(){
  //Ban dau khoi tao
  // tank = TankOnline.game.add.sprite(window.innerWidth/2, window.innerHeight/2, 'tankDown');

  tank = new Tank(window.innerWidth/2, window.innerHeight/2);
  // bullet = new Bullet(tank.positionX(),tank.positionY(), 'bulletDown');
  // tank1 = new Tank(window.innerWidth/2-100, window.innerHeight/2);

  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.game.physics.arcade.enable(tank);
  // TankOnline.game.physics.arcade.enable(bullet);
  TankOnline.keyboard = TankOnline.game.input.keyboard;
  bulletdirectionY = 1;
  bulletdirectionX = 0;
  text = TankOnline.game.add.text(window.innerWidth/2, 16, '', { fill: '#ffffff' });

}

var checkBulletMove = false;
var update = function(){
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)){
    // tank.body.velocity.x = -150;
    directionX = -1;
    bulletdirectionX = -1;
    bulletdirectionY = 0;



    // tank.loadTexture('tankLeft');
  }
  else if(TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)){
    // tank.body.velocity.x = 150;
    directionX = 1;
    bulletdirectionX = 1;
    bulletdirectionY = 0;


    // tank.loadTexture('tankRight');
  }
  else{
    // tank.body.velocity.x = 0;
    directionX = 0;
  }

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)){
    // tank.body.velocity.y = -150;
    directionY = -1;
    bulletdirectionY = -1;
    bulletdirectionX = 0;

    // tank.loadTexture('tankUp');
  }
  else if(TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)){
    // tank.body.velocity.y = 150;
    directionY = 1;
    bulletdirectionY = 1;
    bulletdirectionX = 0;
    // tank.loadTexture('tankDown');
  }
  else{
    // tank.body.velocity.y = 0;
    directionY = 0;
  }
  tank.update(directionX, directionY);
  // text.text = TankOnline.game.cache.getImage("bulletDown").height/2;
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.SPACEBAR)){
    if(thefirst==1){
      bullet = new Bullet(tank.positionX(), tank.positionY(), 'bulletDown');
      thefirst=0;
      TankOnline.game.physics.arcade.enable(bullet);
    }

    if(bullet.checkPostion()==true){
      checkBulletMove = false;
      bullet = new Bullet(tank.positionX(), tank.positionY(), 'bulletDown');
    }

    bullet.update(bulletdirectionX, bulletdirectionY, checkBulletMove);
    checkBulletMove=true;
  }
}
