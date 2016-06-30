class Tank{
  constructor(x, y, tankGroup){
    // this.sprite = TankOnline.game.add.sprite(x, y, 'tankDown');
    this.sprite = tankGroup.create(x, y, 'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    this.sprite.anchor.set(0.5,0.5);
    this.direction = new Phaser.Point(0,1);
    //Dung thoi gian tinh tu bay gio
    this.lastShotTime = TankOnline.game.time.now;
    //K di xuyen vong ben ngoai
    this.sprite.body.collideWorldBounds = true;
    this.sprite.health = 5;
    //set mau, API
  }

  update(direction){
    if(direction.x < 0){
      this.sprite.body.velocity.x = -250;
      this.sprite.loadTexture('tankLeft');
      this.direction = new Phaser.Point(-1,0);
    }
    else if (direction.x > 0){
      this.sprite.body.velocity.x = 250;
      this.sprite.loadTexture('tankRight');
      this.direction = new Phaser.Point(1,0);
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(direction.y < 0){
      this.sprite.body.velocity.y = -250;
      this.sprite.loadTexture('tankUp');
      this.direction = new Phaser.Point(0,-1);
    }
    else if (direction.y > 0){
      this.sprite.body.velocity.y = 250;
      this.sprite.loadTexture('tankDown');
      this.direction = new Phaser.Point(0,1);
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  }

  fire(bulletGroup){
    if(TankOnline.game.time.now - this.lastShotTime > 200 && this.sprite.health!=0){
      this.lastShotTime = TankOnline.game.time.now;
      new Bullet(this, bulletGroup);
    }
    // new Bullet(this);
  }
}
