const express = require('express');
const router = express.Router();    // express안에서 Router() 함수를 꺼내서 변수에 저장

router.get("/", function(req,res){     // app.get => router.get으로 변경

    let query = req.query;          // 모든 사용자의 요청은 req.query에 존재
    console.log(query);     // 사용자가 주소창에 입력한 데이터 출력(콘솔)

    res.send({'key':'vaule'});      // 창에 출력(브라우저)
})

router.get('/about', function(req,res){  // app.get => router.get으로 변경
    res.send("About page");
})

router.post("/postapi", function(req,res){  // post방식의 api (Body에서 데이터를 넘김)
    let body = req.body;        // 정보는 body안에 담겨있음
    console.log(body);
    res.send('POST API');
})

module.exports = router;    // router 변수를 밖으로 내보냄 (app.js에서 사용하기위해)