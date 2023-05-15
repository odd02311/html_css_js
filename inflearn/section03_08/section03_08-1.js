var product = [{
    name : "농구공",
    description : "그냥 농구공",
    price : 30000
}, {
    name : "축구공",
    description : "그냥 축구공",
    price : 15000
}]

if(product.length >= 1){
    console.log("상품 정보")
}
else{
    console.log("상품 준비중")
}

if(product.legnth >= 5){
    console.log("상품이 많다")
}
else if(product.length >= 1){
    console.log("상품 1 ~ 4개");
}
else {
    console.log("상품 준비중")
}