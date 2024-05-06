/* 1. Js파일에서 접근해야하는 Html Dom 요소를 선언 */

const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

//2. 선언한 DOM 요소에 이벤트 설정//
rockBtn.addEventListener("click", displayMyChoice)
scissorsBtn.addEventListener("click", displayMyChoice)
paperBtn.addEventListener("click", displayMyChoice)

function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

//target 제일 내부 요소-> classname부여//

function getComChoice() {
    const randomValue = {
        0: ["rock", "fa-regular fa-hand-back-fist"],
        1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2: ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3);

    return randomValue[randomIndex];
}

function displayComChoice(result) {
    computerText.innerText = result[0];
    computerIcon.className = result[1];
}

function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);
    displayresult(myChoice, comChoice);
    count();
   
}

//47번째 줄에서 myCoice라는 변수?는 따로 선언 ㄴ?근데 사용 내가 못찾은건가 ->승패에서 ComChoice를 쓰고싶었는데 여기서 고민이었음


//실습1. 페이지 중앙에 승패 표시하기(if사용/)
const result = document.getElementById("display-result"); //html에 잇는 display-result라는 아이디 요소를 가져오려고함

function displayresult(myChoice, comChoice) { //위에서 지정한 displayresult에 마초/컴초 두가지 변수를 이용하여 결과 블록을 만들고자함
    if (myChoice === comChoice ) { //비긴 경우
        result.innerText = 'draw'; 
    }
    else if ((myChoice === "rock" && comChoice === "scissors")||(myChoice === "scissors" && comChoice === "paper") ||(myChoice === "paper" && comChoice === "rock")){
        result.innerText = 'win'; //내가 이긴 경우들을 모두 넣음
    }
    else if ( (myChoice === "rock" && comChoice === "paper")||(myChoice === "scissors" && comChoice === "rock") ||(myChoice === "paper" && comChoice === "scissors")) {
        result.innerText = 'lose';
    } //내가 진 경우
}

// 실습2. 양쪽에 스코어 올라가게 구성(승패에 따라 누적)
let myScore = 0;
let comScore = 0; //나와 컴터의 기본점수를 0으로 뒀다.


const mycount = document.getElementsByClassName("my-score")[0]; //블록 안에서 지역변수?로써 mycount/comcount를 설정함 각 html에서의 id를 가져왔음
const comcount = document.getElementsByClassName("computer-score")[0];

function count() { //count라는 기능을 한 블록안에 설정함
    
    if (result.innerText === "win") {
        myScore += 1;
    } //내가 이겼을때 1점 추가
    else if (result.innerText === "lose") {
        comScore += 1;
    } //내가 졌을때 컴터가 1점 추가
    mycount.innerText = myScore;
    comcount.innerText = comScore;
} 


//실습3. 다른 웹페이지들처럼 스타일요소에 접근하여 컬러를 바꾸는 다크모드 구현하기(공부)
const darkBtn = document.querySelector("#darkmode");
const body = document.querySelector('body');

function modeChange () {
    if(darkBtn.value === "night") {
        body.classList.add("night");
        body.classList.remove("day");
        darkBtn.value = "day";
    } else {
        body.classList.remove("night");
        body.classList.add("day");
        darkBtn.value = "night";

    }
}

darkBtn.addEventListener("click", modeChange);


//새로하기 이벤트 발생시키기

const resetBtn = document.getElementById("reset-button");

resetBtn.addEventListener("click", resetGame)

function resetGame() {
   myScore = 0;
   comScore = 0;
   mycount.innerText = 0;
   comcount.innerText = 0;
   result.innerText = '';
   computerIcon.className = "icon";
   myHandIcon.className = "icon";
   computerText.innerText = "";
   myHandText.innerText = "";

}

//다른분들 깃이랑 노션 다 봤는데 개발자창을 어느지점에서 보는건지 무엇을 확인할 수 있는건지 모르겠음(아마도 태진님?)
//어디서 ,,,왜 ,,,,,사라졌지 ,,,,,,,내 주먹가위보
//나는 const 선언을 각 실습부분에서 했는데 혹시 모두 맨 처음에 const를 해야하나요?JS는 파이썬처럼 한줄씩 실행이 되는 건가요