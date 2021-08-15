const bcrypt = require('bcrypt')

const user = {
    name:"Quang",
    password:"caicui1123",
    phone:'08689633443'
}

const salt = bcryptSync.genSalt(10)
const 