const express = require('express')
const router = express.Router();
const CourseController = require('../../controller/api/course.controller')

router.get('/', CourseController.getAllCourse)

module.exports = router