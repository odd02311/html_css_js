// 가위 바위 보 게임

var computer = Math.floor(Math.random()* 3 + 1);
var player;

while(true){
    player = prompt("가위, 바위, 보 중에 하나를 입력하세요: ");
    if(player == "가위" || player == "바위" || player == "보"){
        break;
    } else{
        alert("올바른 입력값이 아닙니다. 재입력 해주세요")
    }
}

if(computer == 1){
    computer = "가위";
}
else if(computer == 2){
    computer = "바위";
}
else if(computer == 3){
    computer = "보";
}

dw("플레이어:" + player);
hr();
dw("컴퓨터:" + computer)
hr();

var result;

switch(player){
    case "가위":
        switch(computer){
            case "가위":
                result = "비김";
                break;
            case "바위":
                result = "패배"
                break;
            case "보":
                result = "승리";
                break;
        }
        break;
    case "바위":
        switch(computer){
            case "가위":
                result = "승리";
                break;
            case "바위":
                result = "비김";
                break;
            case "보":
                result = "패배";
                break;
        }
    case "보":
        switch(computer) {
            case "가위":
                result = "패배";
                break;
            case "바위":
                result = "승리"
                break;
            case "보":
                result = "비김";
                break;
        }
        break;
}

dw(result);