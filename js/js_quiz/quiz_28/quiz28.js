// for(var i=1; i<=10; i++){
// // i % 2 == 1 홀 나머지 연산 %를 이용해서
// // i % 2 !=1 짝
//     // for(var j=1; j<=10; j++){
//     // }
//     document.write(i)
//     for(var j=1; j<=10; j++){
//         if(i % 2 == 1){
//             document.write("홀수입니다", "<br>")
//             break;
//         }
//         else if(i % 2 != 1){
//             document.write("짝수입니다", "<br>")
//             break;
//         }
//     }
// }

for(var i=1; i<=10; i=i+ 1){
    document.write(i);
    if(i % 2 == 1){
        document.write("홀");
    }
    else {
        document.write("짝");
    }
    document.write("<hr>")
}