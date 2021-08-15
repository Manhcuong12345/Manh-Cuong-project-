
// console.log(5>4)
// console.log(5>=5)
// console.log(2<7)

const age = 25
const isAge = age >= 20 || age <= 22
// console.log(isAge)

////////////////////////////////////////////////////////////////
//** if statements, else statements*/

const names = "Huyen"
const ages = 15
// const check = ages >= 18
if(ages >= 18){
    console.log(`${names} du tuoi xem phim 18+ `)
}else{
    console.log(`${names} chua du tuoi xem phim 18+`)
}

////////////////////////////////////////////////////////////////
//** else if Statements*/
const namefull = "Huyen"
const hour = new Date().getHours()
if(hour < 4){
     console.log(`${namefull} sleeping to bed`)
}else if(hour < 11){
     console.log(`${namefull} good morning !` )
}else if(hour < 17){
    console.log(`${namefull} good afternoon`)
}else if(hour < 22){
    console.log(`${namefull} good evening`)
}else{
    console.log(`${namefull} good Night` )
}
