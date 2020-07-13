// 프로토타입 = 원형

// 객체는 프로퍼티를 가질 수 있기 때문에
// 프로토타입이라는 프로퍼티에 객채를 저장하고
// 생성자를 통해 새로운 객체를 생성하면, 거기에 저장된 객체 반환

// // prototype chain
// function Ultra(){}
// Ultra.prototype.ultraProp = true;
// function Super(){}
// Super.prototype = new Ultra();
// function Sub(){}
// Sub.prototype = new Super();
// var o = new Sub();
// console.log(o.ultraProp);


// 실행순서
// 1. o에 ultraProp이 있나 
// 2. Sub에 ultraProp이 있나
// 3. Super에 ultraProp이 있나 
// 4. Ultra에 ultraProp이 있나
function Ultra(){}
Ultra.prototype.ultraProp = 4; 

function Super(){}
Super.prototype = new Ultra();
//Super.prototype.ultraProp = 3;

function Sub(){}
Sub.prototype = new Super();
//Sub.prototype.ultraProp = 2;  // Sub.prototype = Super.prototype로 작동하면 자식의 변경사항이 부모에도 적용되니 하지 말 것

var o = new Sub();
//o.ultraProp = 1;
console.log(o.ultraProp);       

