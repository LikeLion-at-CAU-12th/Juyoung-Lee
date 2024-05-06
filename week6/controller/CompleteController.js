import Todo from "../DOM/Todo.js";
import Comdo from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(comdo){ 
        this.newcomdo = new Comdo(comdo);
       
        this.delBtnNode = this.newcomdo.getDelBtn();
        this.retrunBtnNode = this.newcomdo.getRetrunBtn();
        this.innerNode = this.newcomdo.getInnerText();

        this.comdo = comdo;

         
        this.delBtnNode.addEventListener('click', ()=>{
            this.delcomdo();
        });
        this.retrunBtnNode.addEventListener('click', ()=>{
            this.returncomdo();
        });
    }

    addcomdo(){ //todo에서 완료시 해당 task가 com에 붙여지기 
        const comList = document.getElementById("complete-list");
        const input = document.querySelector('input');
        
        comList.appendChild(this.newcomdo.addRow());
        input.value = ''; //모든 처리가 완료되면 다시 따옴표로 초기화
    }

    delcomdo() { //delBtn 클릭시 시행될 메서드
        const ComList = document.getElementById("complete-list");
        ComList.removeChild(this.newcomdo.getRow());

    }

    returncomdo() { //doneBtn 클릭시 시행될 메서드(미완 클릭 시 Todo영역으로 보내기)
        
        this.TodoController = new TodoController(this.comdo);
        this.TodoController.addTodo();

        this.delcomdo();

        }
    

}

export default CompleteController;