const path = require('path');
//goi htttp ded su dung socket.io
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/message')
const { userJoin, getCurrentUser, userLeave, getRoomUser } = require('./utils/users')
const app = express();
//Tao 1 bien may chu
const server = http.createServer(app)
//Tao bien io chuyen vao may chu 
const io = socketio(server)
//Thiet lap public dung path 
app.use(express.static(path.join(__dirname, 'public')))

//gán botName = chuỗi nào đó 
const botName = 'Chát nhắn tin';
//Chay khi nguoi dung ket noi vao
// const manguser = []
// var checklogin = function(req,res,next){
//     if(!req.username){
//         res.redirect('/index')
//     }else{
//         next()
//     }
// }

// app.get("/",checklogin,function(req,res){
//        if(manguser.indexOf(req.username)<0){
//            manguser.push(req.username)
//        }
//        res.render('index')
// })


io.on('connection', socket => {
    // console.log('New WS connection...')
    //Hiển thị thông báo trên web thay vì News WS connection
    socket.on('joinRoom', ({ username, room }) => {
        //Gán biến người dùng user, user tham gia sẽ có id
        //   và tên gười dùng đó với phòng
        //socket.id đó sẽ là id của người dùng      
        const user = userJoin(socket.id, username, room)
        //user đó tham gia phòng// tu dong xem thu cai room nay co chua neu co thi khong cho phep chon nua
        socket.join(user.room)
        //phát ra 1 sự kiện với socket cho 1 người dùng
        socket.emit('message', formatMessage(botName, 'Chào mừng bạn đã đến web chat!!'))

        //Giả sử phát sóng ra cho mọi người dùng kết nối
        socket.broadcast.to(user.room).to(user.username).emit('message', formatMessage(botName, `${user.username} đã tham gia vào nhóm chát!!`))
        
        //Phát sóng ra web ai đã ra  vào Chát
        io.to(user.room).emit('roomUser',{
            room: user.room,
            users: getRoomUser(user.room)
        })
    // }
    })

    //Lắng nghe chat bên main.js ta đã làm để hiện lên web
    socket.on('chatMessage', msg => {
        //Gán biến user để lấy ra id
        const user = getCurrentUser(socket.id)
        
        // phát ra dưới dạng thông báo giống như mấy cái khác
        io.to(user.room).to(user.room).emit('message', formatMessage(user.username, msg))
    })

    //Khi người dùng thoát kết nối
    socket.on('disconnect', () => {
        const user = userLeave(socket.id)
        //Kiểm tra nếu user tồn tạ
        if (user) {
            io.to(user.room).emit('message', formatMessage(botName, `${user.username} đã rời khỏi nhóm chát !!`))
            //Phát sóng ra web ai đã tham gia vào Chát, ngắt kết nối
            io.to(user.room).to(user.room).emit('roomUser',{
                room: user.room,
                users: getRoomUser(user.room)
            })
        }
    })

    //Phát sóng ra web ai đã tham gia vào Chát
})

const PORT = 3000 || process.env.PORT

server.listen(PORT, () => {
    console.log('Sever running port 3000')
})