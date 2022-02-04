const FORM = document.querySelector(".FORM");
const INPUT = document.querySelector(".CHECK");


FORM.addEventListener('submit', (Event) => {
    Event.preventDefault();
    if (INPUT.value) {
        let name = INPUT.value;
        localStorage.setItem("name", name);
        Event.target.reset();
    }
});

const redirect = ()=> {
    window.location = 'client/chat.html'
}