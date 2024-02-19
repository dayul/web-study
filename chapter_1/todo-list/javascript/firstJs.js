/*
// 변수 (숫자, 문자, boolean)
let a = "값";
let b = 100;
let c = true;

let a1 = "은 뭘까요?";
let a2 = a + a1;
console.log(a2);

let a3 = a + b;
console.log(a3);

let d = 10 > 5;
console.log(d);

let str = "문자"; 
let str1 =  '문자';
let str2 = `문자`; 
console.log(`제 나이는 ${b}`); 
*/

/*
// 배열과 객체 
let arr = [1, 2, 3, 4, '문자', true];
console.log(arr[4]);

arr.push("값");
console.log(arr);

let obj = {
  "key":"value", 
  "key1":"value1"
};
console.log(obj);

let dic = [
  {"a":"apple"},
  {"b":"banana"},
  {"c":"cloud"}
];
console.log(dic);


let api = {
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results" : [
        {
          "popularity": 3032.234,
          "vote_count": 145,
          "video": false,
          "genre_ids": [
            18, 86, 53
          ],
          "title": "2093",
          "vote_average": 5.8
        }
    ]
  
}

console.log(api.results[0].vote_count);
*/

/*
// 반복문 (for문)
let arr = [1, 2 , 3, 4, 5, 6, 7];
for(let i = 0; i < arr.length; i++) {

  if(arr[i] % 2 == 0 || arr[i] == 3) {
    console.log(arr[i]);
  }
    
}
*/


// 함수
function x(num1, num2) {
  return num1 + num2;
}

let result = x(100, 200);
console.log(result);

let str = "자바를 자바";
let str1 = str.split()		// 배열 생성
console.log(str1);

let str2 = "자-바-를-자-바";	
let str3 = str2.split("-");	  // 괄호 안에 구분자를 입력해 배열 생성 가능
console.log(str3)	;	

let str4 = str3.join("*");  // "자*바*를*자*바" 라는 문자열로 바꿔줌
console.log(str4);			

console.log(str.indexOf("를")); 