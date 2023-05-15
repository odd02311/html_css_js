var allProducts = [{
    name : "농구공",
    description : "평범한 농구공",
    price : 100000
}, {
    name : "축구공",
    description : "평범한 축구공",
    price : 50000
}, {
   name : "야구공",
   description: "평범한 야구공",
   price : 75000
}]

// products 배열을 넣었을 때 가격이 60000원 이상인 product 객체를 담은 배열을
// 반환하는 함수를 만들어라.

// Hint
// function ~
//     var newProducts = [];
//     for ~
//         if ~
//         return ~

function getExpensiveProducts(products){
    var expensiveProducts = [];
    for(var i=0; i < products.length; i++){
        const product= products[i];
        const price = product.price;
        if(price >= 60000){
            expensiveProducts.push(product[i]);
        }
    }
    return expensiveProducts;
}

getExpensiveProducts(allProducts);

var products = getExpensiveProducts(allProducts);

console.log(products);