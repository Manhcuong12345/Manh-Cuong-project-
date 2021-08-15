//Splice trinh được sử dụng khi bạn muốn trích một mảng con từ vị trí n tới vị trí m trong mảng ban đầu
//Lưu ý mảng được trích sẽ không bao gồm phần tử thứ m

const animals =["Cat","Dog","Bear","Lion","Tiger","Mongoose"]
const animal = animals.slice(0,3)
const ani = animals.slice(-3,-1)
//gan trong mang
// const [male,female,hello] = animals.slice(0,4)
// console.log(male,female,hello)
console.log(animal)
console.log(ani)

//*** Bai toan danh van xem ai nhanh nhat */

const spellingBee = ["Cuong","Minh","Trang","Cuu","Duc"]

const [first,second,third] = spellingBee.slice(0,3)
const [last] = spellingBee.slice(-1)

console.log(`Nguoi thu 1:${first},Nguoi thu 2:${second},Nguoi thu 3:${third},Nguoi cuoi cung:${last}`)

