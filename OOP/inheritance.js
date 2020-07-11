// // 생성자를 통한 프로퍼티 초기화
// function Person(name){
//     this.name = name;
//     this.introduce = function(){
//         return 'My name is '+this.name;
//     }
// }
// var p1 = new Person('egoing');
// console.log(p1.introduce());


// // prototype 프로퍼티의 속성을 통해 초기화
// function Person(name){
//     this.name = name;
// }
// Person.prototype.name = null;
// Person.prototype.introduce = function(){
//     return 'My name is '+this.name;
// }
// var p1 = new Person('egoing');
// console.log(p1.introduce());


// 상속
function Person(name) {                             // 부모
    this.name = name;
}
Person.prototype.name = null;
Person.prototype.introduce = function () {
    return 'My name is ' + this.name;               // 부모 수정을 통해 상속받은 자식들을 일괄 수정 가능
}                                                   // 유지보수 유용

function Programmer(name) {                         // 상속
    this.name = name;
}
Programmer.prototype = new Person();
Programmer.prototype.coding = function () {
    return "hello world";
}

function Designer(name) {                           // 상속
    this.name = name;
}
Designer.prototype = new Person();
Designer.prototype.coding = function () {
    return "beautiful";
}

var p1 = new Programmer('egoing');
console.log(p1.introduce());
console.log(p1.coding());

var p2 = new Designer('leezche');
console.log(p2.introduce());
console.log(p2.coding());