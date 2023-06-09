// 반복문

// 반복문 기본 문법:
// 첫번째 구문: 처음 변수를 선언
// 두번째 구문: 해당 연산 결과가 false가 될 때까지 짠 코드를 반복
// 세번째 구문: i 를 1씩 증가시키는 구문 (증가식)

// 기본 반복문
// 첫번째 변수를 선언한 후
// 두번째 조건이 false가 되기 전까지 코드를 실행해라
// 세번째 i++는 i를 1씩 더해라

for(var i=0; i<10; i++){
    console.log("안녕 인프런") // 총 10번 호출
}

// for문에서 사용되는 변수 i는 안에서 사용이 가능.
// 보통 안에 코드가 실행 될 때 몇 번째 호출되고 있는지 알기 위해 사용

for(var k=0; k<5; k++){
    var text = (k+1) + "번째 호출입니다"
    console.log(text);
}

// Array(배열)을 활용한 반복문
var names = ["민수", "철수", "그랩"];

// array 안에 있는 요소들을 전부 조회할때

for(var i = 0; i < names.length; i++){
    var name = names[i];
    console.log(name);
}

// 배열의 값들을 순차적으로 조회 하기 위해 반복문을 많이 사용
// 이 때 배열을 반복시키는 함수로 forEach 와 map이 있음
