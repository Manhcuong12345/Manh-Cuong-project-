const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../util/mongoose')
//chuyen qua phan con troller
class MeControoler {
    //Viet method cho no
    //thuong dat la index
    //[Get] /me/store/course
    //Cach lay 1 file slug ra tu db

    storeSoucre(req,res,next){
        Course.find({})
           .then(course => res.render('me/store-soucre',{
               course: mutipleMongooseToObject(course)
           }))
           .catch(next)
        // res.render('me/store-soucre')
    }

   
}

module.exports =new MeControoler