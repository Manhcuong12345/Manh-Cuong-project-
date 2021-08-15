const array = new Array("Meo","Chuot","Khi")
console.log(array)

const arr = [["Cuong",21],["Minh",15],["Trung",30],["Hieu",2021-1992]]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[1][1])
// Viet ham tinh tuoi bau cu va uong ruou

function ofAge(age) {
    if(age[1] >= 18) {
        return `${age[0]} nam nay ${age[1]} tuoi du dieu kien di bau cu va uong ruou`
    }else{
        return `${age[0]} nam nay ${age[1]} tuoi chua du dieu kien di bau cu va uong ruou`
    }
}
console.log(ofAge(arr[0]))
console.log(ofAge(arr[1]))
console.log(ofAge(arr[2]))
console.log(ofAge(arr[3]))
