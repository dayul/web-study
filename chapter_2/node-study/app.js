const express = require('express');     // express를 사용하기 위해 node_modules에서 찾아 express 변수에 저장
const helmet = require('helmet');
const app = express();      // express 함수가 return하는 것을 app 변수에 저장
const ejs = require('ejs');     // ejs 사용

app.set('view engine', ejs);      // 그림파일을 브라우저에 보여줄 때 어떤 도구(테플릿)을 사용할지 설정
app.set('views', './views');         // 만든 html파일은 이 경로(.views)에 있다는 뜻
app.use('/public', express.static(__dirname + '/public'));  // 정적인 파일들은 미들웨어에 설정, /public폴더에 있다는 뜻, express.static안에 다 있다고 알려줌

app.use(helmet());  // 보안 강화 미들웨어
app.use(express.json());        // POST 방식의 api를 위해서 꼭 있어야 하는 것
app.use(express.urlencoded());  // POST 방식의 api를 위해서 꼭 있어야 하는 것

const mainRouter = require('./router/mainRouter');  // 만든 라우터 불러오기
app.use('/', mainRouter);     // 미들웨어 : 기본주소에 mainRouter 설정

app.listen(3000, function(req,res) {    // 스위치
    console.log("서버 실행");
})