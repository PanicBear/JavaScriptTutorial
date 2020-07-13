// 자바스크립트의 내장 객체(이게 다임)
// 다만 호스트 환경의 API가 무궁무진
/* 
    Object      객체
    Function    함수
    Array       배열
    String      문자열
    Boolean     논리
    Number      숫자
    Math        수학
    Date        날짜
    RegExp      정규표현
*/


// // Math.random()    0 ~ 1 생성, 곱한 값이 최대값이 됨
// // Math.floor()     소숫점 버림
// var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
// function getRandomValueFromArray(arr) {
//     var index = Math.floor(arr.length * Math.random());      
//     return arr[index];
// }
// console.log(getRandomValueFromArray(arr));


// 내장 객체(Array) + 사용자 정의 객체(random)
// 가독성 증가, 인자가 없어 사용자 편의성 증가
Array.prototype.random = function () {
    var index = Math.floor(this.length * Math.random());      
    return this[index];
}
var arr = new Array('seoul', 'new york', 'ladarkh', 'pusan', 'Tsukuba');
console.log(arr.random());