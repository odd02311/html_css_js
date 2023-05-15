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