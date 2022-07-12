// B1
// var arr = ['thai', 'linh', 'tung', 'quan', 'khang']
// hạy tạo danh sách có tên viết hoa chữ đầu [‘Thai’,’Linh’,...]

// var result = arr.map(function(value){
//     return value.replace(value[0], value[0].toUpperCase())
// })
// console.log(result);

// B2
// var string = 'nguyen thanh tung' 
// hẫy viết hoa tất cả chữ cái đầu => 'Nguyen Thanh Tung'

// function upperCaseFirstChar (string) {
//     return string.trim().split(' ').map(function(value){
//         return value.replace(value[0], value[0].toUpperCase())
//     }).join(' ')
// }
// console.log(upperCaseFirstChar(string));

// B3
// var date = '15/10/2022'
// hãy tạo ra string mới có thứ tự ngược lại ('2022/10/15')

// var string = date.split('/')
// var result = string.reverse().join('/')
// console.log(result);

// B4:
// var arrayPersons = [{
// 	name: 'Trung',
// 	class: 'Nodemy01',
// 	dateJoin: '05-02-2020',
//     age: 20
// }, {
// 	name: 'Phong',
//     class: 'Nodemy01',
//     dateJoin: '06-01-2022',
//     age: 19
// }, {
// 	name: 'Nam',
//     class: 'Nodemy02',
//     dateJoin: '25-01-2020',
//     age: 20
// }]

// 4.1 dùng .sort  để sắp xếp mảng object có tuổi tăng dần
// 4.2 dùng .filter để tìm ra những học viện tham gia trước tháng 2
// 4.3 dùng .sort để sắp xếp mảng theo ngày tham gia của học viên
// 4.4 dùng .map để tạo mảng mới, viết hoa toàn bộ Tên học viện : (Trung => TRUNG) 

// var changeData = arrayPersons

// var ageSapXep = changeData.sort(function(a, b){
//     if(a.age < b.age){
//         return -1
//     }
// })
// console.log(ageSapXep);

// var result = changeData.filter(function(value){
//     if(value.dateJoin.split('-')[1] < 02) {
//         return true
//     }
// })
// console.log(result);

// var dateSapXep = changeData.sort(function(a,b){
//     if(a.dateJoin.split('-')[0] < b.dateJoin.split('-')[0]) {
//         return -1
//     }
// })
// console.log(dateSapXep);

// var newArray = changeData.map(function(value){
//     value.name = value.name.toUpperCase()
//     return value
// })
// console.log(newArray);

// var greeting = 'Welcome to Nodemy, Nodemy is stand for Nodejs Academy';

// 5.0: đếm xem có tất cả bao ký tự
// 5.1: .indexOf tìm xem nodemy nằm ở vị trí nào
// 5.2: .indexOf tìm xem Nodemy nằm ở vị trí nào
// 5.3: dùng .startWith kiểm tra xem có bắt đầu với Welcome không
// 5.4: dùng .substring để lấy chữ Academy
// 5.5: dùng .split để tách các từ
// 5.6: dùng .trim() để xóa các dấu cách ngoài rìa
// 5.7: dùng .include để kiểm tra xem Nodemy có trong câu trên không
// 5.8  dùng .replace để thay thế Nodemy thành NODEMY
// 5.9: dùng .toUppercase để in hoa chữ cái
// 5.10 dùng .charAt để lấy 1 ký tự ở vị trí số 4

// console.log(greeting.length);

// console.log(greeting.indexOf('nodemy'));

// console.log(greeting.indexOf('Nodemy'));

// console.log(greeting.startsWith('Welcome'));

// console.log(greeting.substring(46, greeting.length));

// console.log(greeting.split(' '));

// console.log(greeting.trim());

// console.log(greeting.includes('Nodemy'));

// console.log(greeting.replace(/Nodemy/g, 'NODEMY'));

// console.log(greeting.toUpperCase());

// console.log(greeting.charAt(4));

// Bài 6: 
// var arr = ['thai', 'linh', 'tung', 'quan', 'khang']

// var data = [
// {name: 'Thai', age: 15,},
// {name: 'Kien', age: 10,},
// {name: 'Linh', age: 12,},
// {name: 'Tung', age: 11,},
// {name: 'Thinh', age: 16,},
// {name: 'Thuan', age: 13,}
// ]

// hãy tạo array chứa các object thông tin học sinh có tên trong arr
// function infoStudents(arr, arr1){
//     var list = []
//     arr.map(function(value){
//         arr1.map(function(value1){
//             if(value === value1.name.toLowerCase()) {
//                 list.push(value1)
//             }
//         })
//     })
//     return list
// }
// console.log(infoStudents(arr, data));

// Bài 7

var hocSinh = [
{name: 'Thai', age: 15,maSV:'A1001A',diemthi:{toan:8,van:7,anh:9}},
{name: 'Kien', age: 10,maSV:'B1001A',diemthi:{toan:6,van:6,anh:9}},
{name: 'Linh', age: 12,maSV:'C1001C',diemthi:{toan:8,van:7,anh:7}},
{name: 'Tung', age: 11,maSV:'A1002B',diemthi:{toan:7,van:6,anh:9}},
{name: 'Thinh', age: 16,maSV:'B1002A',diemthi:{toan:5,van:7,anh:7}},
{name: 'Thuan', age: 13,maSV:'C1003C',diemthi:{toan:7,van:7,anh:7}},
{name: 'Hai', age: 13,maSV:'C1002B',diemthi:{toan:8,van:7,anh:6}}
]

var lop =[
{name: 'A1', loai:'Lớp chọn'},
{name: 'B1', loai:'Loại B'},
{name: 'C1', Loai:'Loại C'}
]

var khoiThi = [
{name: 'A', diem:22,heso:{toan:2,van:1,anh:1}},
{name: 'B', diem:25,heso:{toan:1,van:2,anh:1}},
{name: 'C', diem:21,heso:{toan:1,van:1,anh:2}}
]

// Ví dụ  maSV: A1001A 
// A1 là tên lớp . 
// 001 là thứ tự của học sinh 
// A là khối thi. . 

// a ) Lọc các học sinh theo lớp.  
// b ) Lọc các học sinh theo Khối thi.
// c ) Tính tổng điểm của các học sinh.cho biết học sinh đó đỗ hay trượt 

function filterClass(arr, class1){
    var x = []
    arr.map(function(value){
        if((value.maSV[0] + value.maSV[1]) === class1) {
            x.push(value)
        }
    })
    return x
}
var a1 = filterClass(hocSinh, 'A1')
var b1 = filterClass(hocSinh, 'B1')
var c1 = filterClass(hocSinh, 'C1')

function filterClass(arr, class1){
    var x = []
    arr.map(function(value){
        if((value.maSV[value.maSV.length - 1]) === class1) {
            x.push(value)
        }
    })
    return x
}
var A = filterClass(hocSinh, 'A')
var B = filterClass(hocSinh, 'B')
var C = filterClass(hocSinh, 'C')

var tongDiem = hocSinh.map(function(value){
    var heSoDiem = khoiThi.filter(function(el){
        return value.maSV[value.maSV.length - 1] === el.name
    })[0].heso
    value.tongDiem = value.diemthi.toan * heSoDiem.toan + value.diemthi.van * heSoDiem.van +
    value.diemthi.anh * heSoDiem.anh
    return value
})

var checkDo = hocSinh.map(function(value){
    khoiThi.filter(function(value1){
        return value.tongDiem >= value1.diem
    })
    return value
})
console.log(checkDo);










