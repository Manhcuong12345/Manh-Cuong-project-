const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const multer = require('multer')
const methodOverride = require('method-override')
// const router = require('./route/router')
const route = require('./route')
// const CourseApi = require('./route/api/course')
//Khai bao database vao
const db = require('./db')
const app = express()

app.use(express.static('public'))


//COnnect 
db.connect()

//HTTP logger
app.use(morgan('combined'))
//Template engine, dinh nghia
app.engine(
    'hbs',
    handlebars({
    extname: '.hbs', // file ngan gon hon
    //Lam tang gia tri dem trong danh sach
    helpers: {
        sum :(a,b) => a + b,
    }
}),
);

//truyen vao doi so  muon tuyen la method
app.use(methodOverride('_method'))

//Su dung view
app.set('view engine','hbs')
//truy cap den thu muc view
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.urlencoded({extended:false}))

// app.get('/',(req, res)=>{
//     res.render('home')
// })

// app.use('/',router)

//chay tuyen duong
route(app)
// app.use('/api',CourseApi)

app.listen(3000,()=>{
    console.log('Sever running port 2000')
})