//Ham goi lai gia tri callback khi cho nao ma co thoi gian thuc thi lau hon thi dung
function a(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log(1)
            // callback()
            resolve()
            // reject()
            // callback()
        },3000)
    })
    
}

function b() {
    return new Promise(function (resolve,reject) {
        setTimeout(()=>{
            console.log(2)
            resolve()
        },2000)
    })
}

// b()

// a().then(function () {
//     b()
// })
// .catch(function(err) {
//     console.log(err)
// })

async function e() {
    await a()
    await b()
    console.log(3)
}
 e()