//cach viet tach cau hinh router ra ngoai
const express = require('express')
const router = express.Router()
// const bcrypt = require('bcrypt')
// const upload = require('../uploadfile')

//Khai bao cho duong dan cua newsControoler tu file controoler vao 
const meControoler = require('../controller/Mecontroller')

 //Truy xuat func tu newcontroller vao.

//Tao them 1 duong dan slug moi ten create
router.get('/store/course',meControoler.storeSoucre)
//Duong dan chinh
// router.get('/',newsControoler.index)


module.exports = router