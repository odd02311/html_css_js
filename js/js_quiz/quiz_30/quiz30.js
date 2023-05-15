var c = Math.floor(Math.random() * 3) + 1;

var p;

//검사
while(true){
    p = prompt("가위, 바위, 보 중 하나를 적어주세요");
    if(p == "가위" || p == "바위" || p == "보"){
        break;
    } else{
        //todo
        //경고
        alert("올바른 입력값이 아닙니다. 재입력 해주세요");
    }
}


var c = "";

if (c == 1) {
    c = "가위";
}
if (c == 2) {
    c = "바위";
}
if (c == 3) {
    c = "보";
}

dw("유저:" + p);
br();
dw("컴:" + c);
br();

var result;

switch(p){
    case "가위":
        switch(c){
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
        switch(c){
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
        switch(c) {
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
