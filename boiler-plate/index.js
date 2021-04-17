const express = require('express') // express 모듈 가져와서
const app = express() // express instance 생성
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hjeong:gywjd465@boilerplate.ptu1c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
