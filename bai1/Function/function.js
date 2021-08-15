//Phan biet
function getName() {
    const firstName = "Cuong"
    console.log(`Toi ten ${firstName} xin chao !`)
}
// getName()
// getName()
// getName()
////////////////////////////////////////////////////////////////
function GetName(name) {
    console.log(`Toi ten ${name} xin chao !`)
}
// GetName("Cuong")
// GetName("Minh")
/////////////////////////////////////////
//**Bai Toan Tim diem kiem tra trung binh */
function resultStudent(firstName, test1, test2, test3, test4) {
    //tao bien trung binh
    const average = (test1 + test2 + test3 + test4) / 4
    const checkAverage = average >= 70 ? true : false
    const letterAvg = average >= 90 ? "A" : average >= 80 ? "B" : average >= 60 ? "C" : average >= 50 ? "D" : "F"
    return `Hoc sinh ${firstName} duoc so diem ${average} va khi kiem tra ${checkAverage} xep loai ${letterAvg}`
}

const Linhresult = resultStudent("Cuong",100,95,80,90)
console.log( Linhresult)

//////////////////////////////////////////////////////////////////
//** Tinh tong so */
function result(number1,number2,number3){
    const results = number1 + number2 + number3
    console.log( results)
}
// result(5,6,7)
///////////////////////////////////
function Result(number1,number2,number3){
    return number1 + number2 + number3
}
// console.log(Result(5,6,7))

const Number = function(number1,number2,number3){
     return number1 + number2 + number3
}
const check = Number(5,6,7)
// console.log(check)

////////////////////////////////////////////////

const myAge = function(name,birthyear){
        const yearNow = new Date().getFullYear()
        return `Toi ten ${name} nam nay toi ${yearNow - birthyear} tuoi`
        
}

const Age = myAge("Cuong",2000)
// console.log(Age)