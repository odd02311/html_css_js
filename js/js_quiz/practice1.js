// confirm("Roll the Dice!");
// prompt("Roll the Dice!");
// document.write("<h4>개!</h4>");
// console.log("고양이");

// var catbox;
// var dogbox;

// catbox = "<strong>길</strong>"+"<strong>고양이 </strong>"+ 2;

// document.write(catbox + "마리");
// document.write("<br>")
// document.write("<hr>")

// alert, confirm, prompt etc... 함수 및 변수 설정

// var r;
// r = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// var s = "\"주사위를 굴려 ( " + r + ")이 나왔습니다.\""
// var s = "주사위를 굴려 (<strong> " + r + "</strong> ) 이 나왔습니다.";
// document.write(s);

// var r;
// r = Math.floor(Math.random() * 100) + 1;
// document.write("주사위(1 ~ 100): " + r);

/*
    제어문
        조건문
            if
            switch
*/

/*
    rule:
    if(조건식) {

    }
*/

/*
    ex):
    var x = 1;
    if(x < 3){

    }
*/

// var x = 1;
// if(x < 3){
//     document.write("고양이");
// }

// var x = Math.floor(Math.random() * 100) + 1;
// document.write(x);
// document.write("<hr>");

// if(x < 3){
//     document.write("고양이");
// }

// switch(x){
//     case 1: 
//         document.write("1임");
//         break;
 
//     case 2: 
//         document.write("2임");

//         break;

//     case 3: 
//         document.write("3임");
//         break;

//     case 4: 
//         document.write("4임");
//         break;

// }

// if (x > 60) {
//     document.write("60보다 큼");
// }

// else if (x >= 50 && x <= 60) {
//     document.write("50 ~ 60 나왔네요 당첨!")
// }

// else {
//     document.write("50보다 작음");
// }

// var a = 1;
// var b = 2;

// if (a != b) {  // If a is not b print 1
//     document.write("1");
// }
// else {
//     document.write("2");
// }

// var a = Math.floor(Math.random() * 100) + 1;
// var b = Math.floor(Math.random() * 100) + 1;


// if(a < b){
//     document.write("b 가 a 보다 큼 ");
//     document.write("A = " + a, " B = " + b)
// }
// else if (a == b) {
//     document.write("b 랑 a 가 같음 ");
//     document.write("A = " + a, " B = " + b)

// }

// else if (a > b){
//     document.write("a가 b 보다 큼 ");
//     document.write("A = " + a, " B = " + b)

// }

// else {
//     document.write("Error");
// }

// var a = 3;
// var b = 1;
// var c = "개";

// and &&

// if(a == 3 && c == "개") {
//     document.write("둘다 만족");
// }

// if(true && c == "개") {
//     document.write("<hr>둘다 만족");
// }

// or ||, !

// if(a == 3 || c != "개"){
//     document.write("a or c is satisfied")
// }
// else{
//     document.write("not satisfied")
// }

// if(a == 3 && a == 3 && a == 3 && a == 3 && b == 2 || c == "개")
//(false || c == "개")
//(false || true)
// {
//     document.write("ok");
// }

// if(a == 3 && b == 1 && (a == 2 || c == "개냥"))
// // true and true and (false or false)
// // 연산자에도 우선순위가 있음
// {
//     document.write("ok")
// }
// else {
//     document.write("no")
// }


// var player = 1;


// switch (player) {
//     case 1 :
//         document.write(1);
//         //...
//         //...
//         break;
//     case 2 :
//         document.write(2);
//         //...
//         //...   
//         break;     
//     case 3 :
//     case 4 :
//         document.write("3이나 4임");
//         //...   
//         //...   
//         break;     
//     case 5 :
//         document.write(2);
//         //...
//         //...   
//         break;
//     default :
//         document.write("디폴트 처리");
//         //...
//         //...         
//         break;
// }

// switch (player) {
//     case "가위": a = 1;
//         break;
//     case "바위": a = 2;
//         break;
//     case "보":  a = 3;
//         break;
// }

// 반복문 for

// for( var i = 1; i < 6; i = i + 1){
//     if( i == 5){break;}
//     else{
//     document.write("고양이");
//     continue;
//     }
// }

// for( var i = 1; i  < 3; i = i + 1){
//     document.write("고양이<hr>");
//     for(var j = 1; j < 4; j = j + 1){
//         document.write("개<hr>");
//     }
// }

// 반복문 while

// var x = 1;

// while(x <= 5){
//     x = x + 1;
//     document.write(x + "<hr>");
//     if(x == 4){
//         break;
//     }
// }

// 함수

// function x() {
//     alert("헬로월드");
// }

// x();

// function a(x = (Math.floor(Math.random() * 10000) + 1), y = (Math.floor(Math.random() * 10000) + 1)) {
//     alert(x+y);
//     document.write(x,"<hr>", y)
// }


// a();

// function a(x, y)
// {
//     var z = x + y;
//     alert(z);
// }

// function b(x, y)
// {
//     var x = (Math.floor(Math.random() * 10000) + 1);
//     var y = (Math.floor(Math.random() * 10000) + 1);
//     document.write(x,"<hr>", y)
//     alert(x * y);
// }
// a(100, 200);
// b();

// 함수 return
/* 
    매개변수를 x,y를 받아서 둘을 더하여
    합계를 반환하는 함수
*/

// function add(x,y){
//     var sum = x + y;
//     return sum + 1;
// }

// var z = add(1,2);
// document.write(z);


//배열

var a = "개";
var b = "고양이";
var c = "너구리";

document.write(a);
dw(a);

// 배열. array. 종합변수. 여러개 값을 한방에 저장함.

var x = [7,8,100,10,200];

var y = ["개", "고양이", "토끼"];

// index 색인.

dw(x[0]);