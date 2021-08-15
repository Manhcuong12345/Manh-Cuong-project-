//chuyen qua phan con troller
const Source = require('../models/Course')
const {mutipleMongooseToObject} = require('../util/mongoose')
class Sitescontroller {
    //Viet method cho no
    //thuong dat la index
    //[Get] / home...
    index(req,res,next){
    ///Cach lay du ieu bang comback nhan duoc doccumuent cua ta

      /*  Source.find({}, function (err, courses) {
            // docs.forEach
            if(!err){
                res.json(courses)
            }else{
                res.status(400).json({error:'ERROR!!!'})
            }
          });
      **/
          ///////////////////////////////////////////////

        //Cach dung promise
        Source.find({})
        //thay vi res.json ta thay bang res.home
        //    .then(courses => res.json(courses))
        //    .then(courses => res.render('home',{ courses }))
        //Xu ly handlebars khng cho xuat ra trang web
        .then(courses => {
            //xu ly ghi de courses raj
            //Duoc oobject thu ve object moi
            // courses = courses.map(course => course.toObject())
            res.render('home',{ 
                courses: mutipleMongooseToObject(courses)
            });
        //    .catch(error => next(error))
        //    .catch(next)
        })
        .catch(next)
        // res.render('home')

    //Trang chi tiet cua news neu ai do an vao ky hieu slug
    //slug bien dong nhan ra chuoi
    }
    // [Get] => search
    search(req,res){
        res.render('search')
    }
}

module.exports =new Sitescontroller