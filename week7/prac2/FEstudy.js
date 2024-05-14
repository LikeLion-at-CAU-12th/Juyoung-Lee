var x = "global x";
var y = "global y";

function outer() {
    var z = "outer's local z";

    console.log(x); //globalx
    console.log(y); //globaly
    console.log(z); //outer's locals z

    function inner() {
        var x ="inner's local x";

        console.log(x); //inner's local x
        console.log(y); //global y
        console.log(z); //outer's local z
    }
    inner();
}
outer();

console.log(x); //global x
console.log(z); //참조오류


var x = 1;

if(true) {
    var x= 10;
}

console.log(x);


//렉시컬스코프
var x = 1;

function foo() {
    var x = 10;
    bar (); //x=1
}

function bar() {
    console.log(x);
}

foo();
bar();


//즉시 실행 함수
(function () {
    var foo =10;
    //..

} ());

console.log(foo); //참조오류

//네임스페이스
var FE3={};

FE3.name = 'zoo0';

console.log(FE3.name); //zoo0

FE3.person = {
    first: 'zoo0',
    second: 'in'
};

console.log(FE3.person.fist); //zoo0