const students = [
    { id: "#1", firstName: "Jessica", lastName: "Smith", age: 14 },
    { id: "#2", firstName: "Megan", lastName: "Owens", age: 16 },
    { id: "#3", firstName: "Beth", lastName: "Davis", age: 18 },
    { id: "#4", firstName: "Ben", lastName: "Brown", age: 12 },
    { id: "#5", firstName: "Jenny", lastName: "Butler", age: 17 },
  ];

  const totalAges = students.reduce((acc,cur) => acc + cur.age,0) / students.length
  const totalAge = students.reduce(function(acc,cur) {
      return acc + cur.age
  },0)
  //Tim ra tuoi lon nhat trong array
  const oldStudents = students.reduce((acc,cur)=> acc < cur.age ? acc : cur.age)
//   console.log(totalAges)
//   console.log(totalAge)
//   console.log(oldStudents)

  //** Tong Hop bai tap ve Reduce */

//   We are writing a college admissions app. It will allow us to approve applications for a top tier university, a state university, or a local community college. Write a function that takes in an object and will perform destructuring. The function should admit students to the top tier university if the following conditions are met:
// • Age is 17 or older
// • 1500 or above on SAT
// • current GPA of 3.8 or higher
// • At least 3 extra Curriculars
// • At least 3 recommendations
// • At least 3 AP classes
//  
// The function should admit students to the state university if all conditions are met:
// • Age is 17 or older
// • 1250 or above on SAT
// • current GPA of 3.0 or higher
// • At least 1 extra Curricular
// • At least 1 recommendation
// • At least 1 AP class
// The function should admit students to the community college if all conditions are met:
// • Age is 17 or older
// • 1000 or above on SAT
// • current GPA of 2.5 or higher
// If they don't qualify for any of those, we should just have a message stating that they are not ready for college. 

// Data to work with:
class Student {
    constructor(firstName, lastName, age, scoreSAT, currentGPA, extraCurriculars, recommendations, apClasses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.scoreSAT = scoreSAT;
        this.currentGPA = currentGPA;
        this.extraCurriculars = extraCurriculars;
        this.recommendations = recommendations;
        this.apClasses = apClasses;
    }
}
const student1 = new Student("Jennifer", "Davis", 17, 1400, 3.5, ["Swim Team", "Debate", "Chess Club"], ["Steven Grier", "Larry Fitzgerald", "Beth Owens"], ["AP Economics"]);
const student2 = new Student("Megan", "Brown", 17, 1500, 4, ["Golf", "English Club", "Math Club", "Chess Club"], ["Steven Grier", "Nancy Holcomb", "Betty Smith", "Jack Morgan"], ["AP Economics", "AP Calculus", "AP English"]);
const student3 = new Student("Brad", "Jenkins", 18, 1000, 2.5, ["Football", "Track and Field"], ["Coach Smith", "Coach Quill"], []);
const student4 = new Student("Alvin", "Andrews", 19, 800, 1.9, [], [], []);
const student5 = new Student("Linda", "Edwards", 16, 1100, 2.9, ["Writing Club"], ["Betty Smith"], ["AP English"]);

//Xet tung tong hop hoc sinh dat chuan vo cac truong dai hoc

function collegeStudents(firstName, lastName, age, scoreSAT, currentGPA, extraCurriculars, recommendations, apClasses){
    //xet dieu kien truong top
    let String = `Hoc sinh ${firstName} ${lastName}`
    if(age >= 17 && scoreSAT >= 1500 && currentGPA >= 3.8 && extraCurriculars.length >= 3 && recommendations.length >= 3 && apClasses.length >= 3){
       String += `Dau truong top dau`
       return String
    }else if(age >= 17 && scoreSAT >= 1250 && currentGPA >= 3.0 && extraCurriculars.length >= 1 && recommendations.length >= 1 && apClasses.length >= 1){
        String += `Dau truong dai hoc binh thuong`
        return String
    }else if(age >= 17 && scoreSAT >= 100 && currentGPA >= 2.5){
        String += `Dau truong cao dang`
        return String
    }else{
        return `Hoc sinh ${firstName} ${lastName} khong dau truong nao`
    }
}

   console.log(collegeStudents(student1))
   console.log(collegeStudents(student2))
   console.log(collegeStudents(student3))
   console.log(collegeStudents(student4))
   console.log(collegeStudents(student5))