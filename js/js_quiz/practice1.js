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

var x = Math.floor(Math.random() * 100) + 1;
document.write(x);
document.write("<hr>");

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

if (x > 60) {
    document.write("60보다 큼");
}

else if (x >= 50 && x <= 60) {
    document.write("50 ~ 60 나왔네요 당첨!")
}

else {
    document.write("50보다 작음");
}