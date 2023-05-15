//변수 선언과 정의

var name;  //name이라는 변수를 선언한다.
name = "그랩"; //name이라고 선언된 변수에 "그랩"이라는 값을 저장한다.

var name = "그랩"; //합쳐서 이렇게 사용할 수 있어요.

//var, let, const 차이 
//1. var는 같은 이름의 변수를 다시 사용할 수 있어요. 요새는 var를 사용하지 않고 let, const만 사용하는 추세에요.
var num1 = 20;
var num1 = 'Bob';

//2. let은 한번 선언된 변수에 다시 새롭게 선언할 수 없어요. 
let num2 = 20;
num2 = "hello";
// let num2 = 'Bob'; // <- 에러!

//3. const는 선언된 변수에 새로운 값을 정의할 수 없어요. 변수 값이 더이상 변경되지 않도록 할때 사용해요
const num3 = 30;
// num3 = 'Bob'; // <- 에러!

// document.write(num1)

// document.write(num2)

// document.write(num3)

// 변수 자료형

var name = "그랩"; //string

document.write(typeof(name) + "<br>");

var age = 27; //number'

document.write(typeof(age) + "<br>");

var isFool = false; // boolean

document.write(typeof(isFool) + "<br>");

let hello; //undefined

document.write(typeof(hello) + "<br>");

let title = null;

document.write(typeof(title) + "<br>");

// var는 한번 선언된 변수를 다시 선언할 수 있다.

// var name = "Mike";
// console.log(name); // Mike
// var name = "Jane";
// console.log(name); // Jane

// let name = "Mike";
// console.log(name); // Mike
// let name = "Jane"; // error!
// console.log(name); 

// var는 선언하기 전에 사용할 수 있다.

// console.log(name); // undefined
// var name = "Mike";  // 선언하기전에 사용해도 에러를 일으키지 않음

// var name;
// console.log(name); //  undefined
// name = "Mike"; // var로 선언된 모든 변수는 코드가 실제로 이동하진 않지만
// 최상위로 끌려올려진 것 처럼 동작함 (호이스팅-Hoisting)이라고 함
// console은 undefined라고 출력함
// 선언 name 은 var name;에 호이스팅 되지만 "Mike" 할당은 호이스팅 되지않음
// name이라는 변수만 올려지고, "Mike"라는 값은 그대로 있음

// 호이스팅: 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동

