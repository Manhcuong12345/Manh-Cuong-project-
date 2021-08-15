//chuyen qua phan con troller
class Newscontroller {
    //Viet method cho no
    //thuong dat la index
    //[Get] / news
    
    index(req,res){
        res.render('news')

    //Trang chi tiet cua news neu ai do an vao ky hieu slug
    //slug bien dong nhan ra chuoi
    }
    show(req,res){
        res.send('News detail')
    }
}

module.exports =new Newscontroller