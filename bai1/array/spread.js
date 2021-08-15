const colorLike = ["blue","green","yellow","red"]
const colorHate = ["black","brown","white"]
const colorFull = colorHate.concat(colorLike)
const colorFulls = [...colorLike,...colorHate]
// console.log(colorFull)
// console.log(colorFulls)

////////////////////////////////////////////////////////////////
function totalMutil(a=1,b=2,c=2,d=3,e=4){
    return a * b * c * d * e
}
const number = [1,2,4,5,6]
// console.log(totalMutil(...number))
console.log(totalMutil(...number))

let SteverCar = {
    make:"Honda",
    model:"Tokyo",
    year:2022,
    color:"white",
    price:"$22,500"
}

console.log(SteverCar)
const copyCar = { ...SteverCar,dealer:"City honda" }
copyCar.price = "$33,000"
copyCar.color = "red"
console.log(copyCar)