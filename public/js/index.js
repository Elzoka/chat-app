var socket = io();
socket.on('connect', function(){
    console.log('Connected to the Server');

    socket.emit('createMessage', {
        from: 'ahmed@darwish.com',
        text: 'Hey there, what are you wearing'
    });
});

socket.on('newMessage', function(message){
    console.log(message);
});

socket.on('disconnect', function(){
    console.log('Disconnected');
});
