
const ageMen = 17
const hasCat = false

if(ageMen >= 16 && hasCat) {
    console.log("Nguoi du tuoi de nuoi con meo")
}else if(ageMen < 18 && !hasCat) {
    console.log("Khong duoc pheo nuoi meo vi meo vi chua du tuoi")
}else if(hasCat) {
    console.log("Con meo du tuoi de nuoi")
}else{
    console.log("Khong duoc phep nuoi meo")
}