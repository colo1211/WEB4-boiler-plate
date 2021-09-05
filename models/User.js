const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String, 
        maxlength : 50
    },
    email :{
        type : String, 
        trim : true, // 공백 자동 제거  
        unique : 1, // 중복 X 
    },
    password : {
        type : String, 
        minlength : 5
    }, 
    lastaname : {
        maxlength : 50, 
        type : String
    },
    role : { // 1이면 관리자, 0이면 일반 사용자 
        type : Number ,
        default : 0
    },
    image : String, 
    token : {
        type : String
    }, 
    tokenExp : { // 토큰 유효기간 설정
        type : Number
    }
})

const User = mongoose.model('User', userSchema); 

module.exports = {User}