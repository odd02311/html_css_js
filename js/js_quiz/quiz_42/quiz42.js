// 100을 리턴하는 함수 만들기

// 200을 리턴하는 함수 

// 숫자 둘을 매개변수로 받아서 이 둘을 더하여
// 그 결과를 리턴하는 함수 만들기

// 3 함수의 첫번째 매개변수에 1번 함수(실행문)를 넣고
// 두번째 매개변수에 2번 함수(실행문)를 넣은다음
// 3 함수가 실행되서 리턴되는 값을 출력하기

function fx_example1(){
    return 100;
}

var fx_ex1 = fx_example1();

console.log(fx_ex1);

function fx_example2(){
    return 200;
}

function fx_example3(x, y){
    var result = x + y;
    return result;
}

fx_example3(1, 6);

var fx3_result = fx_example3(1, 6);

console.log(fx3_result);


// 함수 실행
var y = fx_example3( fx_example1(), fx_example2() );

document.write(y);

console.log(y); // 300 fx_example1 return 값 100, fx_exmaple2 return 값 200
// fx_example3 함수 (매개변수) x = 100, y = 200
// var result = 100 + 200;
// return 300;