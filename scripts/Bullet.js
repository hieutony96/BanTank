class Bullet{
  constructor(x,y){
    this.sprite = TankOnline.game.add.sprite(x, y, 'bulletDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
  }
  update(directionX, directionY, checkBulletMove){
    if(checkBulletMove==false && directionX < 0){
      this.sprite.body.velocity.x = -250;
      this.sprite.loadTexture('bulletLeft');
    }

    if(checkBulletMove==false && directionX > 0){
      this.sprite.body.velocity.x = 250;
      this.sprite.loadTexture('bulletRight');
    }

    if(checkBulletMove==false && directionY < 0){
      this.sprite.body.velocity.y = -250;
      this.sprite.loadTexture('bulletUp');
    }

    if(checkBulletMove==false && directionY > 0){
      this.sprite.body.velocity.y = 250;
      this.sprite.loadTexture('bulletDown');
    }
  }
  positionX(){
    return this.sprite.body.position.x;
  }
  positionY(){
    return this.sprite.body.position.y;
  }
  checkPostion(){
    if(this.sprite.body.position.x<0 || this.sprite.body.position.x>window.innerWidth ||
      this.sprite.body.position.y<0 || this.sprite.body.position.y>window.innerHeight)
        return true;
    return false;
  }

}
