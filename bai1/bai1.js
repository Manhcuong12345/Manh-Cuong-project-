const arr = [10, 29, 30, 40]

arr.forEach(array => {
    // console.log(array)
})

for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i])
}

const number = arr.filter(array => array % 2 == 0)
const numbers = arr.filter(function (array) {
    if (array % 2 == 0) {
        return true
    } else {
        return false
    }
})
// console.log(number)
// console.log(numbers)

const maps = arr.map(array => array * 2)
console.log(maps)





