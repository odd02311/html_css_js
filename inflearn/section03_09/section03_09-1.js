function sayHello(){
    console.log("안녕하세요");
}

const sayHello2 = function(){
    console.log("안녕하세요2");
}

sayHello2();

sayHello();

function calculate(x){
    var result = 3 * x + 5;
    console.log("결과 값은 " + result + "입니다.");
}

calculate(1);

calculate(10);

var getAge = function(name, age){
    console.log(name + "는" + age + "살입니다.");
}

getAge("민수", 35);

getAge("그랩", 27);

// return이라는 표현을 통해서 값은 반할 수 있다.
// 여기서 값은 모든 자료형 그리고 함수 또한 return이 가능

function calculate2(x){
    var result2 = 3 * x + 10;
    console.log("결과 값은 "+ result2 + "입니다.");
    return result2;
    //return은 실행 결과값으로 result를 반환
}

calculate2(1);

var result3 = calculate2(1);

console.log(result3);

function getProfile(name, age){
    return{
        name : name,
        age : age
    }
}

getProfile("래리", 27);

var profile = getProfile("래리", 27);

console.log(profile);

console.log(profile.name);
console.log(profile.age);

// return은 함수를 종료시키는 구문이기도 함
// 함수에서 return을 하게 되면 return 아래에 있는 코드는 실행되지 않음

function sayHello3(){
    console.log("실행");
    return;
    console.log("실행 x");
}

sayHello3();

//함수 안에서 선언된 변수는 밖에서 사용이 불가

// function sayHi(){
//     var name = "그랩";
// }
// console.log(name);


// function example(x){
//     return x * x;
// }

// var ex1 = example(2);

// console.log(ex1);

var name2 = "민수";
function getName(){
    console.log(name2);
}

getName();

// function sayHello(name){
//   함수     함수명 (매개변수)
//}

let msg = "Hello";  // 어디서나 접근 가능한 변수가 전역 변수 (global varable)
console.log("함수 호출 전");
console.log(msg);

function sayHellow(name){
    if(name){
        msg += ', ' + name;
    }
console.log("함수 내부");
    // 지역 변수 (local varable)
    console.log(msg);
}

sayHellow("Mike");
console.log("함수 호출 후");
console.log(msg);

// 전역 변수와 지역 변수

let msg1 = "welcome"; // 전역변수
console.log(msg1)

function tellHello(name){
    let msg1 = "Hello"; // 지역변수: 함수 내부에서 전역변수와 같은 이름이 가능하고
    console.log(msg1 + ' ' + name); // 서로 간섭을 받지않음
}

tellHello("Mike");
console.log(msg1);