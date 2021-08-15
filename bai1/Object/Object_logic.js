// Loc ra nhung phan tu trung nhau trong array

const product = ["Tom","Ca","Thit","Hau","Ga","Vit","Ca","Hau"]

function check(products){
let checkfoods = products.filter((food,pos) => products.indexOf(food) !== pos)
return checkfoods
// return (food) ? foods.filter((food,pos) => foods.indexOf(food) !== pos) : []
// console.log(checkDuplicate)
}
// console.log(check(product))
///////////////////////////////////////////////////////////////////

//**Loai bo phan tu trung nhau trong 2 mang khi gop lai voi nha
const arr1 = ["Cuong","Minh","Trung"]
const arr2 = ["Duc","Minh","Hieu"]

function checkArray(arr1,arr2){
    let check = arr1.filter(arr => !arr2.includes(arr.toString()))
    check = check.concat(arr2.filter(arr => !arr1.includes(arr.toString())))
    return check
}
console.log(checkArray(arr1,arr2))

////////////////////////////////////////////////////////////////////////////////////////////////
//** Day la phan duyet bien nhung phan tu array qua 1 object mang */

let object = {
    name:"CUong",
    age :12,
    class:"12C7",
    birth: 2000
}

let props = ["name","age","class"]

function pick(obj,pop){
    let obj1 = {}
    pop.forEach(pops =>{
        obj1[pops] = obj[pops]
    })
    return obj1
}

console.log(pick(object,props))

/////////////////////////////////////////////////////////
//* Xoa phan tu cua arry khi trung voi object

let objj = {
    name: "cuong",
    age: 23,
    class: "22B",
    study: "Nha Trang",
    math: "true"
}

let propss = ["study", "class", "age"]

propss.forEach(popss=>{
    delete objj[popss]
})

console.log(objj)
//////////////////////////////////////////////////////////
// ** Tach chuoi gio *///////////////////////////////

function getTime(string){
    let [str_hour,str_minute,str_second] = string.split(":")
    let seconds = parseInt(str_hour)*3600 + parseInt(str_minute)*60
    return seconds
}

console.log(getTime("10:20"))

