// function a (){
//     setTimeout(function() {
//         console.log(1)
//     }, 3000)
// }

// //settimeout(callback, time)
// function  b() {
//     console.log(2)
// }

// var promise = new Promise((resolve, reject) => {
//     resolve("a")
// })

// // promise.then(b())

// promise.then((result)=>{
//     console.log(result)
// })
// a();
// b();


// function a(){
//     return new Promise((resolve,reject) => {
//         setTimeout(function() {
//             console.log(1)
//             resolve()
//         },3000)
//     })
// }

// function b() {
//     console.log(2)
// }

// a().then(()=>{
//     b()
// }).catch((err)=>{
//     console.log(err)
// })

// async function c(){
//     await a()
//     b()
// }

// c()

function a() {
    return new Promise (function(resolve,reject) {
    setTimeout(function () {
        console.log(1)
        // callback()
        resolve()
        reject('abcd')
    },4000)
});
}

function b() {
    return new Promise(function (resolve,reject) {
        setTimeout(function(){
        console.log(2)
        resolve()
        reject('absdsd')
    })
},5000)
    
}
// callback()
// b(a)
// promise
// b().then(function() {
//     a()    
// }).catch(function(error) {
//     console.log(error)
// })

async function c() {
    await b()
    await a()
    // a b()
    console.log(3)
    //  b()
}
c()
