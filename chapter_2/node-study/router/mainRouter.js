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

// Create
router.get("/data/create", function(req,res){
    let user_id = parseInt(Math.random() * 10000);
    db.users.create({user_id:user_id}).then(function(result){
        res.send({success:200});
    })  // 객체로 값을 넘겨줌

})

// Read
router.get("/data/read", function(req,res){
    db.users.findAll().then(function(result){       // findAll값이 result에 담김
        res.send({succsess:200});
    })
})

// Update
router.post("/data/update", function(req,res){
    let target_id = res.body.target_id;     // Postman에서 데이터를 받음
    db.users.update({user_id:9999},{where:{user_id:target_id}}).then(function(result) {     // 1번째 인자: 바꿀 값, 2번째 인자: where절로 찾는 과정(Postman에서 받음)
        res.send({success:200});
    })    
    
})

module.exports = router;    // router 변수를 밖으로 내보냄 (app.js에서 사용하기위해)