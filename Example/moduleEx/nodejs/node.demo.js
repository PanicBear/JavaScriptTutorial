// nodejs에서는 require라는 함수를 호출하여 모듈을 로드
// 인자 값으로 로드할 파일 이름 넣으면 됨
var circle = require('./node.circle.js');
console.log('The area of a circle of radius 4 is '
    + circle.area(4));

//D:\다운로드\dev\JavaScript\JavaScriptTutorial\Example\moduleEX\nodejs> node node.demo.js