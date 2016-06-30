class Wall{
  constructor(x,y,group){
    //tu dong add physics arcade
    this.sprite = group.create(x,y,'wall');
    this.sprite.body.immovable = true;
  }
}
