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