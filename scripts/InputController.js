class InputController{
  constructor(keyboard, tank){
    this.keyboard = keyboard;
    this.tank = tank;
    this.lastShotTime = TankOnline.game.time.now;
  }

  update(){
    if(this.tank.sprite.alive){
      var direction = new Phaser.Point();
      if(this.keyboard.isDown(Phaser.KeyCode.LEFT)) direction.x = -1;
      else if (this.keyboard.isDown(Phaser.KeyCode.RIGHT)) direction.x = 1;
      else direction.x = 0;

      if(this.keyboard.isDown(Phaser.KeyCode.UP)) direction.y = -1;
      else if (this.keyboard.isDown(Phaser.KeyCode.DOWN)) direction.y = 1;
      else direction.y = 0;

      this.tank.update(direction);
      TankOnline.client.sendUpdate(this.tank.sprite.id, direction, this.tank.sprite.position);
      if(this.keyboard.isDown(Phaser.KeyCode.SPACEBAR)
          && TankOnline.game.time.now - this.lastShotTime > 200){
        this.lastShotTime = TankOnline.game.time.now;
        this.fire();
        TankOnline.client.sendBullet(this.tank.sprite.id);
      }
    }
    else TankOnline.client.sendDied(this.tank.sprite.id);
  }


  fire(){
    new Bullet(this.tank);
  }
}
