const express = require('express')
const multer = require('multer')


// Tim cach upload nhieu file cung 1 luc
// key word : multer, multiple


var storage = multer.diskStorage({
    destination: function(req,file,cb) {
        cb(null,'./public')
        
    },
    filename: function(req, file,cb){
        // console.log(file)
        //lay ten file khong bi trung
        const name = Date.now() +'-'+file.originalname
        //Khi upload anh dinf dang khac thi chuyen thanh dinh dang jpg
        // const name = Date.now() + '-' + '.jpg'
        cb(null,name)
    }
    
})
   
var upload = multer({storage: storage})


module.exports = upload

  // if(file.mimetype === 'image/png'){          
        //     cb(null,'./public')
        // }else{
        //     //neu la anh up len con khong thi khong up
        //     cb(new Error("not image"),null);
        // }