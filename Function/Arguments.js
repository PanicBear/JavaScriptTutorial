// 자바스크립트에서는 매개변수와 인자의 수가 달라도 에러를 반환하지 않는다.
// 매개변수 1개, 인자 0개 가능
// 매개변수 0개, 인자 7개 가능

// function sum() {    // 매개변수 = parameter
//     var _sum = 0;
//     for (var i = 0; i < arguments.length; i++) {    // 예약어, 사용자가 전달한 인자에 접근할 수 있도록 함
//         console.log(i + ' : ' + arguments[i]);
//         _sum += arguments[i];
//     }
//     return _sum;
// }
// console.log('result : '+sum(1,2,3,4));  // 인자


// 함수명.length는 실제 전달된 인자(매개변수)의 수
// arguments.length는 함수로 전달된 인자의 수
// 인자와 매개변수의 값을 비교하여 조건분기 발생에 유용
function zero(){
    console.log(
        'zero.length', zero.length,
        'arguments', arguments.length,
    );
}
function one(arg1){
    console.log(
        'one.legnth', one.length,
        'arguemnts', arguments.length,
    );
}
function two(arg1, arg2){
    console.log(
        'two.length', two.length,
        'arguments', arguments.length,
    );
}
zero();
one('var1', 'var2');
two('var1');