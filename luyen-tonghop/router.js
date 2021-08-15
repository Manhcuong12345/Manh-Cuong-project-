const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const upload = require('./uploadfile')
const jwt = require('jsonwebtoken')

////////////////////////////////////////////////////////////////
    // function Querymiddleware(req, res, next) {
    //     if(req.query.auth =='true') {
    //         req.user = {}
    //         req.query.auth = req.user.auth
    //         return next()
    //     }
    // // return res.status(404).send('This is problem sever')
    // }

    // function User_idmiddleware(req, res,next){
    //     if(req.query.user_id == 'true'){
    //         req.user.user_id = req.query.user_id
    //         return next()
    //     }
    // return res.status(404).send('Sever not found')
    // }


    // router.get('/get',Querymiddleware,User_idmiddleware,(req, res)=>{
    //   res.send(req.user)
    // })
//////////////////////////////////////////////////////////////////////////////

// var obj = {
//     name:'Cuong',
//     age: 2000,
//     user :'cuong123',
//     pass :'caicui123',
//     address:'Nha Trang',
//     hobby :'Da banh'
// }

// router.post('/post',(req,res)=>{
//     const {token} = req.body
//     const decode = jwt.decode(token,'Aibietduoc')
//     res.send(decode)
// })

// router.post('/',(req,res)=>{
//     const token = jwt.sign(obj,'Aibietduoc')
//     res.send(token)
// })

///Bcript dong bo Sync

var salt = bcrypt.genSaltSync(10)
var hash = bcrypt.hashSync('B4c0/\/', salt)

// To check a password
var res = bcrypt.compareSync('B4c0/\/', hash)   // true
console.log('equal')
console.log(res)

res = bcrypt.compareSync('not_bacon', hash)     // false
console.log('not equal')
console.log(res)

// Auto-gen a salt and hash
var hash = bcrypt.hashSync('B4c0/\/', 8)
console.log(`Auto-gen: ${hash}`)

// Bat Dong bo

// router.get('/',(req, res) =>{
//     res.send(req.query.search)
// })

// router.post('/',(req, res) =>{
//     res.send(req.query.user)
// })

// function middleware(req, res,next){
//     if(req.body.user){
//         return next()
//     }
//     return res.status(404).send('This is problem')
// }

// router.post('/post',middleware,(req, res)=>{
//      res.send(req.body.user)
// })

// router.post('/upload',upload.array('file',10),(req, res,next) =>{
//     const filee = req.files
//     if(!filee){
//         const err = new Error('Chua chon upload')
//         return next(err)
//     }
//     res.send(filee)
// })


module.exports = router