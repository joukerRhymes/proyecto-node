const express = require('express')
const morgan = require('morgan')
const path = require('path')
const router = require('./router')

const app = express()
const port = process.env.PORT || 3000

app.set('views',path.join(__dirname,'views'))
app.set('view engine', 'hbs')

app.use(morgan('dev'))
app.use(router)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
