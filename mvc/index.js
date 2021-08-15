const express = require('express')
const bodyParser = require('body-parser')
const routers = require('./start_up/router')
const db = require('./db/config')
const ejs = require('ejs')
const path = require('path')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))
// app.set('views',"./views")

routers(app)
//thuc hien 1 function
db()

const PORT = process.env.PORT || 3000
app.listen(PORT, (req, res) => {
    console.log(`Sever is running on ${PORT}`)
})
