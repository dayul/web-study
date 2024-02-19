/* 숫자와 문자열 */
let a = 100;
a = 200;
console.log(a);

const b = 200;  
/*b = 300;    const는 재할당 불가*/
console.log(b);

let c = '문자';
let d = "문자";
let e = `문자`;
console.log(c + b);


/* 배열과 객체 */
let arr = [1, 2, 3];
console.log(arr);
arr.push(6);    // 추가하기 등 많은 함수 제공
console.log(arr);
console.log(arr[2]);   

let dic = {
    "key":"value"
}
console.log(dic);
dic.key2 = "value2";    // 값 추가
dic["key3"] = "value3"; // 값 추가
console.log(dic);
console.log(dic.key3);

arr = [1, 2, 3, {
    "key":"value",
    "list": [1, 2, 3],
}, true, "문자"];


/* 반복문과 조건문*/
if(10 < 5) {

}
else if(10 < 7) {

}
else {

}

for(let i = 0; i < 3; i++) {
    console.log(i);     
}


/* 함수 */ 
function x(num) {
    alert("계산완료");
    return num + 100;
}

let y = x(100);
console.log(y);

let str = "새싹-개발자";
let str_arr = str.split("-");   // 쪼개서 배열 생성
console.log(str_arr);

let str_str = str_arr.join(" ");    // 쪼개진 배열을 다시 문자열로 바꿈
console.log(str_str);