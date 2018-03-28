const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket)=> {
    console.log('New user is connected');

    socket.emit('newMessage', {
        from: 'mahmoud@elzoka.com',
        text: 'Hey There',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log(message);
    });
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});

server.listen(port, ()=> {
    console.log(`The server  is up on port ${port}`);
});
