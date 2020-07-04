// 유효범위

// var vscope = 'global';  // 전역변수
// function fscope() {
//     var vscope = 'local';   // 지역변수
//     var vl = 'local';   // 지역변수
//     console.log('함수 안 ' + vscope);
// }
// fscope();
// console.log('함수 밖 ' + vscope);
// //console.log('지역변수는 메서드 밖에서 호출 안됨 ' + vl);


// var vscope = 'global';  // 전역변수
// function fscope() {
//     vscope = 'local';   // 지역변수 초기화 아니고, 전역변수 값 삽입
// }
// fscope();
// console.log('지역변수 같은 전역변수 ' + vscope);


// var vscope = 'global';  // 전역변수
// function fscope() {
//     var vscope = 'local'
//     vscope = 'local';   // 전역변수 초기화 아니고, 내부에 있는 지역변수 먼저 갱신
// }
// fscope();
// console.log('지역변수 같은 전역변수 ' + vscope);



// function a() {
//     var i = 0;
// }
// for (var i = 0; i < 5; i++) {
//     a();
//     console.log(i);
// }

// function a() {
//     i = 0;
// }
// for (var i = 0; i < 5; i++) {
//     a();
//     console.log(i);
// }


// 타인이 만든 코드를 빈번하게 사용하는  상황에서 충돌을 방지하기 위해,
// 하나의 객체를 전역변수로 만들고, 객체의 속성으로써
// 전체 변수를 관리하는 것이 효율적이다.

// 단일 전역변수에 속성으로 만들어 관리하는 방법.
// var MYAPP = {}
// MYAPP.calculator = {
//     'left' : null,
//     'right' : null,
// }
// MYAPP.coordinate = {
//     'left' : null,
//     'right' : null,
// }

// MYAPP.calculator.left = 10;
// MYAPP.calculator.right = 20;
// function sum(){
//     return MYAPP.calculator.left + MYAPP.calculator.right;
// }
// console.log(sum());


// 익명 함수를 통한 전역변수 관리법
// 1회용이기에 전역변수를 만들고 싶지 않을 때 바로 휘발되도록 사용
// (function () {
//     var MYAPP = {}
//     MYAPP.calculator = {
//         'left': null,
//         'right': null,
//     }
//     MYAPP.coordinate = {
//         'left': null,
//         'right': null,
//     }

//     MYAPP.calculator.left = 10;
//     MYAPP.calculator.right = 20;
//     function sum() {
//         return MYAPP.calculator.left + MYAPP.calculator.right;
//     }
//     console.log(sum());
// }());


// 재사용 가능 함수를 사용한 전역변수 관리법
// function myappfn(){
//     var MYAPP = {}
//     MYAPP.calculator = {
//         'left': null,
//         'right': null,
//     }
//     MYAPP.coordinate = {
//         'left': null,
//         'right': null,
//     }

//     MYAPP.calculator.left = 10;
//     MYAPP.calculator.right = 20;
//     function sum() {
//         return MYAPP.calculator.left + MYAPP.calculator.right;
//     }
//     console.log(sum());
// }
// myappfn();


// 자바에선 안되는데 자바스크립트에선 되는 코드
// 자바스크립트에서는 선언된 함수에 대한 유효범위를 제공하며,
// 중괄호(블록, 예약어를 통한 블록 등)로 결정되지 않는다.
// for(var i = 0; i < 10; i++){
//     var name = "egoing";
// }
// console.log(name);  


// 함수가 선언된 시점(호출시점X, 정의시점O)에서의 유효범위를 갖는다.
// 정적 유효범위(static scoping, lexical scoping)
// var i = 5;

// function a(){
//     var i = 10;
//     b();
// }

// function b(){
//     console.log(i);
// }

// a();    // 5