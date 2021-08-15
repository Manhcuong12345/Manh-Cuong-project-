const day1 = new Date()
// console.log(day1)
const d = day1.getDay()
// console.log(d)
const date1 = new Date()
// console.log(date1)
const d2 = date1.getDate()
// console.log(d2)


const a = new Date('August 19, 1975 23:15:30')
// a.setDate(23)
// console.log(a.getDate())

const b = new Date('August 19, 1975 23:15:30')
// console.log(b.setMonth(b.getMonth()+1))
const bb = new Date(180375330000)
// console.log(bb)

console.log(b.setHours(b.getHours()+1))
const cc = new Date(177700530000)
console.log(cc)

console.log('============================')

console.log(b.setMinutes(b.getMinutes()+1))
const dd = new Date(177700590000)
console.log(dd)

console.log('============================')

console.log(b.setSeconds(b.getSeconds()+1))
const ee = new Date(177700591000)
console.log(ee)

console.log('============================')

console.log(b.setFullYear(b.getFullYear()+1))
const rr = new Date(209322991000)
console.log(rr)