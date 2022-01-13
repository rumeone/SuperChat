
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
           contentWindow.innerHTML += `<div>• ${item}</div>`;
       });
    });
};
addUserToModalWindow();

const closeModalWindow = () => {
    const modalWindow = document.querySelector(".modalWindowList");
    const closeWindow = document.querySelector(".closeButton");

    closeWindow.addEventListener("click", (e) => {
        e.preventDefault();
            modalWindow.classList.remove("modal_active");
            console.log(e);
            e.stopPropagation();
    })
};

closeModalWindow();