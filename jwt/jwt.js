const jwt = require('jsonwebtoken')

const user = {
    email:"quang@123",
    password:"caicui12345"
}

const token = jwt.sign(user,'caicui123',{ expiresIn: '1h' })
console.log(token)

// const decodes = jwt.verify(token,'caicui123')
// console.log(decodes)


/** BCRYPT */