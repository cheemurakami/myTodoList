const btns = document.getElementsByClassName('btn');
const tasks = document.getElementsByClassName('task'); 
const formElement = document.querySelector('#new-todo-form');
const inputElement = document.querySelector('#new-list-input');
const newList = document.querySelector('#new-list');
const newDiv = document.getElementsByClassName('list');
const newIcon = document.querySelector('fas fa-trash-alt')

const btnClickHandler = (btn, span) => {
    btn.addEventListener('click', () => {
        if (span.style.textDecoration === ""){ //click何回もできるようにした
            span.style.textDecoration = "line-through"
        } else{
            span.style.textDecoration = ""
        }
    });
}

for (let i = 0; i < tasks.length; i++){
    // btns[i].addEventListener('click', () => {
    //     if (tasks[i].style.textDecoration === ""){ //click何回もできるようにした
    //         tasks[i].style.textDecoration = "line-through"
    //     } else{
    //         tasks[i].style.textDecoration = ""
    //     }
    // });
    btnClickHandler(btns[i], tasks[i]);
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault() //atode
    if(inputElement.value !== ""){
        // console.log(inputElement);
        let btnElement = document.createElement('button');//新しいbuttonを作った
        let spanElement = document.createElement('span');//新しいspanを作った
        let divElement = document.createElement('div');
        let deleteIconElement = document.createElement('i');

        btnElement.classList.add('btn');//buttonクラス作った
        btnElement.textContent = 'DKT'; //DKTmoji入れた
        spanElement.classList.add('task');//spanクラス作った
        spanElement.textContent = ` ${inputElement.value}`; // inputで入れたvalueを入れた
        divElement.classList.add('list'); // divクラス作った
        deleteIconElement.classList.add('fas', 'fa-trash-alt'); //iconクラス作った
        formElement.reset(); //formだけに使える、value入れた後にリセットされて消えるように
    
        newList.appendChild(btnElement);//親を作った後でくっつけた(const newList) 
        newList.appendChild(spanElement);
        newList.appendChild(deleteIconElement);
        newList.appendChild(divElement);

        
        // for (let i = 0; i < tasks.length; i++){
            // btnElement.addEventListener('click', () => {
            //     if (spanElement.style.textDecoration === ""){ //click何回もできるようにした
            //         spanElement.style.textDecoration = "line-through"
            //     } else{
            //         spanElement.style.textDecoration = ""
            //     }
            // });
            btnClickHandler(btnElement, spanElement);
        // console.log(inputElement.value);
    }
});
