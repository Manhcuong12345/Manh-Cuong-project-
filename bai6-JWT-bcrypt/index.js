const express = require('express')
const app = express()
const router = require('./router')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
// const jwb = require('jsonwebtoken')
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({extended:false}))
app.use('/',router)


app.listen(3000,function(){
    console.log('Sever Post running 3000')
})