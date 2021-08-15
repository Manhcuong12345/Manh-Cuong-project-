const { User } = require('../model/test')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const axios = require('axios')


class UserController {

    static async createUser(req, res, next) {
        const URL = 'http://localhost:3000/api/users'
        const options = {
            url: URL,
            method: 'POST',
            data: {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(options.data.password, salt)
        const compare = await bcrypt.compare(options.data.password, hash)
        const { token } = req.body
        const json = await jwt.verify(token, '122344')

        axios(options)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))

        let responess = {
            options: options.data,
            salt: salt,
            hash: hash,
            compare: compare,
            json: json
        }
        res.send(responess)


        // const user = new User({
        //     name: 'CUong',
        //     email: 'Duc',
        //     password: 'cu1234',
        //     phone: '012021313',
        //     address: 'Nha Trang'
        // })
        // const salt = await bcrypt.genSalt(10)
        // const password = await bcrypt.hash(user.password, salt)
        // const comparePass = await bcrypt.compare(user.password, password)
        // const {token} = req.body
        // const uas = await jwt.verify(token,'122344')
        // //    console.log(hash)
        // let response = {
        //     user, password, salt,comparePass,uas
        // }
        // console.log(response)
        // res.send(response)
    }


    static async getAllUser(req, res, next) {
        const user = { name: 'cuong', email: 'test@example.com', password: 'cu123' }
        const token = await jwt.sign(user, '122344')
        res.send(token)
        // const user = { name: 'cuong', email: 'test@example.com', password: 'cu123' }
        console.log(user)
        res.send(user)
        res.render("test")

    }

    static async updateUser(req, res, next) {
        const URL = 'http://localhost:3000/api/users'
        const options = {
            url: URL,
            method: 'PUT',
            data: {
                name: 'CUong',
                email: 'Duc',
                password: 'cu1234',
                phone: '012021313',
            }
        }
        options.data.name = req.body.name
        options.data.email = req.body.email
        axios(options).then(response => { console.log(response) })
            .catch(err => { console.log(err) })

        res.send(options.data)

        // const user = new User({
        //     name: 'CUong',
        //     email: 'Duc',
        //     password: 'cu1234',
        //     phone: '012021313',
        //     address: 'Nha Trang'
        // })

        // user.name = 'Huy'
        // user.email = 'duc@gmail.com'

        // let response = {
        //     user
        // }
        // res.send(response)
    }

    static async deleteUser(req, res, next) {
        const options = {
            url: 'http://localhost:3000/api/users',
            method: 'DELETE',
            data: {
                name: 'Cuong',
                email: 'Duc',
                password: 'cu1234',
                phone: '012021313',
            }
        }

        axios(options).then(response => { console.log(response.data) })
            .catch(error => { console.log(error) })

        if (!options) return res.status(400).send({ error_message: 'Delete is fail' })

        res.send(options.data)

        // const user = new User({
        //     name: 'CUong',
        //     email: 'Duc',
        //     password: 'cu1234',
        //     phone: '012021313',
        //     address: 'Nha Trang'
        // })
        // if (user) {
        //     return res.status(200).send({ message: 'Delete success' })
        // } else {
        //     return res.status(200).send({ message: 'Delete is not' })
        // }
    }

}

exports.UserController = UserController