var str = "a";
var pattern = /a/;
//var pattern = new RegExp('a');

// // RegExp.exec() - 해당 문자열을 값으로 하는 배열 리턴 
// console.log(pattern.exec('abcdef'));    //a
// console.log(pattern.exec('bcdefg'));    //null

// // RegExp.test() - 해당 문자열의 존재여부를 리턴
// console.log(pattern.test('abcdef')); // true
// console.log(pattern.test('bcdefg')); // false

// // 일부 문자열 객체의 메서드는 정규표현식 지원
// console.log('abcdef'.match(pattern));   // a
// console.log('bcdefg'.match(pattern));   // null

// console.log('abcdef'.replace(pattern, 'A')); // 패턴 검색하여 변경후 리턴

// // 정규표현식 옵션 : 대소문자 미구분 = i, 검색된 모든 결과 리턴 = g, 옵션 중첩 가능
// var withI = /a/i;
// var withG = /a/ig;
// var withIG = /a/ig;
// console.log('Abcdea'.match(withI));
// console.log('Abcdea'.match(withG));
// console.log('Abcdea'.match(withIG));

// //문자 1개 이상 + 공백 + 문자 1개 이상
// var pattern = /(\w+)\s(\w+)/;
// var str = "coding everybody";
// var result = str.replace(pattern, "$2 $1"); //$숫자는 그룹순서 명시
// console.log(result);

// url 검색시마다 정의된 내부 함수 호출
var urlPattern = /\b(?:https?):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*/gim;
var content = '생활코딩 : http://opentutorials.org/course/1 입니다. 네이버 : http://naver.com 입니다. ';
var result = content.replace(urlPattern, function(url){
    return '<a href="'+url+'">'+url+'</a>';
});
console.log(result);