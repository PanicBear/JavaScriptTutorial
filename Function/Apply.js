// 객체의 속성에 값이 들어있으면 프로퍼티
// 객체의 속성에 함수가 들어있으면 메서드
// function func(){    // func.call, func.apply 호출 가능(객체 'Function'이 가진 메서드 상속)
// }                   
// func();
// function sum(arg1, arg2){
//     return arg1+arg2;
// }
// console.log(sum(1,2));
// console.log(sum.apply(null, [1,2,3,4,5]));   // null을 첫번째 인자로 전닿라면, 전역객체(브라우저의 경우 창)을 맥락으로 실행


// o1 = { val1: 1, va12: 2, val3: 3 };
// o2 = { v1: 10, v2: 50, v3: 100, v4: 25 };
// function sum() {
//     var _sum = 0;
//     for (name in this) {    // this는 이 단계에서 미정
//         _sum += this[name];
//     }
//     return _sum;
// }
// console.log(sum.apply(o1)); // o1.sum
// console.log(sum.apply(o2)); // o2.sum

// 이것과 동일(개무쓸모)
function sum() {
    var _sum = 0;
    for (name in this) {    // this는 이 단계에서 미정
        if (typeof this[name] !== 'function') {
            _sum += this[name];
        }
    }
    return _sum;
}
o1 = { val1: 1, va12: 2, val3: 3, sum: sum };
o2 = { v1: 10, v2: 50, v3: 100, v4: 25, sum: sum };
console.log(o1.sum());
console.log(o2.sum());

// func.call은 수업에서 다루지 않음(궁금하면 찾아보기)