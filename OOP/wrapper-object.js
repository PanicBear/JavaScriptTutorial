// 원시(기본) 데이터 타입
/* 
    숫자        Number
    문자열      String
    불리언      Boolean
    null        // 래퍼 객체 존재하지 않음
    undefined   // 래퍼 객체 존재하지 않음 
*/

// 객체(참조) 데이터 타입
// 그 이외의 객체


// // 래퍼 객체
// // 내부에서 자동적으로 생성되는 객체
// var str = 'coding';             // str = new String('coding');과 동일
// console.log(str.length);        // 원시 데이터 타입인 문자열이 메서드를 가지는 이유
// console.log(str.charAt(0));     // 원시 데이터 타입인 문자열이 프로퍼티를 가지는 이유


// 래퍼 객체의 유의점
// str.prop하는 내부적으로 new String() 객체가 생성된다
// prop 프로퍼티는 이 객체에 저장되나
// 객체가 사라저버린다.
var str = 'coding';
str.prop = 'everybody';
console.log(str.prop);      // undefined