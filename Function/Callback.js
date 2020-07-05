// 값(객체)으로서의 함수
function a() { }

// 객체 안에 정의된 함수는 메서드(function () {})
a = {
    b: function () { }  // key(속성, 프로퍼티) : value(메서드)(){}
}

// func에 담긴 함수를 호출하며, num을 매개변수로 전달
// 함수는 값이라서, 다른 함수의 인자로 전달할 수 있다.
// function cal(func, num) {
//     return func(num);
// }
// function increase(num) {
//     return num + 1;
// }
// function decrease(num) {
//     return num - 1;
// }

// // 이것과 동일
// /* function cal(func, num) {
//     var func = increse(num){
//         return num + 1;
// }
// func(1);
// } */
// console.log(cal(increase, 1));
// console.log(cal(decrease, 1));


// 함수를 이용한 리턴 값
// function cal(mode) {
//     var funcs = {
//         'plus': function (left, right) { return left + right },
//         'minus': function (left, right) { return left - right },
//     }
//     return funcs[mode];  // 맵으로 리턴
// }
// console.log(cal('plus')(2,1));
// console.log(cal('minus')(2,1));

// var process = [
//     function(input) { return input + 10; },
//     function(input) { return input * input; },
//     function(input) { return input / 2; },
// ];
// var input = 1;
// for(var i = 0; i < process.length; i++){
//     input = process[i](input);
// }
// console.log(input);

/* 
    함수를 저장할 수 있는 곳(first class citizen, first class object, first class entity ...)
        1. 변수
        2. 매개변수
        3. 리턴 값
*/


// 콜백(처리의 위임)
// 수신받는 메서드가 콜백 함수의 값을 인자로 전달받아
// 기본적인 동작 방법을 변경하는 것
// 자바스크립트에서는 값으로 함수를 전달 받을 수 있기에 가능
// function sortNumber(a, b) {
//     /* 
//         if(a>b){
//             return 1;
//         }else if(b>a){
//             return -1;
//         }else{
//             return 0;
//         }
//     */
//    //단순화
//    // return a - b; // 역순
//     return b - a;
// }
// var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// console.log(numbers.sort());
// console.log(numbers.sort(sortNumber));  // .sort, 객체에 속해 있으니 함수가 아니라 메서드. 동시에 자바스크립트 기본 제공이라 내장 메서드, 빌트인 메서드

