// 개체와 프로퍼티가 정의되어 있는 사이에 다른 코드가 삽입될 수 있다.
// 집중도 저하 우려
// var person = {};    // Object
// person.name = 'egoing';                 // 프로퍼티
// person.introduce = function () {        // 프로퍼티 내의 함수 = 메서드
//     return 'My name is ' + this.name;   // this는 메서드가 담긴 객체 = person
// }                                       // this.name = person.name;
// console.log(person.introduce());


// 중괄호를 통한 가독성, 응집도 향상
// var person = {
//     'name' : 'egoing',
//     'introduce' : function(){
//         return 'My name is ' + this.name;
//     }
// }
// console.log(person.introduce());

function Person() {
    this.name = arguments[0];
    this.introduce = function () {
        return 'My name is ' + this.name;
    }
}
var p1 = new Person('a');   // (객체의) 생성자, var p = {}
var p2 = new Person('b');   
console.log(p1.introduce());
console.log(p2.introduce());

// 자바에서는 생성자가 클래스에 소속되어 인스턴스를 만들지만
// 자바스크립트의 생성자는 소속된 곳이 없는 함수로, 객체를 만듦(자바스크립느는 클래스가 없음)