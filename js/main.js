const btns = document.getElementsByClassName('btn');
const tasks = document.getElementsByClassName('task'); 
const formElement = document.querySelector('#new-todo-form');
const inputElement = document.querySelector('#new-list-input');
const newList = document.querySelector('#new-list');
const newDiv = document.getElementsByClassName('list');

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
    let btnElement = document.createElement('button');//新しいbuttonを作った
    let spanElement = document.createElement('span');//新しいspanを作った
    let divElement = document.createElement('div');
    btnElement.classList.add('btn');//buttonクラス作った
    btnElement.textContent = 'DKT'; //DKT入れた
    spanElement.classList.add('task');//spanクラス作った
    spanElement.textContent = inputElement.value; // inputで入れたvalueを入れた
    divElement.classList.add('list'); // divクラス作った
    newList.appendChild(btnElement);//親を作った後でくっつけた(const newList) 
    newList.appendChild(spanElement);
    newList.appendChild(divElement);

    // console.log(inputElement.value);
});
