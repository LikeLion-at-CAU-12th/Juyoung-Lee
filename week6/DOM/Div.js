import DOM from "./DOM.js"

class Div extends DOM{
    constructor(innerText, className){
        super('div', innerText, className);
    }
}

export default Div;

//왜 디브랑 버튼을 만들고 있는거지? -> 줄이 디브 그 안에 디브 하나 버튼 두개/그래서 돔으로 시작해서 디브랑 돔 만드는것