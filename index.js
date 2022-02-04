const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3000;
let id = 0;
let users = {};

app.use(express.static(__dirname));

app.get('/', (request, response ) => {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => { // событие "сообщение чата"
        io.emit('chat message', {
            message: msg.message,
            name: msg.name
        });
    });
    if(users[socket.id] !== undefined)
        return;
    socket.on('setUserName', (userName) => {
        users[socket.id] = {
            name: userName.userConnect,
            id: id++};
        console.log(users);
        io.emit("users", users);
        io.emit('setUserName', {
            name: userName.userConnect,
        });
    });
    socket.on('disconnect', () => {
        socket.removeAllListeners();
        users[socket.id] = undefined;
        delete users[socket.id];
        io.emit('users', users);
        console.log(users);
    });
});
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});