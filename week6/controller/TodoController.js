//todo에 관련 제어할 파일
import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

class TodoController {
    constructor(todo){ 
        this.newTodo = new Todo(todo);
       
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

         //완성.삭제하는 부분에 이벤트 넣기
        this.delBtnNode.addEventListener('click', ()=>{
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', ()=>{
            this.doneTodo();
        });
    }
    addTodo(){ //메서드
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        //줄을 붙이기 전
        //줄을 붙이자
        todoList.appendChild(this.newTodo.addRow());
        input.value = ''; //모든 처리가 완료되면 다시 따옴표로 초기화
    }
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow()); //getrow전체를 리턴
    }
    doneTodo(){ //완성되었을때 //완성을 누르면 열이 삭제되고 com으로 열이 옮겨가기,
        //comcontroller를 사용하여 열 추가되기
        this.CompleteController = new CompleteController(comdo);
        this.CompleteController.addcomdo(); //comcontroller에 있는 addcomdo메서드 실행


        this.delTodo(); //열 삭제

        
        
    }
}

//완성 삭제하는 부분에 이벤트 넣기

export default TodoController;
//app.js에서 해도 되지만 여기서 한번에 작동