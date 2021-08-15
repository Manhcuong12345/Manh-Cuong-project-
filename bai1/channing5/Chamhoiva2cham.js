const name = "John"
const isSenior = false
const isStudent = true

let price;
if (isSenior) {
    price = 5
}else if(isStudent) {
     price = 7
}else{
    price = 10
}
// console.log(price)

//? tuong ung voi if
const prices = isSenior ? 5 : isStudent ? 7 : 10 // tuong ung voi cau lenh o tren
console.log(prices)

////////////////
const names = "Cuong"
const age = 20 
let isStudents,isRetired;

if(age >=65){
    isStudents = false, isRetired = true
}else if(age <= 22){
    isStudents = true, isRetired = false
}else{
    isStudents = false, isRetired = false
}

//Cach 2
// age >= 65 ? (isStudenst=false,isRetired=true) : age <=22 ? (isStudents=true,isRetired=false) :(isStudents=false,isRetired=false)

// console.log(`${names} ${isRetired ? "isRetired" : isStudents ? "isStudent" : "is currently !"}`)
