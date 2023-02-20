//Api 서버 만들기 문제 풀어 보기.
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

// let a = {
//     cat : "야옹",
//     dog : "멍멍",
//     cow : "음메"
// }

app.get('/sound/:name', (req, res) => {
    const {name} = req.params

    if(name == "cat")
    {res.json({'sound':'야옹'})}

    else if(name == "dog")
    {res.json({'sound':'멍멍'})}

    else if(name == "cow")
    {res.json({'sound':'음메'})}

    else
    {res.json({'sound':'dont know'})}
  }) 
  
  //POST 방식
  
  
  app.listen(3000) 