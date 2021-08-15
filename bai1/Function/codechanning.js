// viet bai toan tinh ngay gio phut giay trong ngay
function getHours(days){
    return days * 24
}
function getMinutes(days){
    return getHours(days) * 60
}
function getSeconds(days){
    return getMinutes(days) * 60
}

function ServiceDay(days){
    return `${days} ngay co ${getHours(days)}h co ${getMinutes(days)}p va ${getSeconds(days)}s`
}
console.log(ServiceDay(10))