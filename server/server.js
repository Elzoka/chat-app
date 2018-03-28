const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

io.on('connection', (socket)=> {
    console.log('New user is connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User joined'));

    socket.on('createMessage', (message, callback) => {
        console.log(message);
        io.emit('newMessage',generateMessage(message.from, message.text));
        callback('this is from the server');
        // socket.broadcast.emit('newMessage' ,generateMessage(message.from, message.text));
    });
    socket.on('disconnect', () => {
        console.log('User Disconnected');
    });
});

server.listen(port, ()=> {
    console.log(`The server  is up on port ${port}`);
});
