
var random;
random = Math.floor(Math.random() * 100) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

for(var i=1 ; i <= random ; i = i + 1 )
{
    document.write("<img src='cat.jpg'>");
}
