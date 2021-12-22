const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3000;

let arrayUser = [];

app.use(express.static(__dirname));

app.get('/', (request, response ) => {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', {
            message: msg.message,
            name: msg.name
        })
    });

    socket.on('connect user', (userName) => {
        arrayUser.push(userName);
        io.emit('connect user', {
            name: userName.nameConnect
        })
    });

    socket.on('disconnect', () => {
        console.log("a user disconnect");
    });
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
