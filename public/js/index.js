var socket = io();
socket.on('connect', function(){
    console.log('Connected to the Server');
});

socket.on('newMessage', function(message){
    console.log(message);
    var li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    $('#messages').append(li);
});

socket.on('disconnect', function(){
    console.log('Disconnected');
});

$('#message-form').on('submit', function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'user',
        text: $('[name=message]').val()
    }, function(){

    });
});
