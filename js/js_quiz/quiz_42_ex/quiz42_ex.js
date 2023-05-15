// class는 object 뽑는 기계

// this는 기계로부터 생성되는 object (instance)

function champions(skill, skill2){
    this.q = skill; // 새로 생성되는 object에 {q : "consume"}을 할당함
    this.w = skill2;
}

var nunu = new champions("consume", "snowball");
var garen = new champions("strike", "단단해지기");

// var nunu = {
//     q : "consume",
//     w : "snowball"
// }

// var garen = {
//     q : "strike",
//     w : "courage"
// }

