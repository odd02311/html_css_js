var s = prompt("값을 입력하세요 : ");

if(s < 100){
    alert(s + "가 100이하 입니다.")
}

else if(s > 100){
    alert(s + "가 100보다 큽니다")
}

else if(s == 100){
    alert(s + "는 100입니다")
}

else{
    alert("오류입니다. 숫자를 입력해 주세요")
}