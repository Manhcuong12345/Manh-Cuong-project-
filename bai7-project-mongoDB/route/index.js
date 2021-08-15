//nap file news.js vao file index.js chinhs
const newsRouter = require('./news')
const siteRouter =require('./site')
const coursesRouter =require('./courses')
const meRouter = require('./me')
const userRouter = require('./user')
function route(app){

    app.use('/news',newsRouter)
    app.use('/me',meRouter)
    app.use('/courses',coursesRouter)
    app.use('/user',userRouter)
    app.use('/',siteRouter)

    // app.get('/',(req, res)=>{
    //     res.render('home')
    // })

    // app.get('/news',(req, res)=>{
    //     res.render('news')
    // })

    // app.get('/search',(req, res)=>{
    //     res.render('search')
    // })

    // app.post('/search',(req, res)=>{
    //     res.render('search')
    // })
}


module.exports = route
