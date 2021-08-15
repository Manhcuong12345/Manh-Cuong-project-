const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const upload = require('./uploadfile')



// router.get('/', async (req, res) =>{
//     const password = 'DoManhCuong'   
//     const salt = await bcrypt.genSalt(10)
//     const hash = await bcrypt.hash(password,salt)
//     res.send(hash)
// })

// router.post('/post', async (req, res) =>{
//     // try{
//         // console.log(req.body)
//         var compare  = await bcrypt.compare(req.body.password,req.body.hash)   // true
//         // console.log('equal')
//         res.send(compare)
    // }
    // catch(err){
    //     res.send(err.message)
    // }
// })

   router.get('/home',(req, res)=>{
       res.render('home')
   })
   
   router.get('/news',(req, res)=>{
    res.render('news')
})

   router.get('/search',(req, res)=>{
       res.render('search')
   })

//    router.post('/search',(req, res)=>{
//     res.render('search')
// })
module.exports = router