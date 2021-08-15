const bcrypt = require('bcrypt')

const password = "1234"
const password1 = "12345"


const user = {
    email: "user@example.com",
    password:"caicui111",
    phone:0868963075
}
// static async password(req,res,next){
//     const salt = await bcrypt.genSalt(10)
// }

const salt =  bcrypt.genSaltSync(10)
const hash =  bcrypt.hashSync(user.password,salt)

const compare = bcrypt.compareSync(user.password,hash)

console.log(hash)
console.log(compare)
