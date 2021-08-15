//tạo 1 biến moment thời gian
const moment = require('moment')
//tạo hàm thông báo chug gồm tên và đoạn text
function formatMessage(username,text){
    return {
        username,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage
