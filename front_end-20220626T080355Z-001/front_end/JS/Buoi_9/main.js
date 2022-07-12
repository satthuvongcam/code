// tạo chuỗi 6 kí tự ngẫu nhiên
// Mỗi kí tự có giá trị 0 - 9 hoặc a - f

// var string = ''

// for(var i = 0; i < 6; i++) {
//     var randomNumber = Math.round(Math.random() * 15)
//     if(randomNumber < 10) {
//         string += randomNumber
//     } else {
//         string += String.fromCharCode(87 + randomNumber)
//     }
//     console.log(string);
// }

var ma = 'xxxx-xxxx-xxxx-xxxx'

function maNgauNhien() {
    var number = Math.round(Math.random() * 61)
    if(number < 10) {
        return number
    } else if (number <= 35) {
        return String.fromCharCode(55 + number)
    } else {
        return String.fromCharCode(61 + number)
    }
}

function formatMa(string) {
    var length = string.match(/x/g).length
    for(var i = 0; i < length; i++) {
        var random = maNgauNhien()
        string = string.replace('x', random)
    }
    return string
}
console.log(formatMa(ma));




