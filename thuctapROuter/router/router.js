const express = require('express')
const router = express.Router()
const upload = require('../uploadfile')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

/** uploadFile */
router.post('/upload',upload.single('file'),(req, res) => {
     res.send(req.file)
})

/** JWT */
//chuoi giai ma nguoc lai ra cai obj
router.get('/',(req, res)=>{
    const token = jwt.sign({user:'cuong'},'12345')
    console.log(token)
    res.send(token)
})

// Chuoi nay ma hoa 
// dung cho ai biet la chuoi ky tu dua vao do de ma hoa nguoc lai khi gap hacker
router.post('/json',(req, res)=>{
    const {token} = req.body
    const decodes = jwt.verify(token,'12345')
    console.log(decodes)
    res.send(decodes)
})

const user = {
    name:'Cuong',
    password:'12345'
}

const password = '123455'

/** Bcrypt */
router.post('/bcrypt',(req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(user.password, salt)
    console.log(hash)
    const compare = bcrypt.compareSync(password, hash)
    console.log(compare)
    let respone = {
        hash,compare
    }
    res.send(respone)
})


module.exports = router