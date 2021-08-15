const express = require('express')
const tests = require('../route/tests')
const axios = require('../route/axios')


async function start_up(app) {

    app.use(express.json())

    app.use('/api/users', tests)
    app.use('/api/axios',axios)
}

module.exports = start_up