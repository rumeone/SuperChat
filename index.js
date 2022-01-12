const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

const port = 3000;
let users = []; // так же создаем массив


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

    socket.on('connect user', (userName) => {
        users.push(userName.userConnect);
        console.log(users);
        io.emit("users", users); // событие пользователи
        io.emit('connect user', { // событие подключенние к сессии
            name: userName.userConnect,
        });
    });

    socket.on('disconnect', () => {
        console.log("a user disconnect");
    });
})

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});