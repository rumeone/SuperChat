const FORM = document.querySelector(".FORM");
const INPUT = document.querySelector(".CHECK");


FORM.addEventListener('submit', (Event) => {
    Event.preventDefault();
    if (INPUT.value) {
        console.log(INPUT.value);
        Event.target.reset();
    }
})