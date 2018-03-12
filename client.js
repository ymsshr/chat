const io = require('socket.io-client');
const socket = io('localhost:3000');

socket.on('connect', () => {
    socket.emit("message", 'send message.');

    socket.on('chat message', (msg) => {
        // io.emit('chat message', msg);
        console.log(`message: ${msg}`);
    });
});
// $(function () {
//   var socket = io();
//   $('form').submit(function(){
//     socket.emit('chat message', $('#m').val());
//     $('#m').val('');
//     return false;
//   });
//   socket.on('chat message', function(msg){
//     $('#messages').append($('<li>').text(msg));
//   });
// });
