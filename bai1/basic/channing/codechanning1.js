//John has test scores of: 90, 81, 55, 70, and 80
//Megan has test scores of: 88, 75, 87, 80, and 84
//1) Calculate each person's current class score by finding the average of the grades 
//Average: sum of the numbers / number of numbers 
//2) Log to the console who has a higher class score using if/else statements 
//3) What happens if the scores are equal?

const JohnScore = (88 + 75 + 87 + 80 + 84) / 5
const MeganScore = (88 + 75 + 87 + 80 + 84) / 5

if(JohnScore > MeganScore){
    console.log(`John co so diem ${JohnScore} cao hon so diem ${MeganScore} cua Megan `)
}else if(JohnScore === MeganScore){
    console.log(`John co so diem ${JohnScore} bang voi so diem ${MeganScore} cua Megan `)
}else{
    console.log(`John co so diem ${JohnScore} thap hon so diem ${MeganScore} cua Megan `)
}