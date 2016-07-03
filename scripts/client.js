class Client{
  constructor(){
    this.socket = io();
    this.location = new Phaser.Point(1,2);
    this.socket.on('connected', function(position){
      // this.location = new Phaser.Point(x,y);
      TankOnline.createTank(position);
      console.log('Vi tri x cua Tank : ' + position.x);
      console.log('Vi tri y cua Tank : ' + position.y);
    });
    // console.log('Vi tri y cua Tank : ' + this.location.y);
  }
  
}
