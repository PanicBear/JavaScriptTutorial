// 함수 리터럴(함수 객체 편의성 제공)
function sum(x, y) { return x + y; }
console.log(sum(1, 2));


// 원래 함수는 이렇게 생김
var sum2 = new Function('x', 'y', 'return x+y');
console.log(sum2(1, 2));


// 객체 리터럴 new 생략
var o = {}
var o2 = new Object;
console.log(o);
console.log(o2);


// 배열 리터럴  new 생략
var arr = [1, 2, 3];
var arr2 = new Array(1,2,3);
console.log(arr);
console.log(arr2);