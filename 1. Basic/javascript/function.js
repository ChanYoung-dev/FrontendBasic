// function
// function은 object 타입이다.
printHello();
//Hello
//printHi();
//Uncaught ReferenceError: Cannot access 'printHi' before initialization
//기본
function printHello() {
    console.log('Hello');
}


printHello();

//배열 파라미터
//Rest parameters(added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++)
        console.log(args[i]);

    for (const arg of args)
        console.log(arg);

    args.forEach((arg) => console.log(arg));
    // 위 세개는 같은 출력이다.
}
printAll('I', 'Like', 'Minsoo');

//function expression와 function declartion 차이
//expression
//함수 이름을 작성하지 않는다.
const printHi = function () {
    console.log('hi');
};
printHi();
const printAgain = printHi;
printAgain();

//declaration
// ex) printHello
//declaration은 함수 어디든가 선언만 되있으면 선언전 줄이어도 오류가 없다.
function printHello() {
    console.log('Hello');
}

//3번째줄부터 6번째 줄을 보면 차이를 확인할 수 있다.



//Callback function using function expression
function isMinsoo(answer, printYes, printNo) {
    if (answer === 'minsoo')
        printYes();
    else
        printNo();
    //print(); 같은뜻

}

const printYes = function () {
    console.log('yes!');
};

const printNo = function print() {
    console.log('no!');
    //print() 재귀함수
};
//printYes와 printNo가 다른 점 : 함수이름이 선언돼있나
// 함수이름을 써놓으면 재귀함수도 가능하다.
isMinsoo('minsoo', printYes, printNo);
isMinsoo('chan', printYes, printNo);

//Arrow function
//always anonymous
const simpleF = function () {
    console.log('Arrow F');
};
// 위는 아래와 같다.
const arrowF = () => console.log('Arrow F');

const simpleF2 = function (a, b) {
    return a + b;
}
//위는 아래와 같다.
const arrowF2 = (a, b) => a + b;

const MultiF = (a, b) => {
    //do something more
    return a * b;
}