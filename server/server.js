const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

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

    socket.on('createMessage', (newMsg, callback) => {

        console.log(newMsg);

        io.emit('newMessage', generateMessage(newMsg.from, newMsg.text));
        callback(); // sends validation

    });

    socket.on('createLocationMessage', (coords) => {

        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longtitude));

    });

    socket.on('disconnect', () => {

        console.log('user disconnected');

    });

});

server.listen(port, () => {

    console.log(`server started up at port ${port}`);

});