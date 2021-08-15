const express = require('express')
const router = require('./router/router')
const app = express()
// app.use(burlencoded({extended:false}));
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.get('/search',function (req,res) {
//     res.send(req.query.search)
// })

// app.post('/bodyname',function(req,res) {
//     res.send(req.body.name)
// })

// app.post('/user/:id',function(req,res) {
//     res.send(req.params.id)
// })

// app.put('/put/:id',function(req,res) {
//     res.send(req.params.id)
// })

// app.delete('/del',function(req,res) {
//     res.send('I Want delete them')
// })

// app.delete('/del/:id',(req,res)=>{
//     res.send(req.params.id)
// })

app.use('/',router)
////////Phan router///////////////
// app.use('/',router)
//phan ve bodyparser

app.listen(3000, ()=>{
    console.log("server running on Port 3000")
})
