var TankOnline = {
  map : [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
}

window.onload = function(){
  TankOnline.game = new Phaser.Game(window.innerWidth,
                                    window.innerHeight,
                                    Phaser.AUTO,
                                    '',
                                    {
                                      preload: preload,
                                      create: create,
                                      update: update
                                    }
                                  );
}

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
  TankOnline.client = new Client();
  TankOnline.game.physics.startSystem(Phaser.Physics.ARCADE);
  TankOnline.keyboard = TankOnline.game.input.keyboard;
  TankOnline.game.stage.disableVisibilityChange = true;

  TankOnline.wallGroup = TankOnline.game.add.physicsGroup();
  TankOnline.bulletGroup = TankOnline.game.add.physicsGroup();
  TankOnline.tankGroup = TankOnline.game.add.physicsGroup();

  TankOnline.enemies = [];
  // var tank = new Tank(TankOnline.client.getLocation().x, TankOnline.client.getLocation().x, tankGroup);
  // var tank = new Tank(window.innerWidth/2, window.innerHeight/2, TankOnline.tankGroup);
  // TankOnline.inputController = new InputController(TankOnline.keyboard, tank);

  TankOnline.game.world.setBounds(0, 0, 3000, 800);


  for(var i=0;i<TankOnline.map.length;i++){
    for(var j=0;j<TankOnline.map[i].length;j++){
      if(TankOnline.map[i][j]){
        new Wall(j*16, i*16, TankOnline.wallGroup);
      }
    }
  }
}

var update = function(){
  TankOnline.game.physics.arcade.collide(TankOnline.tankGroup, TankOnline.wallGroup);
  TankOnline.game.physics.arcade.overlap(
    TankOnline.bulletGroup,
    TankOnline.wallGroup,
    onBulletHitWall,
    null,
    this
  );
  TankOnline.game.physics.arcade.overlap(
    TankOnline.bulletGroup,
    TankOnline.tankGroup,
    onBulletHitTank,
    null,
    this
  );

  if(TankOnline.inputController) TankOnline.inputController.update();
}

var onBulletHitWall = function(bulletSprite, wallSprite){
  bulletSprite.kill();
}

var onBulletHitTank = function(bulletSprite, tankSprite){
  if(bulletSprite.tankSprite != tankSprite){
    //Chỉ check nếu như đấy là tank mình, còn tank khác thì kệ
    if(tankSprite.id == TankOnline.inputController.tank.sprite.id)
      tankSprite.damage(bulletSprite.bulletDamage);
    bulletSprite.kill();
  }
}

TankOnline.createTank = function(data){
  TankOnline.tank = new Tank(data.x, data.y, TankOnline.tankGroup, data.id);
  TankOnline.inputController = new InputController(TankOnline.keyboard, TankOnline.tank);
  TankOnline.game.camera.follow(TankOnline.tank.sprite);
}
TankOnline.createEnemyTank = function(datas){
  for(var i=0; i<datas.length; i++){
    TankOnline.enemies.push(
      new Tank(datas[i].x, datas[i].y, TankOnline.tankGroup, datas[i].id)
    );
  }
}
TankOnline.pushNewPlayer = function(data){
  TankOnline.enemies.push(
    new Tank(data.x, data.y, TankOnline.tankGroup, data.id)
  );
}
TankOnline.updateMoved = function(data){
  for(var i=0; i<TankOnline.enemies.length; i++){
    if(TankOnline.enemies[i].sprite.id == data.id){
      TankOnline.enemies[i].sprite.position = data.position;
      TankOnline.enemies[i].update(data.direction);
      return;
    }
  }
}
TankOnline.updateBullet = function(id){
  for(var i=0; i<TankOnline.enemies.length; i++){
    if(TankOnline.enemies[i].sprite.id == id){
      TankOnline.enemies[i].fire();
      return;
    }
  }
}
TankOnline.updateTank = function(id){
  for(var i=0; i<TankOnline.enemies.length; i++){
    if(TankOnline.enemies[i].sprite.id == id){
      // console.log(id);
      TankOnline.enemies[i].sprite.destroy();
      return;
    }
  }
}
