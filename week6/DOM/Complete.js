import Button from "./Button.js";
import Div from "./Div.js";
import Img from "./Img.js";

class Comdo{
    constructor(comdo){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(comdo, 'text-box');
        this.retrunBtn = new Button('미완', 'return-btn');
        this.retrunBtn.node.src = "../week6/re.png";
        this.delBtn = new Button('삭제', 'del-btn');
        this.delBtn.node.src = "../week6/x.png";
    }
    addRow() {
        [this.textBox, this.retrunBtn, this.delBtn].forEach((dom) => {
          this.row.appendChild(dom.node);
        });
        return this.row;
      }
    getRow(){
        return this.row;
    }
    getRetrunBtn(){
        return this.retrunBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}

export default Comdo;
