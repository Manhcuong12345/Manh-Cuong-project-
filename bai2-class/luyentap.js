

// var phoneNumber = "098-808-4884"

// var reg = /20\d{2}/g
// var reg2 = /^\d{3}\-\d{3}\-\d{4}$/

// console.log(str.replace(phoneNumber))

const phoneNumber = [
    '086-895-307',
    '070.678.70',
    '0821 123 324',
    '0821/123/324',

]

//dùng replace để điểu chỉnh giống định dạng điện thoại
function checknumber(phoneNumber) {
    return phoneNumber.map((str) => str.replace(/[-. /]/g,'') )
}
// console.log(checknumber(phoneNumber))

// var myRe = /d(b+)d/g;
// var myArray = myRe.exec("cdbbdbsbz");
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
// console.log(myArray)
var str = "WEBCOBAN.VN huong dan hoc lap trinh web";
var reg = /webcoban/;
var result = reg.test(str);
console.log(result);