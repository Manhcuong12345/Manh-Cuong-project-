const gamePlay = ["Call of duty","The Witcher 3","FiFa 4","LoL","Day Gone"]
const check = gamePlay.includes("LoL")
console.log(check)

// bai toan ton vinh hoc sinh gioi 

const allStudents = ["Hai","Cuong","Trung","Hieu","Dung","Khang","Vinh"]
const honorRoll = ["Cuong","Trung","Hieu","Hai"]

function Checkhonor(StudentAll,Rollhonor) {
    //kiem tra xem danh sach ho sinh co hay khong
    if(StudentAll.length !== 0){
       const honor = StudentAll.shift()
    //    console.log(honor)
       const students = Rollhonor.includes(honor)
    //    return students
       if(students){
           return `Hoc sinh gioi la ${honor}`
       }else{
           return `${honor} Khong phai hoc sinh gioi`
       }
    }
}

while(allStudents.length !==0){
console.log(Checkhonor(allStudents,honorRoll))
}


