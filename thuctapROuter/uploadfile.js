const express = require('express')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req,file,cb){
        cb(null,'./public')
    },
    filename: function(req,file,cb){
        const name = Date.now() + "-" + file.originalname
        cb(null,name)
    }
})

var upload = multer({storage:storage})

module.exports = upload