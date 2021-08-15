const express = require('express')
const router = express.Router()
const multer = require('multer')


const usercontroller = require('../controller/Userscontroller')

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

router.get('/login',usercontroller.login)
router.get('/reg',upload.single('img'),usercontroller.reg)
//phan chinh sửa
router.get('/:id/edit1',usercontroller.edit1)
//phan update
router.put('/:id',upload.single('img'),usercontroller.update)
//phan xóa
router.delete('/:id',usercontroller.delete)
router.get('/storeuser',usercontroller.storeuser)
router.post('/regadd',usercontroller.regadd)
//Login chuyenhuog
router.post('/loginadd',usercontroller.loginadd)

module.exports = router