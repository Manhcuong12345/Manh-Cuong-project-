const express = require('express')
const multer = require('multer')

    var storage = multer.diskStorage({
        destination:function(req,file,cb){
            if(file.mimetype === "image/jpg"||file.mimetype === "image/png"){
            cb(null,'./public')
            }else{
                cb(new Error('not image'),null)
            }
        },
        filename:function(req,file,cb){
            const name = Date.now() +'-'+file.originalname
            // const name = file.originalname + '-' + '.jpg'
            cb(null,name)
        }
    })

    var upload = multer({storage:storage})

    module.exports = upload