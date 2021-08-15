
// let array = [1,6,7,9];
// console.log(array[3])

// let arrayproj = new Array(2,4,5,6,7,8,9);
// console.log(arrayproj);

var proj = {
    name : 'Do Manh Cuong',
    age : '21',
    birth : '2020',

    tinhhieu:function(){
        return a-b;
    },  
    conttuces:function(){
      return this.name +''+ this.age + ' '+this.birth;
    }
}
 console.log(proj.conttuces());
 console.log(proj.tinhhieu());
// function Thuong(a,b){
//     var result = a/b;
//     return result;
// }
// console.log(Thuong(10,2))

//cach moi
// const thuong = (a,b)=>{
//     var result = a/b;
//     return result;
// }
// console.log(thuong(10,2))

//Kieu so sanh
var a = 20;
var b = 50;
// if(a <= b){
//     console.log('Dung');
// }else{
//     console.log('Sai')
// }

//Cach 2

// (a<=b) ? console.log('DUng') : console.log('Sai');

var a = 100;
var b = "100";
// (a === b) ? console.log('Dung') : console.log('Sai')

var obj = {
    name:"Cuong",
    number : 10,

    Tich:function(a,b){
        c=a*b;
        return c;
    },
    Goodbye:function(){
        var d = 'Chao Minh'
        var e = 'Hen gap lai'
        return d+ ' ' +e+''+this.name;

        // console.log(d + e); day la cach viet khac
    }
}
// console.log(obj.Tich(10,5));
// // obj.Goodbye() khong can console.log
// console.log(obj.Goodbye())