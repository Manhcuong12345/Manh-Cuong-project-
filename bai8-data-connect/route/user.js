const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
// const upload = require('./uploadfile')


   router.get('/home',(req, res)=>{
       res.render('home')
   })
   
   router.get('/news',(req, res)=>{
    res.render('news')
})

   router.get('/search',(req, res)=>{
       res.render('search')
   })


module.exports = router