// // 복제
// // 원시 데이터 타입의 경우
// // String, Number, Boolean, null, undefined
// var a = 1;
// var b = a;               // a = 1, b = 1'(동일한 값이지만 서로다른 숫자를 가리킨다)
// b = 2;
// console.log(a); // 1


// // 참조
// var a = { 'id': 1 };
// var b = a;                  // a = b = { 'id' : 1 } 동일한 객체를 가리킨다
// //b.id = 2;
// //console.log(a.id);    // 2
// b = { 'id': 2 };
// console.log(a.id);      // 1


// var a = 1;
// function func(b) {
//     b = 2;
// }
// func(a);
// console.log(a);  // 1


// var a = { 'id': 1 };
// function func(b) {      // b = a
//     b = { 'id': 2 };    // b와 a의 링크가 끊김
// }
// func(a);
// console.log(a.id);      // 1


var a = { 'id': 1 };
function func(b) {      
    b.id = 2;              // b와 a의 링크가 끊기지 않음
}
func(a);
console.log(a.id);         // 2