import Button from "./Button.js";
import Div from "./Div.js";
import Img from "./Img.js";

class Todo{
    constructor(todo){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
        this.completeBtn = new Img('완료', 'complete-img');
        this.completeBtn.node.src = "../week6/done.png";
        this.delBtn = new Img('삭제', 'del-img');
        this.delBtn.node.src = "../week6/x.png";
    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    } //get 각각이 로우 버튼 세개 리턴/왜 row제외하고는 node 써야하는지 개념찾기
}

export default Todo;

//별다른걸 상속받지않고 투두 자체를 만듦
//Div 태그 안에 세가지 텍스트/버튼 두개 넣어줌
//인풋벨루 가져와야 -> 복잡해심 컨트롤러 폴더 생성

//세가지 박스를 row에 붙여주는 자겁 addBtn
//배열에서도 객체, 메서드 사용가능 forEach?(괄호 안에 들어오는 것들을 각각 적용해줌)