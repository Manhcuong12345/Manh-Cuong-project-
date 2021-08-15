const express = require('express')
const users = []

//Tham gia user vào chat
function userJoin(id,username,room){
    //tạo biên user gồm các giá trị đó
   const user = {id,username,room}
   const userN = users.findIndex(user => (user.username === username || user.id === id ))
    if(userN >= 0){
        return userN
    }else{
        users.push(user)
    }
    return user
}

//Lấy ra user đó
function getCurrentUser(id){
    //Ktra và trả về giá trị user có id đug là của no
    return users.find(user => user.id === id)
} 

//Thoát ra khỏi chat chat
function userLeave(id){
    const outchat = users.findIndex(user => user.id === id)
    //Kiểm tra nếu mà out ra thì ta cắt thoát ra user đó
    if(outchat !== -1){
        return users.splice(outchat, 1)[0];
    }
}

//Lấy tên trong phòng, trả về người dùng trong chat đó khi out chat
function getRoomUser(room){
    //lọc trả về phòng
    return users.filter(user => user.room === room)
}

module.exports = {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUser
}