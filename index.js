// const express = require('express') // 다운받았던 모듈을 가져온다.  
// const app = express() // 새로운 express App을 만든다. 
// const port = 5000 // port 는 아무 숫자나 가능
// const { User } = require('./models/User');
// // const bodyParser = require('body-parser');
// const config = require('./config/dev');
// const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser'); 

// mongoose.connect(config.mongoURL)
// .then(()=>{console.log('MongoDB Connected..')})
// .catch((e)=>console.log(e))

// // json 파일로 된 것을 분석해서 가져오게 해주는 것
// app.use(express.json());

// // application/x-www-form-url encoded 
// // : URL로 된 데이터를 bodyparser가 분석해서 가져오게 해주는 역할
// app.use(express.urlencoded({extended:true}));

// app.use(cookieParser()); 

// app.get('/', (req, res) => { // Root Directory
//   res.send('Hello!')
// })

// app.post('/register',(req,res)=>{ // 회원가입 Directory
//   // 회원가입할때 정보를 클라이언트에서 받아오면 DB에 넣어준다. 
  
//   // req.body 에 들어가 있는 내용 (bodyparser를 사용하였기에 가능)
//   // {
//   //   id : 'color8',
//   //   pw : '1234'
//   // }

//   const user = new User(req.body);
//   user.save((err, userInfo)=>{
//     if (err) return res.json({success : false, err});
//     return res.status(200).json({success:true})
//   })
  
// })

// app.post('/login', (req, res) => {

//   // console.log('ping')
//   //요청된 이메일을 데이터베이스에서 있는지 찾는다.
//   User.findOne({ email: req.body.email }, (err, user) => {

//     // console.log('user', user)
//     if (!user) {
//       return res.json({
//         loginSuccess: false,
//         message: "제공된 이메일에 해당하는 유저가 없습니다."
//       })
//     }

//     //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
//     user.comparePassword(req.body.password, (err, isMatch) => {
//       // console.log('err',err)

//       // console.log('isMatch',isMatch)

//       if (!isMatch)
//         return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

//       //비밀번호 까지 맞다면 토큰을 생성하기.
//       user.generateToken((err, user) => {
//         if (err) return res.status(400).send(err);

//         // 토큰을 저장한다.  어디에 ?  쿠키 , 로컬스토리지 
//         res.cookie("x_auth", user.token)
//           .status(200)
//           .json({ loginSuccess: true, userId: user._id })
//       })
//     })
//   })
// })

// app.listen(port, () => { // 5000번 port 에서 해당 앱을 실행
//   console.log(`Example app listening at http://localhost:${port}`)
// })

const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/dev');
const { User } = require("./models/User");

//application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));

//application/json 
app.use(express.json());
app.use(cookieParser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURL)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!~~ '))

app.post('/register', (req, res) => {

  //회원 가입 할떄 필요한 정보들을  client에서 가져오면 
  //그것들을  데이터 베이스에 넣어준다. 
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })
})

app.post('/login', (req, res) => {

  // console.log('ping')
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({ email: req.body.email }, (err, user) => {

    // console.log('user', user)
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "제공된 이메일에 해당하는 유저가 없습니다."
      })
    }

    //요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
    user.comparePassword(req.body.password, (err, isMatch) => {
      // console.log('err',err)

      // console.log('isMatch',isMatch)

      if (!isMatch)
        return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다." })

      //비밀번호 까지 맞다면 토큰을 생성하기.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);

        // 토큰을 저장한다.  어디에 ?  쿠키 , 로컳스토리지 
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })
      })
    })
  })
})




const port = 5000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))