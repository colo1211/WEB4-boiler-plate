const express = require('express') // 다운받았던 모듈을 가져온다.  
const app = express() // 새로운 express App을 만든다. 
const port = 5000 // port 는 아무 숫자나 가능
const { User } = require('./models/User.js');
const bodyParser = require('body-parser');
const config = require('./config/dev');

const mongoose = require('mongoose');

mongoose.connect(config.mongoURL)
.then(()=>{console.log('MongoDB Connected..')})
.catch((e)=>console.log(e))

// application/x-www-form-url encoded 
// : URL로 된 데이터를 bodyparser가 분석해서 가져오게 해주는 역할
app.use(bodyParser.urlencoded({extended:true}));

// json 파일로 된 것을 분석해서 가져오게 해주는 것
app.use(bodyParser.json());

app.get('/', (req, res) => { // Root Directory
  res.send('Hello!')
})

app.post('/register',(req,res)=>{ // 회원가입 Directory
  // 회원가입할때 정보를 클라이언트에서 받아오면 DB에 넣어준다. 
  
  // req.body 에 들어가 있는 내용 (bodyparser를 사용하였기에 가능)
  // {
  //   id : 'color8',
  //   pw : '1234'
  // }

  const user = new User(req.body);
  user.save((err, userInfo)=>{
    if (err) return res.json({success : false, err});
    return res.status(200).json({success:true})
  })
  
})

app.listen(port, () => { // 5000번 port 에서 해당 앱을 실행
  console.log(`Example app listening at http://localhost:${port}`)
})