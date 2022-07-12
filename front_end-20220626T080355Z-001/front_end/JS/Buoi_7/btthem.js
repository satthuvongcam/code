// Bài 1: 
// var str1 = 'Ngay moi vui ve'
// dùng .include để kiểm tra xem vui có trong câu trên không
// Hãy tách các từ trong str1 và in trong 1 
// array mới kết quả yêu cầu ['Ngay', 'moi', 'vui', 've']
// Hãy viết hoa chữ cái đầu và in lại kết quả yêu cầu 'Ngay Moi Vui Ve'
// Hãy thay vui thanh VUI gợi ý dùng replace
// Hãy lấy ký tự tại vị trí thứ 4
// Hãy in lại str1 thành 'vui ve Ngay moi

// console.log(str1.includes('vui'));

// var arr = str1.split(' ')
// console.log(arr);

// var newStr = arr.map(function(value){
//     return value.replace(value[0], value[0].toUpperCase())
// }).join(' ')
// console.log(newStr);

// var newString = str1.replace('vui', 'VUI')
// console.log(newString);

// var kq = arr.filter(function(value, index) {
//     if(index === 3) {
//         return true
//     }
// }).join(' ')
// console.log(kq);

// var newStr2 = str1.split(' ').slice(2,5).join(' ')
// var newStr1 = str1.split(' ').slice(0, 2).join(' ')
// var str = newStr2 + ' ' + newStr1
// console.log(str);

// Bài 2: 
// var ten = ['dao linh huong', 'tran ngoc diep', 'nguyen duy minh', 'dao minh nguyet', 'dao van anh']
// var thongTin = [
//     {ten: 'dao linh huong', ngaySinh:'02/28/1998'},
//     {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'},
//     {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'},
//     {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
// ]
// Hãy in lại họ tên của những người trong array ten có chữ hoa ở đầu mỗi từ VD: Dao Linh Huong
// Hãy in lại thông tin ngày sinh của mỗi người trong bảng thông tin đang từ dạng mm/dd/yyyy thành dd/mm/yyyy
// Hãy sắp xếp lại data trong array thongTin theo thứ tự ngày sinh tăng dần

// var newArray = ten.map(function(value){
//     return value.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
// })
// console.log(newArray);

// function swap (x, y) {
//     var tg = x
//     x = y
//     y = tg 
//     return [x, y]
// }

// var update = thongTin.map(function(value){
//     value.ngaySinh = swap(value.ngaySinh.split('/')[0], value.ngaySinh.split('/')[1])
//     .join('/').concat('/').concat(value.ngaySinh.split('/')[2]);
//     return value
// })
// console.log(67, update);

// var sapXep = update.sort(function(a,b){
//     if(a.ngaySinh.split('/')[2] < b.ngaySinh.split('/')[2]) {
//         return -1
//     } else if (a.ngaySinh.split('/')[2] === b.ngaySinh.split('/')[2]) {
//         if(a.ngaySinh.split('/')[1] < b.ngaySinh.split('/')[1]) {
//             return -1
//         } else if(a.ngaySinh.split('/')[1] === b.ngaySinh.split('/')[1]) {
//             if(a.ngaySinh.split('/')[0] < b.ngaySinh.split('/')[0]) {
//                 return -1
//             }
//         }
//     }
// })
// console.log(sapXep);

// Bài 3: 
// var khachHang = [
//     {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
//     {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
//     {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
//     {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
//     {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
//     {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
//     {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
//     {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'},
// ]

// var dichVu = [
//     {ten: 'A', khuyenMai: 0.2, giaTri:250},
//     {ten: 'B', khuyenMai: 0.18, giaTri:210},
//     {ten: 'C', khuyenMai: 0.15, giaTri:200},
// ]

// var phiCuoc = [
//     {tennuoc : 'Han Quoc',  giacuoc: 20},
//     {tennuoc : 'UK',  giacuoc: 30},
//     {tennuoc : 'US',  giacuoc: 29},
//     {tennuoc : 'Canada',  giacuoc: 25},
// ]


// var bienLai = [
//     {ten: 'nam', giaTri:300, diachiden: 'Han Quoc'},
//     {ten: 'hieu', giaTri:180, diachiden: 'UK'},
//     {ten: 'nam', giaTri:180, diachiden: 'US'},
//     {ten: 'tram', giaTri:180, diachiden: 'US'},
//     {ten: 'dat', giaTri:170, diachiden: 'Han Quoc'},
//     {ten: 'anh', giaTri:100, diachiden: 'UK'},
//     {ten: 'hieu', giaTri:180, diachiden: 'Han Quoc'},
//     {ten: 'lam', giaTri:200, diachiden: 'Han Quoc'},
//     {ten: 'quy', giaTri:210, diachiden: 'Canada'},
//     {ten: 'diep', giaTri:100, diachiden: 'US'},
//     {ten: 'huong', giaTri:100, diachiden: 'Canada'},
// ]

// Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguen Van Nam
// Hãy in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP 
// với điều kiện điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có giá trị lớn hơn 180
// Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký  
// Hãy tính số tiền của mỗi khách hàng cần phải trả và hiện tất cả dưới dạng 1 array object với công thức 
// tiền khách hàng cần trả = giaTri*khuyenMai + cứ khi giá trị 
// dạt 100 thì phải cộng thêm giacuoc tương đương với địa chỉ được gửi đến

// var updateName = khachHang.map(function(value){
//     value.ten = value.ten.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
//     return value
// })
// console.log(updateName);

// function listCustomerVip(arr, arr2) {
//     var list = []
//     arr.map(function(value){
//         arr2.map(function(value1){
//             if(value.dichVuDangKy === value1.ten) {
//                 if(value.diemTichLuy > 100 && value1.giaTri > 180) {
//                     list.push(value)
//                 }
//             }
//         })
//     })
//     return list
// }
// console.log(listCustomerVip(khachHang, dichVu));

// function servicesCustomer(arr, arr1, nameService) {
//     var list = []
//     arr.map(function(value){
//         arr1.map(function(value1){
//             if(value.dichVuDangKy === value1.ten && value.dichVuDangKy === nameService){
//                 list.push(value)
//             }
//         })
//     })
//     return list
// }
// var a = servicesCustomer(khachHang, dichVu, 'A')
// var b = servicesCustomer(khachHang, dichVu, 'B')
// var c = servicesCustomer(khachHang, dichVu, 'C')

// var tongTien = bienLai.map(function(value){
//     phiCuoc.map(function(value1){
//         dichVu.map(function(value2){
//             khachHang.map(function(value3){
//                 if(value3.dichVuDangKy === value2.ten) {
//                     if(value1.tennuoc === value.diachiden) {
//                         value.tongTien = value2.khuyenMai * value2.giaTri + value1.giacuoc
//                     }
//                 }
//             })
//         })
//     })
//     return value
// })
// console.log(tongTien);

// Bài 4: 
var tenKhach = [
    {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
    {ten: 'ngo van khoai', gioBay: '09:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
    {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
    {ten: 'chuyen lua gat', gioBay: '13:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
    {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
    {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'},
]

var choNgoi = [
    {ten: 'Ghe hang king', mave:'S'},
    {ten: 'Ghe hang thuong gia', mave:'A'},
    {ten: 'Ghe hang pho thong', mave:'B'},
    {ten: 'Ghe hang pho cap', mave:'C'}
]

var lichBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' }
]

// Hãy in lại tên của các khách hàng sao cho có từ viết hoa ở mỗi chữ cái vd : Nguen Van Nam
// Hãy sắp xếp lại array khách theo thời gian bắt đầu chuyến bay theo chiều tăng dần
// Hãy in ra thông các chuyến bay cùng địa điểm 
// Hãy in ra thông tin của những người cùng giờ bay và cho 
// thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào
// Hãy in ra thông tin chi tiết của người bay vào 9h30 và có 
// cả dữ liệu họ ngồi ghế ghì, trên những chuyến bay nào

// var updateName = tenKhach.map(function(value){
//     value.ten = value.ten.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
//     return value
// })
// console.log(updateName);

var sapXepGioBay = tenKhach.sort(function(a,b){
    if(a.gioBay.split(':')[0] < b.gioBay.split(':')[0]) {
        return -1
    } 
    else if(a.gioBay.split(':')[0] === b.gioBay.split(':')[0]) {
        if(a.gioBay.split(':')[1] < b.gioBay.split(':')[1]) {
            return -1
        }
    }
})
console.log(236, sapXepGioBay);

var thongTinChuyenBay = lichBay.map(function(value){
    return value
})
console.log(thongTinChuyenBay);

var result = []
function CustomerSametime (arr){
    for(var i = 0; i < arr.length - 1; i++) {
        for(var j = i + 1; j < arr.length; j++){
            if(arr[i].gioBay === arr[j].gioBay) {
                result.push(arr[i], arr[j])
            }
        }
    }
    return result
}
console.log(255, CustomerSametime(tenKhach))

var customerInfo = result.map(function(value){
    choNgoi.map(function(value1){
        lichBay.map(function(value2){
            if(value.gioBay === value2.gioBay && value.diemDen === value2.diemDen){
                value.maMayBay = value2.maMayBay
            }
            if(value.veKhoang === value1.mave){
                value.ghe = value1.ten
            }
        })
    })
    return value
})
console.log(270, customerInfo);

var list = []
var findCustomerTime = tenKhach.map(function(value){
    if(value.gioBay === '09:30') {
        list.push(value)
    }
    return value
})
console.log(279, findCustomerTime)

var findCustomerInfo = list.map(function(value){
    choNgoi.map(function(value1){
        lichBay.map(function(value2){
            if(value.gioBay === value2.gioBay && value.diemDen === value2.diemDen){
                value.maMayBay = value2.maMayBay
            }
            if(value.veKhoang === value1.mave){
                value.ghe = value1.ten
            }
        })
    })
    return value
})
console.log(294, findCustomerInfo);







