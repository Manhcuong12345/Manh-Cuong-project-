const User = require('../models/Customer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {mutipleMongooseToObject} = require('../util/mongoose')
const { mongooseToObject} = require('../util/mongoose')
const fs = require('fs')
//chuyen qua phan con troller

class Userscontroller {
    //Viet method cho no
    //thuong dat la index
    //[Get] / news
    //Phần xử lý đăng ký tài khoản
   async regadd(req,res,next){
    // bcrypt.hash(req.body.password,10,function(err, hashedPass ){
        // if(err){
        //     res.json({
        //       error:err
        //     })
        // }
    // })
    //    const user = new User({
    //        name:req.body.name,
    //        email:req.body.email,
    //        username:req.body.username,
    //        phone:req.body.phone,
    //        address:req.body.address,
    //        password:req.body.password,
    //    })
    // })
    ////////////////////////////////////////
    const salt = await bcrypt.genSalt(10)
    //Tao body pass
    req.body.password = await bcrypt.hash(req.body.password, salt)
    const formdata = req.body
    //them anh avatar
    const user = new User(formdata)
    // formdata.img = req.file.filename
    await user.save()

    res.redirect('/user/login')
    /////////////////////////////////////
    // user.save()
    // // .then(() =>res.redirect('/') )
    // .then(user =>{
    //     res.redirect('/')
    // })
    // .catch(error => {
    //     res.json({
    //         message:'Bạn chưa điền thông tin tài khoản'
    //     })
    // })
 // res.json(req.body)
}
////////////////////////////////
  //Trang login
   login(req,res){
     res.render('user/login')

 //Trang chi tiet cua news neu ai do an vao ky hieu slug
 //slug bien dong nhan ra chuoi

 }

//////////////////////////////////////////////////
////Phan login xac thuc
 async loginadd(req, res,next){
    // const formdata = req.body
    // const user = new User(formdata)
    // console.log(req.body)
    const user = await User.findOne({username: req.body.username})
    // console.log(user)
    if(!user) return res.redirect('/user/login')

    const isValid = bcrypt.compare(user.password, req.body.password)
    // console.log(isValid)
    if(!isValid) return res.redirect('/user/login')
    
    return res.redirect('/')
    
}

////////////////////////////////////////
   //Trang dang ky
    reg(req,res){

        res.render('user/reg')
    }
     
////////////////////////////////////////
    //Phần lấy danh sách user
    storeuser(req,res,next){
        User.find({})
          .then(admins => res.render('user/storeuser',{
               admins:mutipleMongooseToObject(admins)
          }))
          .catch(next)
        // res.render('user/store-user')
    }

/////////////////////////////////////////////////////////
    //Phần edit
    edit1(req, res,next) {
        User.findByIdAndUpdate(req.params.id)
        .then(users => res.render('user/edit1',{
            users: mongooseToObject(users)
        }))
        .catch(next)
    }
/////////////////////////////////
 update(req, res,next) {
        
        User.updateOne({_id:req.params.id},req.body)
        .then(() => res.redirect('/user/storeuser'))
        .catch(next)
 }

    //////////////////////
    delete(req, res,next) {
        User.deleteOne({_id:req.params.id})
        .then(() => res.redirect('back'))
        .catch(next)
    }
}

module.exports =new Userscontroller 