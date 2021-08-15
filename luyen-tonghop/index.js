const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const router = require('./router')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'))

app.use('/',router)


app.listen(2000,()=>{
    console.log('Sever running port 2000 OK')
})