
// const express = require('express')
// const router = express.Router()

// //Bai tap tao 2 ham middle
// //Cai dau tien kiem tra co bien query khong, neu khong thi cho do tiep,neu fale thi tra ve loi
// //Cai thu 2 kiem tra xem co bien quey user_id khong
// //neu khong tra ve loi, neu co chay controller, in ra man hinh authoor va user_id
// //////////////////////////////////////////////////////////
//         /*    bai Tap        */
//         function Querymiddleware(req,res,next) {
//             if(req.query.auth == 'true'){
//                 req.user = {}
//                 req.user.auth = req.query.auth
//                 return next()
//             }
//             return res.status(400).send('This is the problem')
//         }

//         function Usermiddleware(req, res, next) {
//             if(req.query.user_id == 'true') {
//                 req.user.user_id = req.query.user_id
//                 return next()
//             }
//             return res.status(400).send('Warn error issue problem')
//         }

// router.get('/method-get',Querymiddleware, Usermiddleware,function(req,res){
//     res.send(req.user)
// })

// router.post('/body',(req,res)=>{
//     res.send(req.body.name)
// })
// // router.get('/method-gets',Usermiddleware,function(req,res){
// //     res.send(req.query.user_id)
// // })

// /////////////////////////////////////////////////////////
// //Middleware
// // function Middleware(req,res,next){
// //     if(req.query.search){
// //         return next()
// //     }
// //     return res.status(404).send('Warn error')
// // }

// // function middleware(req,res,next){
// //       if(req.body.search){
// //           return next()
// //       }      
// //       return res.status(401).send('Warn error false')
// // }
// // router.post('/method-post',middleware,function(req,res) {
// //     res.send(req.body.search)
// // })

// // router.delete('/method-delete',middleware,(req,res)=>{
// //     res.send(req.body.del)
// // })

// // router.put('/method-put',middleware,(req,res)=>{
// //     res.send(req.body.put)
// // })
// // router.get('/method',middleware,function(req,res) {
// //     res.send(req.body.search)
// // })

// // router.post('/method',middleware,function(req,res) {
// //     res.send(req.body.search)
// // })

// // router.delete('/method',middleware,(req,res)=>{
// //     res.send(req.body.del)
// // })

// // router.put('/method',(req,res)=>{
// //     res.send(req.body.put)
// // })

// module.exports = router