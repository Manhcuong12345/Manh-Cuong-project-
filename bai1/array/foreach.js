
const account = [100,40,90,-30-100,10]

account.forEach(item => {
       if(item >= 50){
           console.log(`$${Math.abs(item)}`)
       }else{
           console.log(`$${Math.abs(item)}`)
       }
})






////////////////////////////////////////////////////////////////
// ** Them vo mang array moi **/////////////
const numbers = [10,20,30,40,50]
const Pownumbers = []

numbers.forEach(numbers =>{
    const powNumber = numbers ** 2
    Pownumbers.push(powNumber)
})
console.log(Pownumbers)