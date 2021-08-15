//cach viet tach cau hinh router ra ngoai
const express = require('express')
const router = express.Router()
// const bcrypt = require('bcrypt')
// const upload = require('../uploadfile')

//Khai bao cho duong dan cua newsControoler tu file controoler vao 
const siteControoler = require('../controller/Sitescontroller')

 //Truy xuat func tu newcontroller vao.

//tao them 1 chuoi de hien ra slug duong dan moi
router.get('/search',siteControoler.search)
//Duong dan chinh
router.get('/',siteControoler.index)


module.exports = router