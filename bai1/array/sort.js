let obj = {
    model:"Role",
    permissions:[
        {
            permissions:{
                add:false,
                view:false,
                edit:false,
                delete:false
            }
        }
    ],
    role_name:"test1"
}

let permissions = []
function authorization(action){
    obj.forEach(role =>{
        if(role.permissions.length > 0){
            permissions = permissions.concat(role.permissions);
        }
    })
    const allow = permissions.find(permission => permission.permissions[action])
    if(!allow) return('Loi')
}

console.log(authorization('add'))



// const number = [5,6,7,3,2,1,10]
// console.log(number.sort((a,b) => b-a))

const arr = [1, 54, 30, 1000000, 20000000]
// console.log(arr.sort())
const sorts = arr.sort((a, b) => a - b)
// console.log(sorts)

//string + number => string
//string - number => number
// const a = 2
// const b = 20
// const c = a+b
// console.log(c)

/** ConCat */
const a = [12, 10, 24, 56]
const b = [33, 45, 66]
const c = a.concat(b)
const d = [].concat(a, b)
// console.log(c)
// console.log(d)

/** Spread */
const aa = ["Hai", "Minh", "Quang"]
const bb = ["Tu", "Hieu", "Duc"]

const cc = aa.concat(bb)
// console.log(cc)
// console.log("+=======================+")
const dd = [...aa, ...bb]
// console.log(dd)

/** Push */
const array = [10, 20, 5, 12, 5, 7]
const numberOne = []

array.forEach(arr => {
    const number = arr * 2
    return numberOne.push(number)
})
console.log(numberOne)
// function Sortnumber(a,b){
//     return b-a
// }
// // console.log(number.sort(Sortnumber))

// let string = "Hom nay troi mua to qua di thoi ne !"
// let words = string.split(" ").filter(words => words.length >=3)
// words.sort((a,b) => b.length - a.length)
// console.log(words)

// const num = [10,20,4,6,9]
// let numberList = []

// num.forEach(number =>{
//     const nums = number * 2
//     numberList.push(nums)
// })
// console.log(numberList)
