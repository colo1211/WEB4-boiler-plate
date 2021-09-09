const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 
const saltRounds = 10; 

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

userSchema.pre('save', function(next){
    var user = this; 
    if (user.isModified('password')){
        bcrypt.genSalt(saltRounds, function(err, salt){
            if (err) return next(err); 
            // user.password는 암호처리 전의 비밀번호 
            // hash 는 암호처리 후의 비밀번호
            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) return next(err); 
                user.password = hash; // hash(암호화)된 비밀번호로 변경
                next(); 
            }
        )
        })
    }
})

const User = mongoose.model('User', userSchema); 

module.exports = {User}