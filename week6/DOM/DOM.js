class DOM{
    constructor(tagName, innerText, className){
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        if (className) this.node.classList.add(className);
    }
}

export default DOM;

//div.js애서 하기위해
//더블클릭하면 같은 요소들 보여짐