const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3000;

app.use(express.static(__dirname));

app.get('/', (request, response ) => {
    response.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', {
            message: msg.message,
            name: msg.name
        });
    });

    socket.on('connect user', (userName) => {
        userName.arrayConnect.push(userName.userConnect);
        console.log(arrayUser);
        io.emit('connect user', {
            name: userName.userConnect,
            arrayConnect: arrayUser
        });
    });

    socket.on('disconnect', () => {
        console.log("a user disconnect");
    });
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});
