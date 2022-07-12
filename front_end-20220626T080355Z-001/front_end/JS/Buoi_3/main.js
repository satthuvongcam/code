var user = {
    tuoi: 66,
    gioiTinh: 'nam',
    ngheNghiep: 'a'
}

if (user.tuoi > 60) {
    user.money = 3000;
}
console.log(user);

var soDien = 500

// 50 số đầu giá 2000
// 51 - 100 giá 2500
// 101 - 200 giá 3000
// 201 - 300 giá 4000
// 301 - 400 giá 5500
// 401 trở lên giá 7000

var tienDien
if (soDien > 0 && soDien <= 50) {
    tienDien = soDien * 2000;
} else if (soDien <= 100) {
    tienDien = 50 * 2000 + (soDien - 50) * 2500;
} else if (soDien <= 200) {
    tienDien =  50 * 2000 + 50 * 2500 + (soDien - 100) * 3000;
} else if (soDien <= 300) {
    tienDien =  50 * 2000 + 50 * 2500 + 100 * 3000 + (soDien - 200) * 4000;
} else if (soDien <= 400) {
    tienDien =  50 * 2000 + + 50 * 2500 + 100 * 3000 + 100 * 4000 + (soDien - 300) * 5500;
} else {
    tienDien =  50 * 2000 + + 50 * 2500 + 100 * 3000 + 100 * 4000 + 100 * 5500 +(soDien - 400) * 7000;
}
console.log(tienDien);

var username = 'Truong123'
var password = '12345'

// username phải 8 - 16 kí tự
// password phải >= 8 kí tự
// Nếu không thỏa mãn thì thông báo username quá ngắn hoặc username quá dài
// Nếu không thỏa mãn thì thông báo password quá ngắn
// Nếu thỏa mãn cả 2 báo tạo tk thành công

// if (username.length < 8) {
//     console.log('username quá ngắn');
// } else if (username.length <= 16) {    
//     if (password.length < 8) {
//         console.log('password quá ngắn');
//     } else {
//         console.log('tạo tk thành công');
//     }
// } else {
//     console.log('username quá dài');
// }

// var number = 2

// switch (number) {
//     case 0:
//         console.log('đang tắt');
//         break

//     case 1:
//         console.log('đang bật');
//         break
        
//     default: 
//         console.log('không hợp lệ');
//         break
// }

switch (username.length < 8) {
    case true:
        console.log('username quá ngắn');
        break
    
    default:
        switch (username.length > 16) {
            case true: 
                console.log('username quá dài');
                break
            
            default:
                switch (password.length >= 8) {
                    case true: 
                        console.log('tạo tài khoản thành công');
                        break

                    default:
                        console.log('password quá ngắn');
                }
        }
}

var number = 0
// while (number < 10) {
//     console.log(number);
//     number++
// }

// do {
//     console.log(number);
//     number++
// } while (number < 10)

var arr = [3,4,7,9,5,1,6,87,5]
var obj = {
    name: 'huy',
    age: 11
}
// var sum = 0
// for (var i = 0; i <= arr.length - 1; i++) {
//     sum += arr[i]
// }

for (var number of arr) {
    console.log(number);
}

for (var number in obj) {
    console.log(obj[number]);
}

var hocSinh = {
    ten: 'cuong',
    diemthi: {
        toan: 7,
        hoa: 5, 
        ly: 6
    }
}

var tongDiem = 0
for (var value in hocSinh.diemthi) {
    if (value === 'ly') continue
    tongDiem += hocSinh.diemthi[value]
}
console.log(tongDiem);


