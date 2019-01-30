const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {

    console.log('new user connected');

    socket.emit('newMessage', generateMessage('admin', 'welcome'));

    socket.broadcast.emit('newMessage', generateMessage('admin', 'new user has joined'));

    socket.on('createMessage', (newMsg) => {

        console.log(newMsg);

        io.emit('newMessage', generateMessage(newMsg.from, newMsg.text));

        // socket.broadcast.emit('newMessage', { // to broadcast the message across all users but the sender itself

        //     from: newMsg.from,
        //     text: newMsg.text,
        //     createdAt: new Date().getTime()

        // });

    });

    socket.on('disconnect', () => {

        console.log('user disconnected');

    });

});

server.listen(port, () => {

    console.log(`server started up at port ${port}`);

});