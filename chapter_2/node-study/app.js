const express = require('express');     // express를 사용하기 위해 node_modules에서 찾아 express 변수에 저장
const helmet = require('helmet');
const app = express();      // express 함수가 return하는 것을 app 변수에 저장

app.use(helmet());  // 보안 강화 미들웨어
const mainRouter = require('./router/mainRouter');  // 만든 라우터 불러오기
app.use('/', mainRouter);     // 미들웨어 : 기본주소에 mainRouter 설정

app.listen(3000, function(req,res) {    // 스위치
    console.log("서버 실행");
})