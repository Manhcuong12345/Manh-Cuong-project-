// //Tao 1 class COng ty gom ten, dia chi, va viet 1 ham tinh toan ....
class CongTy {
    name = 'JoyTech';
    address = 'Ben xe phia bac';

    Bye(a,b){
        let c = a*b;
        return c;
    }
}

var newcourses = new CongTy()
console.log(newcourses.name)
console.log(newcourses.Bye(40,50))

// // viet ra 1 class co hai thuoc tinh a va b la so, 1 ham tinh tong 2 so a b nay, 1 ham tinh hieu a b nay
class number {
   a = 5;
   b = 7;

   Tong(){
       let c = this.a + this.b
       return c;
   }
}
var newCalu = new number()
console.log(newCalu.Tong())

class Ptbac1 {
    a = 0;
    b = 0;
    constructor(a,b){ //Constructor là một cấu trúc khởi tạo các thuộc tính của mỗi đối tượng.
        this.a = a
        this.b = b
    }
    InSo(){
        console.log(this.a);
        console.log(this.b)
    }
}

var ptb1 = new Ptbac1(3,);4
ptb1.InSo()

// // ax + b =0

class Ptb1{
    a = 6;
    b = 7;
    constructor(a,b){
        this.a = a
        this.b = b
    }
    TinhX(){
       let x = this.b / this.a;
       console.log(x)
    }
}
  var ptb1 = new Ptb1(8,14);
//   ptb1.TinhX()

//   // human co name, function gioithieu 'toi ten la' + name
class human{
    constructor(name){
        this.name =name
    }
    Gioithieu(){
        console.log("toi ten la" + ' ' + this.name)
    }
}
var Cuong = new human('Trung');
Cuong.Gioithieu()
 
var Tai = new human('Duc');
Tai.Gioithieu()

// // class taikhoan email matkhau, name, function doi ten , function doimatkhau, function in ra email, matkhau, name
class taikhoan{
    email;
    password;
    name;
    //Ham khoi tao gia tri
    constructor(email,password,name){
        this.email = email
        this.password = password
        this.name = name
    }
    Doiten(name){
        this.name = name
    }
    Doipass(password){
        this.password = password
    }
    In(){
        console.log(this.name)
        console.log(this.password)
        console.log(this.email)
    }
}
 var newInfor = new taikhoan('docuong12@gmail.com','manh123','Cuong')
 newInfor.In()
 newInfor.Doiten('Huy')
 newInfor.Doipass('Huy113')
 newInfor.In()
// //////////////////////////

class Taikhoan{
    name;email;password;address;
    constructor(name,email,password,username,address){
        this.name = name;
        this.email = email;
        this.password = password;
        this.username = username;
        this.address = address;
    }
    
    Info(){
        console.log(this.name)
        console.log(this.email)
        console.log(this.password)
        console.log(this.username)
        console.log(this.address)
    }

    Doipassword(password){
        this.password = password
    }

    Doiemail(email){
        this.email = email
    }

}

  const infomation = new Taikhoan('manh cuong','cu12@gmail.com','214','caicui23','134B Nha Trang')
//   infomation.Info()
  infomation.Doipassword('134')
  infomation.Doiemail('do1@gmail.com')
  infomation.Info()


