var TankOnline = {
  map : [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    { preload: preload, create: create, update: update });
}

var tank;
var wallGroup, enemyGroup, allyGroup;
var preload = function(){
  TankOnline.game.load.image('tankDown', './images/tank_player1_down_c0_t1_s1.png');
  TankOnline.game.load.image('tankUp', './images/tank_player1_up_c0_t1_s1.png');
  TankOnline.game.load.image('tankLeft', './images/tank_player1_left_c0_t1_s1.png');
  TankOnline.game.load.image('tankRight', './images/tank_player1_right_c0_t1_s1.png');

  TankOnline.game.load.image('bulletDown', './images/bullet_down.png');
  TankOnline.game.load.image('bulletUp', './images/bullet_up.png');
  TankOnline.game.load.image('bulletLeft', './images/bullet_left.png');
  TankOnline.game.load.image('bulletRight', './images/bullet_right.png');

  TankOnline.game.load.image('wall', './images/wall_steel.png');


}

var create = function(){
  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.keyboard = TankOnline.game.input.keyboard;

  wallGroup = TankOnline.game.add.physicsGroup();
  enemyGroup = TankOnline.game.add.physicsGroup();
  allyGroup = TankOnline.game.add.physicsGroup();
  TankOnline.bulletAllyGroup = TankOnline.game.add.physicsGroup();
  TankOnline.bulletEnemyGroup = TankOnline.game.add.physicsGroup();
  tank = new Tank(window.innerWidth/2, window.innerHeight/2, allyGroup);
  enemyTank = new Tank(window.innerWidth/2, window.innerHeight/2, enemyGroup);
  // for(var i=0; i<10; i++){
  //   new Tank(Math.random()+TankOnline.game.world.bounds.width,
  //           Math.random()+TankOnline.game.world.bounds.height,
  //           enemyGroup);
  // }
  TankOnline.game.camera.follow(tank.sprite);
  TankOnline.game.world.setBounds(0,0,1500,800);

  //camera theo xe tang
  for(var i=0; i<TankOnline.map.length; i++){
    for(var j=0; j<TankOnline.map[i].length; j++){
      //TODO create all walls here
      if(TankOnline.map[i][j])
        new Wall(j*16, i*16, wallGroup);
    }
  }

}
var onAllyBulletHitWall = function(bulletSprite){
  bulletSprite.kill();
}
var onEnemyBulletHitWall = function(bulletSprite){
  bulletSprite.kill();
}
var onBulletHitEnemy = function(bulletSprite, enemySprite){
  enemySprite.damage(bulletSprite.bulletDamage);
  bulletSprite.kill();
}
// var onEnemyBulletHitAlly = function(bulletSprite, enemySprite){
//   enemySprite.damage(bulletSprite.bulletDamage);
//   bulletSprite.kill();
// }




var update = function(){
  //Khong cho va cham
  TankOnline.game.physics.arcade.collide(tank.sprite, wallGroup);
  TankOnline.game.physics.arcade.collide(enemyTank.sprite, wallGroup);
  TankOnline.game.physics.arcade.overlap(TankOnline.bulletAllyGroup, wallGroup,
                                        onAllyBulletHitWall, null, this);
  TankOnline.game.physics.arcade.overlap(TankOnline.bulletEnemyGroup, wallGroup,
                                        onEnemyBulletHitWall, null, this);
  TankOnline.game.physics.arcade.overlap(TankOnline.bulletAllyGroup, enemyGroup,
                                        onBulletHitEnemy, null, this);
  TankOnline.game.physics.arcade.overlap(TankOnline.bulletEnemyGroup, allyGroup,
                                        onBulletHitEnemy, null, this);
  // TankOnline.game.physics.arcade.overlap(TankOnline.bulletEnemyGroup, allyGroup,
  //                                       onBulletHitAlly, null, this);
  //c.call la loi khi truyen thieu null
  //Truyen vao ham onBulletHitWall, this dang sau, ve sau khi trong ham onHit..
  //this la cai this do

  var direction = new Phaser.Point();
  var enemyDirection = new Phaser.Point();
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.A)) direction.x = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.D)) direction.x = 1;
  else direction.x = 0;

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.W)) direction.y = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.S)) direction.y = 1;
  else direction.y = 0;

  //EnemyTank KeyCode
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.LEFT)) enemyDirection.x = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.RIGHT)) enemyDirection.x = 1;
  else enemyDirection.x = 0;

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.UP)) enemyDirection.y = -1;
  else if (TankOnline.keyboard.isDown(Phaser.KeyCode.DOWN)) enemyDirection.y = 1;
  else enemyDirection.y = 0;

  tank.update(direction);
  enemyTank.update(enemyDirection);

  if(TankOnline.keyboard.isDown(Phaser.KeyCode.SPACEBAR)){
    tank.fire(TankOnline.bulletAllyGroup);
  }
  if(TankOnline.keyboard.isDown(Phaser.KeyCode.SHIFT)){
    enemyTank.fire(TankOnline.bulletEnemyGroup);
  }

}
