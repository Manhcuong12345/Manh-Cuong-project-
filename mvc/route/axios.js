const axios = require('axios')
const express = require('express')
const router = express.Router()


router.post('/',(req, res) => {
    const URL = 'http://localhost:3000/api/axios'
    const options = {
        url:URL,
        method:'POST',
        data:{
            name:'Hai',
            phone:'034544534534'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        }
    }
    
    res.send(options.data)

    // res.send(options.data)
})



module.exports = router