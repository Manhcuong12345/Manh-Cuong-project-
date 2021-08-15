const number = [4,5,7,8,10,11,33]

function even(num){
    return num % 2 == 0
}
const value = number.filter(even)
const vals = number.filter(x => x % 2 == 0)
console.log(value)
console.log(vals)

let s = "Hom nay troi nang to qua du ma"
let words = s.split(' ').filter(word => word.length >=3)
console.log(words)
