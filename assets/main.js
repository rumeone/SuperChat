const socket = io();
const messages = document.querySelector(".messages");
const form = document.querySelector(".form");
const input = document.querySelector(".input");
const nameBlock = document.querySelector(".name");
let userConnect = document.querySelector('.user_connect');

const userName = prompt("Enter your name:");
nameBlock.innerHTML = userName;


socket.emit('setUserName', {
    userConnect: userName, // передаем имя подключенного пользователя
});

socket.on('setUserName', (userName) => {
    const item = document.createElement('div');
    item.innerHTML = `Пользователь <b><span class = "user">${userName.name}</span></b> подключился к чату!`
    userConnect.append(item);
});


form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (input.value) {
        socket.emit("chat message", {
            message: input.value,
            name: userName
        })
        input.value = "";
    }
});


socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${msg.name}</span>: ${msg.message}`;
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
})