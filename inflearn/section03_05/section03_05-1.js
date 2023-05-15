var num1 = 5;
var num2 = 3;

var char1 = "가짜";
var char2 = "사나이";

document.write(num1 + num2 , "<br>");
document.write(char1 + " " + char2 , "<br>");


var name = "그랩";
var isFool = true;
var num = 100;

document.write((num >= 100),  "<br>");

document.write((name == "그랩"),  "<br>");

document.write((name == "민수"), "<br>")

document.write((name !== "민수"), "<br>")

// 부정 연산자 !

var nope = false;

document.write((nope),  "<br>")
document.write((!nope),  "<br>")
document.write((!!nope),  "<br>")

// 논리 연산자 &&(and), ||(or), !(not)

var name = "그랩";
var age = 27;

document.write((name == "그랩") && (age > 25), "<br>");

document.write((name !== "그랩") && (age > 25), "<br>");

document.write((name == "그랩") && (age > 30),  "<br>");

document.write((name == "그랩") || (age > 30), "<br>");

document.write((name !== "그랩") || (age > 30), "<br>");