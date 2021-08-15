
const number1 = 100
const number4 = parseInt("100.423") // parseInt lay so truoc dau phay
console.log(number4)
const number5 = Math.round("15.678") //Lam tron so
// console.log(number5)
const number2 = +"10" // thi cong thanh cong
const number3 = Number("10")// thi cong thanh cong
const number6 = parseFloat("30.14")
const total = number1 + number2 + number3 + number4 + number5 + number6
console.log(total)

////////////////////////////////////////////////////////////////
const numbers1 = "20"
const numbers2 = "10"

// console.log(numbers1 - numbers2)
// console.log(numbers1 / numbers2)
// console.log(numbers1 * numbers2)
// console.log(numbers1 % numbers2)

////////////////////////////////////
const age = 21
// console.log(`Nam nay toi ${age} tuoi`)

/////////////////////////////////////
//**Truthy and Falsy Values in JavaScript */

console.log(Boolean(""))//false
console.log(Boolean(" "))//true
console.log(Boolean("Hi"))//true
console.log(Boolean(0)) //false

if(" "){
    console.log("Is true")
}else{
    console.log("Is false")
}