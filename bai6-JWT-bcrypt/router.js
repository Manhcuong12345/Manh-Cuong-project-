const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


var obj = {
    name:'Cuong',
    age: 21,
    address: '203 Nguyen Khuyen Vinh Hai',
    phone : 0868963075,
    gender: 'male',
    study : 'CNTT',
    password:"12345"
}

var obj1 = {
    name:"Quang",
    age: 21,
    phone:62927343224
}

const password = "cu123"

//chuoi giai ma nguoc lai ra cai obj
router.post('/json',(req,res) => {
    //lay ma token 
    const {token} = req.body
    const decodes = jwt.verify(token,'dungchoaibiet')
    if(!decodes) return res.status(400).send({error_message:'token not valid'})
    res.send(decodes)
    console.log(decodes)
})

// Chuoi nay ma hoa 
// dung cho ai biet la chuoi ky tu dua vao do de ma hoa nguoc lai khi gap hacker
router.get('/',(req,res) => {
    // const token  = jwt.sign(obj,'dungchoaibiet')
    const token = jwt.sign(obj1,'dungchoaibiet');
    res.send(token)
    console.log(token)
})

/** Bcrypt */
router.post('/bcrypt',(req,res) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(obj.password, salt)
    console.log(hash)
    const compare = bcrypt.compareSync(password,hash)
    console.log(compare)
    if(!compare) return res.status(400).send({error_message: 'Password is not incorrect'})

    const respone = {
         hash,
         compare
    }

    res.send(respone)
})


module.exports = router