const { User }= require('../models/User');
// 미들웨어
let auth = (res,req,next)=>{
    // 인증 처리를 하는 곳 

    // 클라이언트 쿠키에서 토큰을 가져온다. 
    let token = req.cookies.x_auth; 


    // Token을 Decoding 한 후, USER ID 를 찾는다. 
    User.findByToken(token, (err,user)=>{
        if (err) throw err;
        if (!user) return res.json({isAuth : false, error : true});

        req.token = token; 
        req.user= user; 
        next(); // next 가 없다면 미들웨어에 갇혀버림
    })

    // USER가 있으면 인증 Okay, USER가 없으면 인증 NO
}

module.exports ={auth}; 