const express = require('express') // express 모듈 가져와서
const app = express() // express instance 생성
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})