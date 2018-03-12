var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){

  var loginUsers = [];

  // ログイン処理
  socket.on('login', function(userInfo){
    console.log(userInfo.userID);
    console.log(userInfo.userName);
    loginUsers[userInfo.userID] = userInfo.userName;
  });

  // メッセージ送信処理
  socket.on('chat message', function(msg){
    userName = loginUsers[socket.id];
    io.emit('chat message', {
      userName: userName,
      message: msg
    });
  });
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});
