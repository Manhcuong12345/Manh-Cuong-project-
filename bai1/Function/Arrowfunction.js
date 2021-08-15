
//** Tinh tuoi de di bau cu chi phi */
const goVote = (names,year,birthyear) =>{
      const CanVote = year - birthyear >= 18
      return `${names} ${CanVote ? "can vote" : "can not voice"}`
}

const year = new Date().getFullYear()
console.log(goVote("Cuong",year,2015))

// ****Functions Calling Other Functions (function goi trong function duoc)
function getPow(number){
      return Math.pow(number,3)
}
function totalPowers(number1,number2,number3,number4) {
      // const num1 = Math.pow(number1,2)
      // const num2 = Math.pow(number2,2)
      // const num3 = Math.pow(number3,2)
      // const num4 = Math.pow(number4,2)
      ////////////////////////////////
      // const num1 = getPow(number1)
      // const num2 = getPow(number2)
      // const num3 = getPow(number3)
      // const num4 = getPow(number4)
//    return num1 + num2 + num3 + num4
   return getPow(number1) + getPow(number2) + getPow(number3)+ getPow(number4)
}
console.log(totalPowers(5,4,2,6))

//** Bai toan tinh tien dich vu taxi */
//ban dau viet ham nhan thue bao gom hoa don va ty le thue
//viet ham tinh tien boa bao gom hoa don va dich vu
//tra ve so tien bao gom tien boa + nhan thue + tien boa
function getTax(bill,getRate){
      return bill * getRate
}
function getTip(bill,sersvice){
      return sersvice === "bad" ? bill *.15 : sersvice ==="good" ? bill *.2 : bill *.35
}
function calculateTax(bill,getRate,sersvice){
      return `Khac hang di taxi voi so tien la $${bill + getTax(bill,getRate) + getTip(bill,sersvice)}.`
}
// console.log(calculateTax(100,.2,"good"))