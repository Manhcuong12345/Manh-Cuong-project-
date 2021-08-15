const express = require('express')
const upload = require('./uploadfile')
const router = express.Router()

router.get('/method-get',(req,res)=>{
    res.send(req.query.user)
})

router.post('/uploadfile',upload.array('filess',10),(req,res)=>{
     res.send(req.files)
})

//ktra duoi  file khi upload
module.exports = router