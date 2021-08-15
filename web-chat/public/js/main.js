//đặt biến trò chuyện và đưa vào phần tử dom để  lấy phần
//tử theo id và mẫu đó có id trò truyện
const chatForm = document.getElementById('chat-form')

//gán đọc dữ liệu và lấy xuống
const chatMessages = document.querySelector('.chat-messages')

//Lấy username và room tuwfw form URL
const roomName = document.getElementById('room-name')
const userList = document.getElementById('users')

//Lấy trên url tên và phòng ro0m
const {username,room} = Qs.parse(location.search,{
    ignoreQueryPrefix:true
})
// console.log(username,room)

//Dat bien socket = io có quyền truy cập tập lênh đó mà ta vừa thêm vào 
//io.on bên sever 
const socket = io()

//Tham gia chatroom phát ra thông báo tên va phòng
socket.emit('joinRoom',{username,room})

//Lấy ra phòng và user khi tham gia chatroom
socket.on('roomUser',({room,users}) =>{
    outputRoomName(room)
    outputUsers(users)
})

//Lắng nghe sự kiện đưa lên hien thị lên web
socket.on('message', message => {
    console.log(message)
    //Hàm xuất ra tin nhắn khi ta gõ và ấn gửi
    outputMessage(message)

    //thanh trượt xuoong khi nhắn khi
    chatMessages.scrollTop = chatMessages.scrollHeight
})

//Tạo 1 trìn nghe sự kiện để gửi biểu mẫu đó chat-form
// mess submit
/** lắng nghe để gửi sau đó tiếp nhận hoặc động submit
 * gán tham số e vào khi gửi biểu mẫu đi, nó tự động chỉ gửi đên
 * 1 e.preventDefault()
 */
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Lấy mục tiêu 1 phần tử nào đó để lấy, sau đó nhắn tin
    const msg = e.target.elements.msg.value

    //Phát ra tin nhắn lên máy chủ
    socket.emit('chatMessage', msg)

    //Xóa đi tin nhắn ở text box khi ta gửi
    e.target.elements.msg.value ='';
})

//Ouput tin nhắn lên giao diện Domino
function outputMessage(message) {
    //gán và đọc lấy ra tạo div mới khi ta gõ
    const div = document.createElement('div')
    //đọc và lấy thêm chuỗi tin nhắn
    div.classList.add('message')
    // lấy ra tin nhắn mình gõ kèm theo tên, ngày
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
    <p class="text">
       ${message.text}
    </p>`
    // In ra chuỗi từ chat sau đó tạo 1 div chile mới khi ta gõ đưa lên web
    document.querySelector('.chat-messages').appendChild(div)
}

//hàm //adđ  phòng 
function outputRoomName(room){
    //in ra room
    roomName.innerText = room
}
// add user khi tham gia chatroom
function outputUsers(users){
    //in ra list user
   userList.innerHTML =`
    ${users.map(user =>`<li>${user.username}</li>`).join('')}`
}

