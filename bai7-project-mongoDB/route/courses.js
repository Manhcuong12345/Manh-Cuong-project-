//cach viet tach cau hinh router ra ngoai
const express = require('express')
const router = express.Router()
const multer = require('multer')

// app.use(express.static('./public/img'))
// const bcrypt = require('bcrypt')
// const upload = require('../uploadfile')

//Khai bao cho duong dan cua newsControoler tu file controoler vao 
const courseControoler = require('../controller/Coursecontroller')

//files

var storage = multer.diskStorage({
        destination: function(req,file,cb) {
            cb(null,'./public/img')
            
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

 //Truy xuat func tu newcontroller vao.

//Tao them 1 duong dan slug moi ten create
router.get('/create',courseControoler.create)
router.post('/store',upload.single('img'),courseControoler.store)
//tao them 1 chuoi de hien ra slug duong dan moi
router.get('/:id/edit',courseControoler.edit)
//Day la phan upload lay id
router.put('/:id',upload.single('img'),courseControoler.update)
//Day la phan de xoa danh much
router.delete('/:id',courseControoler.delete)
//UPLOAD FILE ANH
// router.post('/store',upload.single('file'),courseControoler.upload)
router.get('/:slug',courseControoler.show)
//Duong dan chinh
// router.get('/',newsControoler.index)


module.exports = router