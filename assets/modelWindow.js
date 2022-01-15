
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
        for (let user of Object.values(users)) {
            contentWindow.innerHTML += `<div>• ${user.name}</div>`;
        }
    });
};
addUserToModalWindow();

const closeModalWindow = () => {
    const modalWindow = document.querySelector(".modalWindowList");
    const closeWindow = document.querySelector(".closeButton");

    closeWindow.addEventListener("click", (e) => {
        e.preventDefault();
        modalWindow.classList.remove("modal_active");
        e.stopPropagation();
    })
};

closeModalWindow();