/* <script>
      // console.log("만세!");
      // function x() {
        alert("만세!");
      }

      let a = "은 뭘까요?";
      let b = "값";
      console.log(b + a)  // 문자열 연산 가능

      let c = 100;
      console.log(b + c)  

      let d = 10 > 5;
      console.log(d)    // true

      let str = "문자";   // 문자 표현법
      let str2 = '문자';
      let str3 = `문자`;
      console.log(`저의 나이는 ${c}`);  // 백틱을 이용하면 문자열과 변수를 한번에 출력 가능


      // 배열
      let arr = [1, 2, 3, '문자', true, false];
      console.log(arr);
      console.log(arr[0]);    // 1

      arr.push("값");       // 객체 맨 뒤에 "값" 추가
      console.log(arr);

      // 객체
      let obj = {"key":"value", "key2":"value2"};
      console.log(obj);

      let dic = [       // 배열 안에 객체
        {"a":"apple"},
        {"b":"banana"},
        {"c":"cloud"}
      ]
      console.log(dic);
  </script>  

  <script>
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
    // results 안의 vote_count를 찾고 싶을때
    console.log(api.results[0].vote_count)
  </script>

  <script>
    // 반복문 (for문) & 조건문 (if문)
    let arr1 = [1, 2, 3, 4, 5, 6];
    for(let i = 0; i < arr.length; i++) {
      if(arr1[i] % 2 == 0) {
        console.log(arr1[i]);
      }
      else if(arr[i] == 4) {

      }
      else {

      }
    }
  </script>

  <script>
    // 함수 
    function x(num1, num2) {
      return num1 + num2
    }
    let y = x(100, 200)
    console.log(y)

    // 제공하는 함수
    let str1 = "자-바-를-자-바";
    let str2 = str1.split("-")  // 괄호안의 구분자로 구분하여 배열 생성
    console.log(str2)           // (5) ['자', '바', '를', '자', '바']

    let str3 = str2.join("*");  
    console.log(str3);          // "자*바*를*자*바" 라는 문자열로 바꿔줌

    console.log(str1.indexOf("를"))   // 문자열을 배열로 생각해서
								                  	  //"를"이라는 글자의 index번호를 알려줌
  </script> */