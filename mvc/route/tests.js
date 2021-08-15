const express = require('express')
const router = express.Router()
const {UserController} = require('../controller/test.controller')


router.post('/',UserController.createUser)
router.get('/',UserController.getAllUser)
router.put('/',UserController.updateUser)
router.delete('/',UserController.deleteUser)


module.exports = router