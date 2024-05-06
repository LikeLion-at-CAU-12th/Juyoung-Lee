import TodoController from "./controller/TodoController.js";

//인풋을 가져오는 과정
const addBtn = document.getElementById('input');
const input = document.querySelector('input');

addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value);
    todoController.addTodo();
})
//"function(){}" === "() => {}"