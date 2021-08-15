const express = require('express')
//tao body
// const bodyParser = require('body-parser')

// const {address,fullname} = require('./app')
// const {fullname,address} = require('./app')
// const name = require('./app')
// const router = require('./router')
//const {fullname} = req  ====> const fullname = req.fullname
const app = express()
// app.use(burlencoded({extended:false}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.get('/', function(req,res) {
//     res.sendFile(__dirname + "/file.html")
// })

// app.get('/test',function (req,res) {
//     res.sendfile(__dirname + "/fontend.html")
// })

// app.get('/',function(req,res) {
//     res.send(address)
// })

// app.get('/exaim',function(req,res){
//     res.send('Lai Minh Hao')
// })

// app.get('/controller',function(req,res){
//     res.send(req.query.phone)
// })

// app.get('/name/:name/:age',function(req,res) {
//     res.send(req.params.name + " " + req.params.age)
// })

// app.get('/address/:add/:phone',function (req,res) {
//     res.send(req.params.add + " " + req.params.phone)
    
// })
// ////////////
app.get('/search',function (req,res) {
    res.send(req.query.search)
})

app.post('/bodyname',function(req,res) {
    res.send(req.body.name)
})

app.post('/user/:id',function(req,res) {
    res.send(req.params.id)
})
// app.put('/put',function(req,res) {
//     res.send('this is put method')
// })

// //delete

// app.delete('/del',function(req,res) {
//     res.send('I Want delete them')
// })

////////Phan router///////////////
// app.use('/',router)
//phan ve bodyparser

app.listen(3000, ()=>{
    console.log("server running on Port 3000")
})
