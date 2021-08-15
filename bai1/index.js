// var lastName = 'Manh cuong';
// var a = 10; //Bien var su dung da dang hon
// let b=6;// chi duoc khai bao duoc 1 luon
// const c = 7; // gia tri khong thay doi
let string = 'Manh cuong'; // Kieu string
let number = 3;// Kieu number
let boolean = true; //Kieu true, false, tra ve gia tri dung sai
let array = [2,3,4,5]; // kieu array mang
// console.log(array[2]);
let arrayObj = new Array(1,2,3,4);
// console.log(arrayObj)

//Object
var obj = {
 name:"Cuong",
 age: 21,
 //Trong dau ngoac la 1 objec
 tinhtong: function(a,b){
      c=a+b;
      return c;
 },
 hello: function(){
     return "toi ten la " + this.name //This la lay gia tri
 }
}
// console.log(obj.tinhtong(10,20))
// console.log(obj.hello())

//Obj 2
let obj1 = {
    name :"Nodejs",
    des : "ngon ngu phia backend",
}
console.log(obj1.name + ' ' + obj1.des)
console.log(`${obj1.name} ${obj1.des}`)

//Function
// function Tich(a,b){
//     var result = a*b;
//     return result;
// }
const tich = (a,b) => {
    var result = a*b;
    return result;
}
// console.log(tich(10,20))
// let a = 10
// let b= 30
// if(a == b){
//     console.log('Dieu kien dung')
// }else{
//     console.lo`g('Dieu kien sai')
// }

//Cach moi
// var a = 10;
// var b = 30;
// Neu a=b thi chay lenh dang sau dau cham hoi neu khng thi sau dau :
// (a == b) ? console.log("dung") : console.log("sai")

var c = 'Manh Cuong';
var d = 5;
// (c == d) ? console.log("dung") : console.log("sai")
// if(c == d){
//     console.log('Dung')
// }else{
//     console.log('Sai')
// }

//Bai tap kieu 
var a = 5;
var b = "5";

// Neu 2 dau bang rhi se so sanh kieu so voi nhau
(a === b )? console.log("dung") : console.log("sai")
// Neu 3 dau = thi no so sanh so vi kieu du lieu

// (a == b ) ? console.log("dung") : console.log("sai")

// for(let i= 0; i<3 ; i++){
//     console.log('Hoc lap trinh !');
// }
//    console.log('Ket thuc lap trinh');
// var arr1 = [4,6,2,75,13,21,45]
// for(let i = 0; i < arr1.length ; i++){?
//    console.log(arr1[i])
// }

// var names = [
//     {
//         name: "Cuong",
//         age: "21"
    
//     },
//     {
//         name: "Minh",
//         age: "23"
//     },
//     {
//         name: "Hung",
//         age: "24"
//     },
//     {
//         name: "Ky",
//         age: "21"
//     }
// ]
//  for( let i = 0 ;i < names.length ; i++){
//      //coi nhu names[i] la 1 obj==> muosn lay gia tri name thi dung obj.giatri
//     console.log(names[i].age);
//  }

 // for in, for of , forEach, map, filter tim diem khac nhau
// In ra ten Cuong, Minh, Hung, Ky
//javascript huong doi tuong