const day = new Date()
// const tim = day.getTime()
// console.log(tim)
const day1 = day.getDay()
const day2 = day.getDate()
const time = new Date(1627614000000).getDay()

// const times = new Date(1627614000000).getDay()
const timess = new Date(1627614000000).getDate()
// const timesss = new Date(1628182799000).getDate()
const Time = (1628182799000 + 25200000) % 86400000
// console.log(Time)
// console.log(time)
// // console.log(times)
// console.log(timess)
// console.log(timesss)
// console.log(day1)
// console.log(day2)
// console.log(day)

// const start_time = 1627614000000 + 86400000
// const date = new Date(1627614000000 + 604800000).getDate()
// const dates = new Date(1627614000000 + 604800000).getDay()

let start_time = new Date(1627614000000)
// const converttime = new Date(1627614000000)
// console.log(converttime)
// let end_time = new Date(1627617600000)
// const until_date = new Date(1628182799000)
// const converttime = new Date(1630292400000)
start_time.setMonth(start_time.getMonth()+1)
// console.log(start_time)
const monthly = start_time.getTime()
console.log(monthly)
const convertt = new Date(1630292400000)
console.log(convertt)
// const repeat = new Date(start_time).getDay()
// console.log(repeat)
// const month = new Date()

// console.log(start_time)
// console.log(end_time)
// console.log(until_date)
// console.log(converttime)
// console.log(timessss)
// console.log(date)
// console.log(dates)

///////////////////////////////////////////////////////////

const a = new Date()
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMonth())

/** SetMonth */
let event = new Date('August 19, 1975 23:15:30');
// console.log(event.getTime());
//Thiet lap thang
event.setMonth(4);
// console.log(event.getMonth());
// expected output: 3
// console.log(event);

////////////////////////////////////////////////////////////
/** setDate */
const days = new Date('August 19, 1975 23:15:30')
days.setDate(25)
// console.log(days.getDate())

//////////////////////////////////////////////////////////////////////
/** setHours */
const hours = new Date('August 19, 1975 23:15:30')
// hours.setHours(12)
// console.log(hours.getHours())
console.log('=====setHours=====')
console.log(hours.setHours(hours.getHours()+1))
const timeConvert = new Date(177700530000)
console.log(timeConvert)

console.log('=====setMonth=====')

console.log(hours.setMonth(hours.getMonth()+1))
const convert = new Date(180378930000)
console.log(convert)

console.log('=====setDay=========')
console.log(hours.setDate(hours.getDate()+1))
const convertday = new Date(177783330000)
console.log(convertday)

console.log('=====setMinue=========')
console.log(hours.setMinutes(hours.getMinutes()+1))

const convertMin = new Date(180465390000)
console.log(convertMin)

console.log('=====setfullyear=========')
console.log(hours.setFullYear(hours.getFullYear()+1))
// console.log(hours.getFullYear())
const convertYear = new Date(212087790000)
console.log(convertYear)