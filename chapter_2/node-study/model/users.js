module.exports = function(sequelize, DataTypes) {
    // table명 정의 (user)
    return sequelize.define('users', {
        // idx column 정의
        idx: {
            type:DataTypes.INTEGER,
            autoIncrement:true,      // 자동으로 숫자가 증가 (식별값을 위해)
            primaryKey:true,        // 식별값이 column값이라는 것을 명시
            allowNull:false          // index값이 null이면 안된다는 뜻
        },
        // user_id column 정의
        user_id: {
            type:DataTypes.STRING(250)
        },
        user_status: {
            type:DataTypes.CHAR(1)
        }
    });
}