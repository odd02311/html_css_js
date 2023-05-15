
// 1. 컴퓨터가 1 ~ 45 수를 6개 뽑아서 출력
// var c1 =Math.floor(Math.random() * 45) + 1
// var c2 =Math.floor(Math.random() * 45) + 1
// var c3 =Math.floor(Math.random() * 45) + 1
// var c4 =Math.floor(Math.random() * 45) + 1
// var c5 =Math.floor(Math.random() * 45) + 1
// var c6 =Math.floor(Math.random() * 45) + 1

// dw(c1 + " ");
// dw(c2 + " ");
// dw(c3 + " ");
// dw(c4 + " ");
// dw(c5 + " ");
// dw(c6 + " ");

let comNumbers = new Set();
userNumbers = new Array();

var i;

// for(i=0; i< userNumbers.length; i++){
//     userNumbers[i] = prompt("Enter Number: (between 1 and 45)")
// }

// 2. 내가 한 게임을 구매했다고 가정하고		

// 컴퓨터의 6개의 숫자랑 내꺼랑 비교해서 몇개가 일치하는 지 세어 출력하기					 ex. 3개 일치	


// // 내 번호들
// var p1 = 1;
// var p2 = 2;
// var p3 = 3;
// var p4 = 4;
// var p5 = 5;
// var p6 = 6;

// // 컴 번호들
// var r1,r2,r3,r4,r5,r6;

// // 랜덤 번호들
// r1 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.
// document.write(r1);
// document.write("<br>");


// ////    앞선 번호들과 비교하여 중복된 번호가 나온 경우 다시 번호를 뽑게 하기(그렇게 해서 나온 번호도 또 검사를 계속 해야함)
// while(true){

//     r2 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

//     if(r1 != r2){   // r2가 r1과 같지 않으면 빠져나감
//         document.write(r2);
//         document.write("<br>");
//         break;
//     }
// }

while(true){
    var userInput = prompt("Enter Number: (between 1 and 45)")
    if(userInput > 0 && userInput < 46){
        userNumbers.push(userInput);
    }
    else{
        alert("다시 입력해주세요")
    }
    if(userNumbers.length == 6){
        break;
    }
}

dw(userNumbers + " 선택하신 로또 번호입니다.");
hr();
// getNumbers() = function(){
//     for(i=0; i<comNumbers.length; i++){
//     comNumbers[i] = Math.floor(Math.random() * 45 + 1);
//     dw(comNumbers[i] + " ");
//     }
// }

while(true){
    var randomNumbers = Math.floor(Math.random() * 45 + 1);
//    dw(randomNumbers + " ");
    comNumbers.add(randomNumbers);
    console.log(comNumbers);
    if(comNumbers.size == 6){
        break;
    }
}

var v = Array.from(comNumbers);

dw(v + " 추첨된 로또번호입니다.");

hr();

// set 자료형을 이용해서 중복체크 하기

// let lo = new Set();

// while(true){
//     lo.add(dice(45));
//     if(lo.size==6){
//         break;
//     }
// }
// var v = Array.from(lo);
// dw(v[0]);
// hr();
// dw(v[1]);
// hr();
// dw(v[2]);
// hr();
// dw(v[3]);
// hr();
// dw(v[4]);
// hr();
// dw(v[5]);
// hr();

var winCount = 0;
for(i=0; i < userNumbers.length; i++){
    for(var j=0; j < v.length; j++){
        if(userNumbers[i] == v[j]){
            dw("하나 당첨");
            hr();
            winCount++;
        }
    }
}

dw("총 당첨된 갯수는 " + winCount + "개입니다.")

hr();

switch(winCount){
    case 0:
    case 1:
    case 2:
        str = "꽝!!! 다음기회에";
        break;
    case 3:
        str = "5등에 당첨되셨습니다.";
        break;
    case 4:
        str = "4등에 당첨되셨습니다.";
        break;
    case 5:
        str = "3등에 당첨되셨습니다.";
        break;
    case 6:
        str = "1등에 당첨되셨습니다.";
        break;        
}
document.write(str);