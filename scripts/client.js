class Client{
  constructor(){
    //Luc khoi tao thi phai lam tat ca cac viec ben server gui ve
    this.socket = io();
    this.socket.on('create', function(msg){
      TankOnline.createTank(msg);
    });
    // socket.emit('sendAllInfoToNewPlayer', players);
    this.socket.on('sendAllInfoToNewPlayer', function(msg){
      TankOnline.createEnemyTank(msg);

    });
    this.socket.on('sendInfoToAll', function(msg){
      TankOnline.pushNewPlayer(msg);
    });

    this.socket.on('sendMovedToAll', function(msg){
      TankOnline.updateMoved(msg);
    });
    this.socket.on('sendBullet', function(msg){
      TankOnline.updateBullet(msg);
    });
  }
  sendUpdate(id, direction, position){
    this.socket.emit('tankMoved', {
      id        : id,
      direction : direction,
      position  : position
    });
  }
  sendBullet(id){
    this.socket.emit('bulletMoved', id);
  }
}
