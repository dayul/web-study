const express = require('express');     // express를 사용하기 위해 node_modules에서 찾아 express 변수에 저장
const app = express();      // express 함수가 return하는 것을 app 변수에 저장

app.get("/", function(req,res){     // get 방식의 api
    res.send('Hello World');
})

app.listen(3000, function(req,res) {    // 스위치
    console.log("서버 실행");
})