
const age = 19
const isCitizen = false
const isRegistered = true

if(age >= 18 && isCitizen && isRegistered){
    console.log("You can voice !")
}else{
    if(age < 18){
        console.log("You can not the old !")
    }
    if(!isCitizen){
        console.log("They can voice!")
    }
    if(!isRegistered){
        console.log("They can not voice registered!")
    }
}