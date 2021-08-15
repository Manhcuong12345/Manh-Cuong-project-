const names = ["CUong", "Hai", "Minh", "Trung"]
const user = {
    name: "Cuong",
    age: 21,
    class: "CNTT"
}
// console.log(names[0])
// console.log(user.name)
const user1 = {
    name: "Cuong",
    age: 21,
    class: "CNTT"
}
const user2 = {
    name: "Cuong",
    age: 21,
    class: "CNTT"
}
const user3 = {
    name: "Cuong",
    age: 21,
    class: "CNTT"
}

const Alluser = [user, user1, user2, user3]
for (let i = 0; i < Alluser.length; i++) {
    const item = Alluser[i]
    // console.log(item.name + " " + item.age)
}

////////////////////////////////////////////////////////////////
let admin = {
    name: "Cuong",
    age: 21,
    class: "CNTT",
    birthYear: 2000
}
//Tinh nam sinh hen tai
function myAge(object, birthY) {
    const year = new Date().getFullYear()
    const yearOld = year - birthY
    return yearOld
}
// console.log(myAge(admin, admin.birthYear))

function getFile(files, type) {
    files = files.filter(file => file.type.includes("audio") && type === "Audio" || file.type.includes("Video") && type === "Video" || file.type.includes("img") && type === "Video")
    return files
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let objjs = {
    name: "cuong",
    age: 23,
    class: "22B",
    study: "Nha Trang",
    math: "true"
}

let props = ["study", "class", "age"]

function omit(objjs, props) {
    props.forEach(prop => {
        return delete objjs[prop]
    })
}
console.log(omit(objjs,props))

///////////////////////////////////////////
let arr1 = ["Cuong", "Minh", "Duc", "Trung"]
let arr2 = ["Cuong", "Duc", "Hai", "Tri"]

function different(arr1, arr2) {
    let diff = arr1.filter(a => !arr2.includes(a.toString()))
    console.log(diff)
    fiff = diff.concat(arr2.filter(a1 => !arr1.includes(a1.toString())))
    return diff
}
// console.log(different(arr1, arr2))



let objs = {
    name: "Cuong",
    ages: "23",
    birth: "2000",
    admin: "admin"
}

let fields = ["name", "ages", "birth"]

function getF(obj, fields) {
    let obj1 = {}
    fields.forEach(field => {
        obj1[field] = obj[field]
    })
    return obj1
}
// console.log(getF(objs,fields))

//////////////////////////////////////////////////////
let products = ["Chuoi", "Dao", "Ca", "Chuoi", "Tom", "Tom"]
function checkDuplicate(products) {
    //Cach 1
    // return (products) ? products.filter((product, pos) => products.indexOf(product) != pos) : []
    //Cach 2
    const check = products.filter((product,pos)=> products.indexOf(product) != pos)
    return check
}
console.log(checkDuplicate(products))

///////////////////////////////////////////////////
//** Ham tinh giay bang chuoi string thong qua gio va phut */
function stringToSeconds(string) {
    let [str_hour, str_minute, str_second] = string.split(":")
    let second = parseInt(str_hour) * 3600 + parseInt(str_minute) * 60
    return second
}
// console.log(stringToSeconds("22:04"))


// let stringsss = "11:10"
// let [num1,num2] = stringsss.split(':')
// let second = parseInt(num1) + parseInt(num2)
// console.log(second)

// let hour = "10"
// let minute = "20:01"
// let strings = hour.split(':')
// console.log(strings)
// let string = minute.split(':')
// console.log(string)
// let second = parseInt(strings)*3600 + parseInt(string)*60
// console.log(parseInt(strings)*3600 + parseInt(strings)*60)
// console.log(second)
/////////////////////////////////////////////////////////////////////

// Tính thời gian bắt đầu thiết lập chạy
// (start_time,end_time,play_num)
//B1:gán biến time bắt đầu và kết thúc thông qua đổi chuỗi thành giây
//B2:Tính thời gian kết thúc bằng time kết thúc + time kthuc tru timeb dau * so lan phat
//B3:check nếu time kết thức > 23:59p thi tra ve
//B4:gán biển đổi giây thành giờ đúng thì / 3600, phút chia /3600/60
//B5:chuyển biến giờ và phút thành chuỗi dùng tostring ==2 thì trả về '0' cộng với chuỗi giờ, và phút cũng vậy
//(Dùng cho số giờ khi chuẩn bị sang giờ mới vd: 9:59)
//B6:trả về time theo đúng format thời gian

function getNumPlayTime(start_time, end_tiem, play_num) {
    let start_time_sec = stringToSeconds(start_time)
    let end_time_sec = stringToSeconds(end_tiem)
    end_time_sec = end_time_sec + ((end_time_sec - start_time_sec) * (play_num - 1))
    // if (end_time_sec > 86340) end_time_sec = 86340
    let hour = Math.floor(end_time_sec / 3600)
    let min = Math.floor((end_time_sec % 3600) / 60)
    hour = (hour.toString().length == 2) ? hour.toString() : '0' + hour.toString()
    min = (min.toString().length == 2) ? min.toString() : '0' + hour.toString()
    return hour + ":" + min + ":00"
}
console.log(getNumPlayTime("10:20", "21:59", 2))
////////////////////////////////////////////////////////////////////////////////
// nextTimePlay,end_play_second
//B1: gan bien time tính giờ và phút của 2 thời gian
//B2: check xem nếu time minuete >=60 thì giờ tăng lên 1 và minute - 60 min vì ehour không tnagw tới đó là kết thúc
//B3: biến đổi biến thành chuỗi 
//B4: Trả về các biến đó bằng mảng

function playTime(nextTimePlay, end_play_second) {
    let shour = Math.floor(nextTimePlay / 3600)
    let sminute = Math.floor((nextTimePlay % 3600) / 60)
    let ehour = Math.floor(end_play_second / 3600)
    let eminute = Math.floor((end_play_second % 3600) / 60)

    if (sminute >= 60) {
        shour = shour + 1
        sminute = sminute - 60
    }

    shour = (shour.toString().length == 2) ? shour.toString() : '0' + shour.toString()
    sminute = (sminute.toString().length == 2) ? sminute.toString() : '0' + sminute.toString()
    ehour = (ehour.toString().length == 2) ? ehour.toString() : '0' + ehour.toString()
    eminute = (eminute.toString().length == 2) ? eminute.toString() : '0' + eminute.toString()
    return [shour, sminute, ehour, eminute]
}
console.log(playTime(36000,81480))


//   function calStartTimeWithDelayTime(playlist){
//     let playlists = [];
//     let start_play_second =stringToSeconds(start_time)
//     let end_play_second = stringToSeconds(end_time)
//     let loop_second = playlist.post_delay_time * 60
//     let playTime = end_play_second - start_play_second
//     let daySeconds = 86400 - start_play_second
//     let loopTimeInADay = Math.floor(daySeconds/(end_play_second - start_play_second + loop_second))

//     for( let i = 0; i < loopTimeInADay; i++ ){

//       let nextTimePlay = end_play_second + loop_second
//       end_play_second = nextTimePlay + playTime
//       let [shour,sminute,ehour,eminute] = timePlay(nextTimePlay, end_play_second)
//       let loop_playlist = {
//         ...playlist.toObject()
//       }
//       loop_playlist.start_time = shour + ":" + sminute + ":00"
//       loop_playlist.end_time = ehour + ":" + eminute + ":00"
//       playlists.splice(0,0,loop_playlist);

//     }
//     return playlists
//   }


//   let start_time_sec = stringToSeconds("10:00")
//   let end_time_sec  = stringToSeconds("21:00")
//   end_time_sec = end_time_sec + ((end_time_sec - start_time_sec) * (3 - 1))
//   if(end_time_sec > 35940) end_time_sec = 35940 // 86399 == "23:59"
//   let hour = Math.floor(end_time_sec/3600)
// //   console.log(hour)
//   let min = Math.floor((end_time_sec%3600)/60)
// //   console.log(min)
//   hour = (hour.toString().length == 2) ? hour.toString() : '0' + hour.toString()
//   console.log(hour)
//   min = (min.toString().length == 2) ? min.toString() : '0' + min.toString()
//   console.log(min)
//   const fulltime = hour + ":" + min + ":00"
//   console.log(fulltime)

////////////////////////////////////////////////////////////////////////////////////////
let device = ["ba","ds","gfg"]
let field = ["need_auto_updates", "time_for_update_app", "update_manually_from_google_play", "rotate_screen", "playing_file_update"]

function fieldsWasUpdated(device, fields) {
    let modified = {}
    let notification_fields = ["need_auto_updates", "time_for_update_app", "update_manually_from_google_play", "rotate_screen", "playing_file_update"]

    for (var key in fields) {
        if (notification_fields.includes(key)) {
            if (fields[key] != device[key]) {
                modified[key] = fields[key];
            }
        }
        //   console.log(key)
        // console.log(fields[key])
        // console.log(device[key])
    }
    return modified
}

console.log(fieldsWasUpdated(device, field))

//   for (let prop in ['a', 'b', 'c']) 
//   console.log(prop);            // 0, 1, 2 (array indexes)

// for (let prop in 'str') 
//   console.log(prop);            // 0, 1, 2 (string indexes)

// for (let prop in {a: 1, b: 2, c: 3}) 
//   console.log(prop);            // a, b, c (object property names)

// for (let prop in new Set(['a', 'b', 'a', 'd'])) 
//   console.log(prop);         