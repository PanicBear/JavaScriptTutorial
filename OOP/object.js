// 내장 객체 Object
// 모든 객체의 부모
// Object.prototype은 모든 객체가 상속받는 메서드
// Object prototype의 메서드를 수정하여 모든 객체가 영향받는 메서드 생성 가능


// 자바스크립트 사전 등
// https://developer.mozilla.org/ko/
// 해당 API가 어떤 ECMA 스크립트 버전에 포함되는지 기술   Specifications
// API와 브라우저 간의 호환성도 기술                     Browser compatibility


// // Object.keys() - 인덱스(키) 배열 리턴
// // Object.prototype.toString() - 객체가 가진 값을 보기편한 문자열로 표현
// var arr = ["a", "b", "c"];
// console.log('Objects.keys(arr)', Object.keys(arr));
// var o = {'name':'egoing', 'age': 20, 'city':'seoul'};
// console.log(Object.keys(o));
// var o1 = new Object();
// console.log(o1.toString());
// var o2 = [1,2,3];
// console.log(o2.toString());


// Object는 생성자 함수, 프로퍼티를 가질 수 있음
// prototype의 유무에 따라 달라지는 사용방법
// Object.keys() = function() {}                // 생성자에 속한 메서드를 사용
// Object.prototype.toString() = function() {}  // 객체를 생성하여 부모 객체, Object에 속한 메서드를 상속


// 내장객체 Object의 확장
// 모든 객체가 사용할 수 있는 메서드(바람직하지 않음)
Object.prototype.contain = function(neddle){    // 객체 해당 value 보유 여부 검사
    for(var name in this){
        if(this[name]===neddle){
            return true;
        }
    }
    return false;
}
var o = {'name':'egoing', 'city':'seoul'}
// console.log(o.contain('egoing'));
var a = ['egoing','leezche','grapittie'];
// console.log(a.contain('leezche'));

// 모든 객체에 영향을 주기 때문에, for in 문 등을 사용할 경우 함수가 속성으로 불쑥불쑥 튀어나올 수 있다.
for(var name in o){
    console.log(name);  // name, city, contain
}
for(var name in a){
    console.log(name);  // 0, 1, 2, contain
}


// Object.prototype.hasOwnProperty()
// name에 해당하는 프로퍼티를 어떤 객체가 가지고 있는지
// 자신이 직접 정한 프로퍼티 구별
for(var name in a){
    if(a.hasOwnProperty(name)){     
        console.log(name);
    }
}