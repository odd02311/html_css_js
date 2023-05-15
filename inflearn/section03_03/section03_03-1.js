var array = [];

document.write(array);

var productNames = ['농구공', '축구공'];

document.write(productNames + "<br>");

var productIds = [5, 10];

var booleanArray = [true, false];

document.write(productIds + "<br>")
document.write(booleanArray + "<br>")

// 길이를 확인하는 함수 length

var length = productNames.length

document.write(length + "<br>");
document.write(typeof(length) + "<br>");

// 배열 1번째는 숫자 0부터 시작

var firstValue = productNames[0];
var secondValue = productNames[1];

document.write(firstValue + "<br>");
document.write(secondValue + "<br>");
document.write(productNames[2] + "<br>");

productNames[2] = "골프공";
productNames.push("탁구공"); // 마지막에 "노션 글" 값을 넣는다

document.write(productNames[2] + "<br>");
document.write(productNames + "<br>");


// 객체 (object)
// 객체는 자료들을 key, value 형태로 저장하는 자료형
// {} 안에 key와 value를 순차적으로 넣는다

var product = {
    "name" : "농구공",
    "price" : 50000,
    "description" : "그랩이 사용하는 농구공"
}

document.write(product.description + "<br>");
document.write(product["name"] + "<br>");

product["seller"] = "그랩";
document.write(product["seller"] + "<br>");

product.seller = "판매자1";
document.write(product.seller + "<br>")


// Object
// const superman = {
//     name : 'clark',
//     age : 33,
// }
// 접근: superman.name & superman['age']
// 추가: superman.gender = 'male'; & superman['hairColor'] = black
// 삭제: delete superman.hairColor;

// const superman = {
//     name : 'Clark',
//     age : 30,
// }

// console.log(superman.name);
// console.log(superman['age']);
// superman.hairColor = "black";
// superman['hobby'] = 'football';
// delete superman.age;
// console.log(superman);

function makeObject(name, age){
    return {
        name,
        age,
        hobby : 'football'
    }
}

const Mike = makeObject('Mike', 30);
console.log(Mike);


console.log('age' in Mike);
console.log('birthday' in Mike);
