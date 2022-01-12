/*const onlineList = document.querySelector(".online_list");
const modalWindow = document.querySelector(".modalWindowList");*/

/*onlineList.addEventListener("click", () => {

})*/

const openModalWindow = () => {
    const onlineList = document.querySelector(".onlineUser");
    const modalWindow = document.querySelector(".modalWindowList");
    if (!onlineList || !modalWindow)
        return;
    onlineList.addEventListener("click", (e) => {
        e.preventDefault();
        modalWindow.classList.add("modal_active");
    });

};

openModalWindow();

const addUserToModalWindow = () => {
    const contentWindow = document.querySelector(".usersList");
    socket.on('users', (users) => {
       users.forEach((item) => {
           contentWindow.innerHTML += `${item}` + '\n';
       });
    });
}
addUserToModalWindow();