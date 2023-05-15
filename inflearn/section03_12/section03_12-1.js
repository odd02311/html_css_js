var products1 = [{
    name : "농구공",
    description : "평범한 농구공",
    price : 50000,
    seller : "민수"
}, {
    name : "축구공",
    description : "평범한 축구공",
    price : 40000,
    seller : "철수"
}]

// products 배열을 넣었을 때, 그 안에 가격(price)를 순서대로 출력(console.log)
// 하는 함수를 만들어보시오.

function printProductsPrice(products){
    const length = products.length;
    for(var i = 0; i < length; i++){
        console.log(products[i]);
    }
}

printProductsPrice(products1);

function printPrice(arr){
    const length = arr.length;
    for(var i=0; i<length; i++){
        console.log(arr[i].price);
    }
}

printPrice(products1);