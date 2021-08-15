// let array = [2,3,4,5,9,10]
// console.log(array[2])

// //Class
// class Course{
//     //Khoi tao
//     constructor(name,price){
//         this.name = name
//         this.price = price
//     }
// }

// const php=new Course('PHP','200')
// const java=new Course('Java','100')

// console.log(php)

//Tao 1 class COng ty gom ten, dia chi, va viet 1 ham tinh toan ....
class CongTy{
    name = 'Sao Mai o';
    address ='205 Nguyen Khuyen Vinh Hai';
    email = 'ten la joytech';
    
    Tinh(a,b){
        let c = a + b
        return c
    }
}
   var Course = new CongTy()
   console.log(Course.name + ' ' + Course.address + ' ' + Course.email)
   console.log(Course.Tinh(20,40))