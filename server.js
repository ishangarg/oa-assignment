const express = require('express')
const app = express()

app.set('view engine', 'ejs')

 const indexRouter = require('./routes/index')

 app.use('', indexRouter)

app.listen(3000)