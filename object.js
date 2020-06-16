//var grades = {'egoing' : 10, 'k8805' : 6, 'sorialgi' : 80};

/* //key, value
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80; */

/* var grades = new Object();
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80; */

/* console.log(grades['sorialgi']);
console.log(grades.sorialgi); */

//forin
// for (const key in grades) {
//     if (grades.hasOwnProperty(key)) {
//         /* const element = grades[key];
//         console.log(element); */
//         console.log(grades[key]);
//     }
// } 

//객체에는 객체도, 함수도 담을 수 있다
//로직을 객체에 그룹핑해서 객체 조립을 통한 소프트웨어를 만들 수 있게 함
var grades = {
    'list': { 'egoing': 10, 'k8805': 6, 'sorialgi': 80 },
    'show': function () {
        for (const key in this.list) {
            if (this.list.hasOwnProperty(key)) {
                const element = this.list[key];
                console.log(element);
            }
        }
    }
}

grades.show();