// 문43	함수를 7을 넣어 호출하기			<<< 요넘
// 	또 다른 문43 함수를 하나 더 호출하면서 이 함수의 매개변수에 위 함수(바로 윗행 함수)를 넣기			
// 	위 결과를 출력하기			



function fx_example1(x){
    var result = x + 1;
    return result;
}

var y = fx_example1(7);

console.log(y);

var a = fx_example1(fx_example1(7));

console.log(a);



// function fx_example1(x){
//     var result = x + 1;

//     return result;
// }

// // fx_example1(7);


// var d = fx_example1(7);

// var x = fx_example1(d);

// document.write(x);
