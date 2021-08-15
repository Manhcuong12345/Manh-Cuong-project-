const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//** Jsonwebtoken */
const obj = {
    name:"Quang",
    email: "quang@gmail.com",
    age:23,
    password:"cuong123"
}
//– “iat” viết tắt của Issued at, là nhãn thời gian lúc mà cái token được tạo.
// const token = jwt.sign({foo:'bar'},'dungchoaibiet')
const tokens = jwt.sign(obj,'khongaibiet')
// console.log(token)
// console.log(tokens)
console.log('========================================')
try{
// const decode = jwt.verify(token,'dungchoaibiet')
const decodes = jwt.verify(tokens,'khongaibiet')
// console.log(decodes)
}catch(err){
    console.log(err)
}


//**  */
const user = {
   name:"Cuong",
   password:"caicui123"
}

const pass = "cuong1234"
const pass1 = "caicui123"

const salt = bcrypt.genSaltSync(10)
// const hash = bcrypt.hashSync(user.password,salt)
const hash = bcrypt.hashSync(pass,salt)
console.log(hash)
// const compare = bcrypt.compareSync(user.password,hash)
const compare = bcrypt.compareSync(pass1,hash)
console.log(compare)