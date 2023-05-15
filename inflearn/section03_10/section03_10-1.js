var products = [{
    name: "농구공",
    description : "평범한 농구공",
    price : 40000,
    seller : "민수"
}, {
    name : "축구공",
    description : "평범한 축구공:",
    price : 30000,
    seller : "철수"
}]

// 인자로 배열을 받았을 때 길이를 return 하는 함수를 만드시오.
// 그리고 products를 넣어 실행해보세요

function getProductsLength(array){
    return array.length;
}
getProductsLength(products)

var length = getProductsLength(products)

console.log(length);


// product 객체를 넣었을 때 product의 seller를 반환하는 함수를 만들어 보세요
// 그리고 products의 첫번째 값을 넣어 실행해보세요

const getProductSeller = function(products){
    return products.seller;
}

getProductSeller(products[0]);

var name = getProductSeller(products[0]);

console.log(name);