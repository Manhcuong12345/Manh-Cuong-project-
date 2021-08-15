const Course = require('../models/Course')
const {mongooseToObject} = require('../util/mongoose')
const fs = require('fs')
//chuyen qua phan con troller
class Coursecontroller {
    //Viet method cho no
    //thuong dat la index
    //[Get] / /course/:slug
    //Cach lay 1 file slug ra tu db
    show(req,res,next){
        //lay slug tu ben course.js truyen qua
        // nay duoc dung de lay du lieu da nap san trong data ra thoi
        Course.findOne({slug:req.params.slug})
        .then(course=>{
            // res.json(course)
            res.render('show',{course: mongooseToObject(course)})
        })
        .catch(next)
        // res.send('show course detail')

    //Trang chi tiet cua news neu ai do an vao ky hieu slug
    //slug bien dong nhan ra chuoi
    }

    create(req,res){
        res.render('create')
    }
    
    store(req,res,next){
        //Xủ lý và lưu dữ liệu post vào đấy
        const formData = req.body
        // formData.img = `https://img.youtube.com/vi/${req.body.img}/sddefault.jpg`
        formData.img = req.file.filename
        const course = new Course(formData)
        course.save()
        //Neu thanh cong chuyen den trang (/)
         .then(() =>res.redirect('/') )
         .catch(error =>{
            // res.status(404).send('Loi Ban can phai nhap thong tin')
         })
        // res.send('Course save fullfill!!!')

        // res.json(req.body)
        // res.render('store')
    }
    //Phuong thuc chinh sua 
    // [Get] /courses/:id/edit
    //Thao tac nay la lay du lieu cua du lieu cu do xuong hien ra thong tin cu tu do ta cap nhap lai
    edit(req,res,next){
        //Lay ra cai id cua no de sửa
        Course.findById(req.params.id)
        .then(course =>res.render('edit',{
            course:mongooseToObject(course)
        
        })).catch(next)
        // res.render('create')
    }
    
     // [PUT] /courses/:id
     async update(req, res,next){
        //delete khi muon thay anh moi
        const formData = req.body
        formData.img = req.file.filename
            //Lay ra anh cu de xoa va cap nhat anh moi
        // const course = Course.findOneAndUpdate({_id:req.params.id},formData)
        //   .then(()=> res.redirect('/me/store/course'))
        //   .catch(next)
        //Lay ra anh cu de xoa va cap nhat anh moi
        const course = await Course.findOneAndUpdate({_id:req.params.id}, formData)
        if(req.file){
            const paths = 'public/img/'+ course.img
            // console.log(course.img)
            fs.unlink(paths,function(err){
                console.log(err)
            })
        }
        res.redirect('/me/store/course')
     }
     
     //[Delete] courses/:id
     delete(req, res,next){
        //  res.json(req.body)
        // xóa id 
        Course.deleteOne({_id:req.params.id})
           //back là quay lại trang mà mình xóa
           //thêm header location (redirect)
          .then(()=> res.redirect('back'))
          .catch(next)
     }
}


module.exports =new Coursecontroller