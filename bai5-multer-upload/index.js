const express = require('express')
const multers = require('multer')
const app = express()
const bodyParser = require('body-parser')
const router = require('./router')
app.use(bodyParser.urlencoded({extended:false}));
//Thu muc upload, image,video,sound...
app.use(express.static('public'))

app.use('/',router)



app.listen(2000,function(){
    console.log('Sever running')
})



