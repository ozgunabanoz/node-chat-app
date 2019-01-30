const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    console.log('new user connected');

    socket.emit('newEmail', {

        from: 'mike@example.com',
        text: 'ayoo',
        createdAt: 124

    });

    socket.on('createMessage', (newMsg) => {

        console.log(newMsg);

    });

    socket.emit('newMessage', {

        from: 'ozgun',
        text: 'yarrak yemisin sen',
        createdAt: new Date().getTime()

    });

    socket.on('disconnect', () => {

        console.log('user disconnected');

    });

});

server.listen(port, () => {

    console.log(`server started up at port ${port}`);

});