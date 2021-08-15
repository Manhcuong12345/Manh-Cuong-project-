const Course = require('../../models/Course')

class CourseController {

    static async getAllCourse(req, res) {
        const course = await Course.find()
        res.send(course)
    }
}

module.exports = CourseController