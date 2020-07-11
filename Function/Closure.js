// 정의 : 내부함수가 외부함스의 맥락(context)에 접근할 수 있는 것을 가리킨다.

// 내부함수
// function outter(){
//     function inner(){
//         var title = 'coding everbody';
//         console.log(title);
//     }
//     inner();
// }
// outter();


// 내부함수에서 외부함수의 지역변수에 접근할 수 있다.
// function outter() {
//     var title = 'coding everybody';
//     function inner() {
//         console.log(title);
//     }
//     inner();
// }
// outter();


// // 외부함수가 더이상 사용되지 않는 경우에도
// // 내부함수가 외부함수에 접근할 수 있다.
// function outter() {
//     var title = 'coding everybody';
//     return function () {
//         console.log(title);
//     }
// }
// var inner = outter();   // inner라는 변수에 리턴한 function()을 삽입
// inner();    // 외부함수의 생명주기가 끝났음에도, 외부함수의 변수 title의 값에 접근 가능.
//             // 외부함수는 외부함수의 지역변수를 사용하는 내부함수가 소멸될 때까지 소멸되지 않는다는 것을 뜻한다.


// private variable
// 1. 클로저는 객체의 메서드에서도 사용할 수 있다.
// 2. 동일한 외부함수 안에서 만들어진 내부함수나 메서드는 외부함수의 지역변수를 공유한다. 
// 3. 외부함수가 실행될 때마다 새로운 지역변수를 포함하는 클로저가 생성되기 때문에, 완전히 독립된 객체가 된다.
// 4. factory_movie의 지역변수 title은 정의된 객체의 메서드에서만 접근할 수 있다.
// 이와 같은 원리로, private를 지원하지 않는 javascript에서 private 접근 제한자를 설정할 수 있다.
// function factory_movie(title) {
//     return {
//         get_title: function () {    // 객체 소속인 것만 다를 뿐, 내부함수
//             return title;
//         },
//         set_title: function (_title) {    // 객체 소속인 것만 다를 뿐, 내부함수
//             // if (typeof _title === 'string') {
//             //     title = _title;
//             // } else {
//             //     console.log('제목은 문자열이어야 합니다.');
//             // }
//             title = _title;
//         }
//     }
// }
// ghost = factory_movie('Ghost in the shell');
// matrix = factory_movie('Matrix');

// console.log(ghost.get_title());     // Ghost in the shell
// console.log(matrix.get_title());    // Matrix

// ghost.set_title('공각기동대');

// console.log(ghost.get_title());     // 공각기동대
// console.log(matrix.get_title());    // Matrix
// // get_title, set_title은 내부함수로, public 기능
// // title은 private의 기능 외부함수의 지역변수로, private 기능


// 클로저 유의점(자주 일어나는 실수)
// var arr = [];
// for (var i = 0; i < 5; i++) {
//     arr[i] = function () {
//         return i;
//     }
// }
// for (var index in arr) {
//     console.log(arr[index]());   //5가 다섯번 뜬 이유 : for문이 다 돌고난 전역 변수를 가져옴, arr[1~5] 나열이 먼저
// }


// var arr = [];
// for (var i = 0; i < 5; i++) {
//     arr[i] = function (id) {    // 즉시 호출 함수 표현식 
//         return function () {    // 1. var a = function() { }(); 
//             return id;          // 2. (function(){}())
//         }
//     }(i) // 매개변수
// }
// for (var index in arr) {
//     console.log(arr[index]());   //5가 다섯번 뜬 이유 : for문이 다 돌고난 전역 변수를 가져옴, arr[1~5] 나열이 먼저
// }

// 클로저 예제 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Closures
// 즉시 호출 함수 : https://sseambong.tistory.com/250

// var i = 'a';
// (function(id) {         // 이름 변경
//     console.log(id);
// })(i);  // 입구