// 기본적인 접속 정보

var Sequelize = require("sequelize");
var sequelize;

sequelize = new Sequelize("class101", "root", "dy070709!", {        /*table명, 사용자, 비밀번호*/
    host:"localhost",
    port:3306,      // mysql은 3306 port를 이용
    dialect:"mysql",    // db 종류
    timezone:"+09:00",  // 한국 시간 세팅
    define: {
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freezeTableName:true
    }

});       // 도구들을 가져옴

var db = {};    // 객체식으로 table을 구성
db.users = sequelize.import(__dirname + "/users.js");   // 만든 table은 무조건 import 해주어야 함, __dirname은 상대주소

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;