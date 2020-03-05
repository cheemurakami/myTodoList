const btns = document.getElementsByClassName('btn');
const tasks = document.getElementsByClassName('task'); 
const formElement = document.querySelector('#new-todo-form');
const inputElement = document.querySelector('#new-list');

for (let i = 0; i < tasks.length; i++){
    btns[i].addEventListener('click', () => {
        if (tasks[i].style.textDecoration === ""){ //click何回もできるようにした
            tasks[i].style.textDecoration = "line-through"
        } else{
            tasks[i].style.textDecoration = ""
        }
    });
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault() //atode
    console.log(inputElement.value);
});
