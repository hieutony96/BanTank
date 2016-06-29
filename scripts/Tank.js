class Tank{
  // var abc=10;
  constructor(t,u){
    this.sprite = TankOnline.game.add.sprite(t,u,'tankDown');
    TankOnline.game.physics.arcade.enable(this.sprite);
    // toadoX = t;
    // toadoY = u;
  }
  update(directionX, directionY){
    if(directionX < 0){
      this.sprite.body.velocity.x = -150;
      // toadoX-=150;
      this.sprite.loadTexture('tankLeft');
    }
    else if(directionX > 0){
      this.sprite.body.velocity.x = 150;
      // toadoY+=150;
      this.sprite.loadTexture('tankRight');
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    if(directionY < 0 ){
      this.sprite.body.velocity.y = -150;
      // toadoY-=150;
      this.sprite.loadTexture('tankUp');
    }
    else if(directionY > 0){
      this.sprite.body.velocity.y = 150;
      // toadoY+=150;
      this.sprite.loadTexture('tankDown');
    }
    else{
      this.sprite.body.velocity.y = 0;
    }
  } //update
  positionX(){
    return this.sprite.body.position.x;
  }
  positionY(){
    return this.sprite.body.position.y;
  }
}
