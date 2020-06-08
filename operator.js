//https://dorey.github.io/JavaScript-Equality-Table/
console.log(1==2);
console.log(1==1);
console.log("one"=="two");
console.log("one"=="one");

// ==   equal operator
// ===  strict equal operator
// ===를 통해 에러를 줄이는 것을 강력하게 권고
console.log(1=="1");
console.log(1==="1");

// 값이 없음, 값이 정의되지 않음
console.log(null == undefined);       //true
console.log(null === undefined);      //false
console.log(true == 1);               //true
console.log(true == 2);               //false
console.log(true === 1);              //false
console.log(true == '1');             //true
console.log(true === '1');            //false
 
console.log(0 === -0);                //true
// 0/0 등의 성립하지 않는 숫자, 계산할 수 없음
console.log( NaN === NaN);             //false

console.log(1!=2);            //true
console.log(1!=1);            //false
console.log("one"!="two");    //true
console.log("one"!="one");    //false

console.log(10>20);   //false
console.log(10>1);    //true
console.log(10>10);   //false

console.log(10>=20);      //false
console.log(10>=1);       //true
console.log(10>=10);      //true