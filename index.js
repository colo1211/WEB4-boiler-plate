const express = require('express') // 다운받았던 모듈을 가져온다.  
const app = express() // 새로운 express App을 만든다. 
const port = 5000 // port 는 아무 숫자나 가능

app.get('/', (req, res) => { // Root Directory
  res.send('Hello World!')
})

app.listen(port, () => { // 5000번 port 에서 해당 앱을 실행
  console.log(`Example app listening at http://localhost:${port}`)
})