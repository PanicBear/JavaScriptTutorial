/* var i = 0;
while(i<10){
    console.log('coding everybody \n')
    i++;
} */

/* for( var i = 0; i < 10; i++){
    if(i == 5){
        break;
    }else if(i == 3){
        continue
    }
    console.log('coding everybody'+i);
}
 */

for(var i = 0; i < 10; i++){
    // 0부터 9까지의 변수를 j의 값에 순차적으로 할당
    for(var j = 0; j < 10; j++){    
        // i와 j의 값을 더한 후에 출력
        // String은 숫자인 i와 j의 데이터 타입을 문자로 형태를 변환하는 명령이다. 
        // String()을 제거하고 실행해보면 의미가 좀 더 분명하게 드러날 것이다.
        console.log(i+' '+j);
    }
}