const express = require('express');
const router = express.Router();    // express안에서 Router() 함수를 꺼내서 변수에 저장
const db = require('../model/db');   // exports한 것을 불러옴

router.get("/", function(req,res){     // app.get => router.get으로 변경
    res.render('index', {title: "EJS main page"});      // 그림파일(html)을 전달할 때 사용
})

router.get('/about', function(req,res){  // app.get => router.get으로 변경
    res.send("About page");
})

router.post("/postapi", function(req,res){  // post방식의 api (Body에서 데이터를 넘김)
    let body = req.body;        // 정보는 body안에 담겨있음
    console.log(body);
    res.send('POST API');
})

router.get("/data/create", function(req,res){
    let user_id = parseInt(Math.random() * 10000);
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200});
    })  // 객체로 값을 넘겨줌

})

module.exports = router;    // router 변수를 밖으로 내보냄 (app.js에서 사용하기위해)