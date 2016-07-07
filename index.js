var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static(__dirname));


app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
var players = [];
io.on('connection', function(socket){
  console.log('New User Connected');
  //Tao ra thang moi
  var NewPlayer = {
    id : socket.id,
    x  : Math.random()*3000,
    y  : Math.random()*800,
  }
  //Tao ra thang moi tren ban do
  socket.emit('create', NewPlayer);
  //Chuyen thong tin tat ca ng choi cho ng moi
  socket.emit('sendAllInfoToNewPlayer', players);
  //Chuyen thong tin cua ng moi cho tat ca
  socket.broadcast.emit('sendInfoToAll', NewPlayer);
  players.push(NewPlayer);

  socket.on('tankMoved', function(msg){
    socket.broadcast.emit('sendMovedToAll', msg);
  });

  socket.on('bulletMoved', function(msg){
    socket.broadcast.emit('sendBullet', msg);
  });
  socket.on('tankDied', function(msg){
    socket.broadcast.emit('sendDiedToAll', msg);
  });
});

http.listen(6969, function(){
  console.log('Server started. Listening on *:6969');
});
