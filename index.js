toDoItems = [];

let span = document.querySelector("#createdBy");
span.innerHTML= "Aplicación creada por Emiliano"

class ToDo {
    constructor(description) {
        this.description = description;
        this.complete = false;
    }
    completeToDo() {
        this.complete = true;
    }
}

function buildToDo(todo, index) {
    let toDoShell = document.createElement('div');
    toDoShell.setAttribute("class","toDoShell");
    let toDoText = document.createElement('span');
    toDoText.innerHTML= todo.description;
    toDoText.setAttribute("id", index);
    if(todo.complete === true){
      toDoText.setAttribute('class','completeText');
      toDoShell.classList.add('complete');
      
    };
    toDoShell.appendChild(toDoText);
    toDoText.addEventListener("click", completeToDo);
    return toDoShell;
}

function buildToDos(toDos) {
    let array=toDos.map(buildToDo);
    return array;
}

function displayToDos() {
    let toDoContainer = document.querySelector('#toDoContainer');
    toDoContainer.innerHTML= "";
    let build = buildToDos(toDoItems);
    for(let i = 0; i<build.length; i++){
      toDoContainer.appendChild(build[i]);
    }
    
}

function addToDo() {
    let input = document.querySelector('#toDoInput');
    let toDo = new ToDo(input.value);
    toDoItems.push(toDo);
    input.value = '';
    displayToDos();
}


document.querySelector('#addButton').addEventListener('click', addToDo);

function completeToDo(event) {
    const index = event.target.id;
    toDoItems[index].completeToDo();
    displayToDos();
}
