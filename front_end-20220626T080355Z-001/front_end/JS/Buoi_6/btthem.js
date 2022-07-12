// Bài 2:
// var array2 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5]
// -) Xóa phần tử cuối cùng và in lại array
// -)Thêm giá trị 12 vào đầu của array và in ra dãy array sau khi thêm 
// - Hãy xóa phần tử ở vị trí thứ 2 đến vị trí thứ 5 của array và in ra kết quả
// - Hãy in ra các giá trị tại vị trí từ thứ 3 đến thứ 7 của array

// (ÁP dụng array.splice )

// var changeData = array2
// changeData.pop()
// console.log(changeData);

// changeData.unshift(12)
// console.log(changeData);

// changeData.splice(2, 4)
// console.log(changeData);

// var result = changeData.filter(function(value, index){
//     if(index >= 3 && index <= 7) {
//         return true
//     }
// })
// console.log(result);

// Bài 3 
// -) sử dụng vòng lặp for để tạo 1 array mới chứa các phần tử của array trên thỏa mãn các điều kiện sau:
// var array3 = [1,4,2,4,5,7,8,3,6,4,9,1,6,5,4,3,8,9]
// a )  Tạo newArray chứa các giá trị chẵn của array3 (Áp dụng filter )
// b)Tạo newArray2 chứa các giá trị lẻ của array3 và có giá trị lớn hơn 3.

// var changeData = array3
// var result = changeData.filter(function(value, index){
//     if(value % 2 === 0) {
//         return true
//     }
// })
// console.log(result);

// var soLe = changeData.filter(function(value, index){
//     if(value % 2 !== 0 && value > 3) {
//         return true
//     }
// })
// console.log(soLe);

// Bài 4:
// var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];

// -) Hãy in ra vị trí đẩu tiên xuất hiện số 7
// -) Hãy in ra vị trí đẩu cuối cùng xuất hiện số 7
// -) Hãy sắp xếp array1 theo thứ tự tăng dần và giảm dần
// -) Sử dụng hàm filter để tạo ra array2 từ array1 chứa các phần tử có giá trị lớn hơn 5
// -) Sử dụng hàm filter để tạo ra 1 array3 chứa các giá trị thỏa mãn các điều kiện sau:
// là lớn hơn 5 và phần tử đó cộng 2 chia hết cho 3

// var changeData = array1
// var result = array1.findIndex(function(value, index){
//     if(value === 7) {
//         return true
//     }
// })
// console.log(result);

// var result = array1.lastIndexOf(7)
// console.log(result);

// changeData.sort(function(a,b){
//     return a- b
// })
// console.log('Tăng dần', changeData);

// changeData.sort(function(a,b){
//     return b - a
// })
// console.log('Giảm dần',changeData);

// var array2 = changeData.filter(function(value, index){
//     if(value > 5) {
//         return true
//     }
// })
// console.log(array2);

// var array3 = changeData.filter(function(value, index){
//     if(value > 5 && (value + 2) % 3 == 0) {
//         return true
//     }
// })
// console.log(array3);

// Bài 5:    
// var  hoaQua = [
// {ten:'Xoài',sx:'China',sl: 100},
// {ten:'Xoài',sx:'VietNam',sl: 130},
// {ten:'Xoài',sx:'ThaiLan',sl: 100},
// {ten:'Cam',sx:'China',sl: 200},
// {ten:'Cam',sx:'ThaiLan',sl: 150},
// {ten:'Nho',sx:'VietNam',sl: 120},
// {ten:'Xoài',sx:'ThaiLan',sl: 100}
// ]

// a ) Áp dụng filter lọc các trái cây có nơi sản xuất tại VietNam . 
// b ) Áp dụng  filter lọc các trái cây có số lượng (sl) > = 150 . 
// c ) Viết function lọc sản phẩm hoa quả  theo tên  .  
// d) Viết function lọc sản phẩm hoa quả  theo Nước .  
// e ) viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước .

// var changeData = hoaQua
// var result = changeData.filter(function(value, index){
//     if(value.sx === 'VietNam') {
//         return true
//     }
// })
// console.log(result);

// var quantity = changeData.filter(function(value, index){
//     if(value.sl >= 150) {
//         return true
//     }
// })
// console.log(quantity);

// function findNameProduct (name, arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].ten === name) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(findNameProduct('Xoài', hoaQua));

// function findCountryProduct (country, arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].sx === country) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(findCountryProduct('VietNam', hoaQua));

// function tongQuantityProduct (name, country, arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].ten === name && arr[i].sx === country) {
//             sum += arr[i].sl
//         }
//     }
//     return sum
// }
// console.log(tongQuantityProduct('Nho', 'VietNam', hoaQua));

// Bài 6 : 

// var array = [1,2,3,5,1,2,4,5,3,4,1] 

// chứa trạng thái sử dụng của xe đạp
// Với mỗi số 1,2,3,... là ứng với số của xe đạp được đưa ra khỏi trạm
// Hãy viết function để hiện ra xe chưa được đưa vào lại trạm.
// Lưu ý với số 1 xuất hiện 2 lần có nghĩa là xe số 1 đã được lấy khỏi trạm và được
// đưa lại về trạm .

// function fillterDuplicate(arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         var cnt = 0
//         for(var j = 0; j < arr.length; j++) {
//             if(arr[i] === arr[j]) {
//                 ++cnt
//             }
//         }
//         if(cnt % 2 !== 0) {
//             if(result.indexOf(arr[i]) === -1) {
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
// console.log(fillterDuplicate(array));


// Bài 7 :
// var arr = [1,4,2,5,7,2,8,'23',3,8,6,'a',3,9,'d',"c",11,'f','r',35,'g','b',42,'k','j','h','11'] 

// Hãy chia arr trên thành 2 array nhỏ theo kiểu dữ liệu khác nhau và sắp xép theo thứ tự tăng dần .
// Hãy tính tổng của các giá trị number và các string number trong arr
// Hãy lấy các giá trị có thuộc tính là numbet từ arr và kiểm tra 
// xem các số đó có phải là số nguyên tố hay không . 

// var changeData = arr

// var arr1 = changeData.filter(function(value){
//     if(typeof(value) === 'string') {
//         return true
//     }
// })
// console.log(arr1);
// var arr2 = changeData.filter(function(value){
//     if(typeof(value) === 'number') {
//         return true
//     }
// })
// console.log(arr2);

// arr1.sort(function(a,b){
//     if(a < b) {
//         return -1
//     }
// })
// console.log(arr1);
// arr2.sort(function(a,b){
//     return a - b
// })
// console.log(arr2);

// function checkNguyenTo(n) {
//     if(n <= 1) {
//         return false
//     } 
//     for(var i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// function soNguyenTo(array) {
//     var result = []
//     for(var i = 0; i < array.length; i++) {
//         if(typeof(array[i]) === 'number') {
//             if(checkNguyenTo(array[i])) {
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
// console.log(soNguyenTo(arr));

// Bài 8:
// var danhSach=[
//     {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
//     {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
//     {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
//     {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
//     {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
//     {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
//     {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}}
// ]

// var phanLoai = [
//     {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
//     {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
//     {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9}
// ]

// Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không! 
// Điều kiện để tính khách có nhận được ưu đãi
// hay không điều kiện để nhận ưu đãi là khách phải đạt được đủ điểm định mức 
// ứng với mỗi loại được khai báo ở array phanLoai và phải có số
// lượng ít nhất bằng với số lượng của mỗi loại đặt ra.
// Công thức tính dinhMuc = trongLuong*heSo

// function sale(arr, arr2) {
//     var result = []
//     arr.map(function(value){
//         arr2.map(function(value1){
//             if(value.phanLoai === value1.Loai) {
//                 if(value.giohang.soLuong >= value1.soLuong && 
//                 value.giohang.trongLuong * value1.heSo >= value1.dinhMuc) {
//                     result.push(value)
//                 }
//             }
//         })
//     })
//     return result
// }
// console.log(sale(danhSach, phanLoai));

// Bài 10 :
var khachHang = [
  { ten: "an", gioiTinh: "nam", diemTichLuy: 125, dichVuDangKy: "A" },
  { ten: "binh", gioiTinh: "nam", diemTichLuy: 30, dichVuDangKy: "B" },
  { ten: "hoang", gioiTinh: "nam", diemTichLuy: 51, dichVuDangKy: "C" },
  { ten: "van", gioiTinh: "nu", diemTichLuy: 75, dichVuDangKy: "D" },
  { ten: "thinh", gioiTinh: "nam", diemTichLuy: 25, dichVuDangKy: "D" },
  { ten: "lam", gioiTinh: "nam", diemTichLuy: 100, dichVuDangKy: "C" },
  { ten: "diep", gioiTinh: "nu", diemTichLuy: 162, dichVuDangKy: "B" },
  { ten: "huong", gioiTinh: "nu", diemTichLuy: 71, dichVuDangKy: "B" }
];

var dichVu = [
  { ten: "A", khuyenMai: 0.2, giaTri: 250 },
  { ten: "B", khuyenMai: 0.18, giaTri: 210 },
  { ten: "C", khuyenMai: 0.15, giaTri: 200 },
  { ten: "D", khuyenMai: 0.12, giaTri: 180 }
];

var bienLai = [
  { ten: "an", giaTri: 300 },
  { ten: "binh", giaTri: 180 },
  { ten: "hoang", giaTri: 170 },
  { ten: "van", giaTri: 100 },
  { ten: "lam", giaTri: 200 },
  { ten: "thinh", giaTri: 210 },
  { ten: "diep", giaTri: 100 },
  { ten: "huong", giaTri: 100 }
];

// // Hãy in ra danh sách các khách hàng có khả năng đăng ký 
// thẻ VIP với điều kiện điểm tích lũy lớn hơn 100 và dịch vụ đăng ký có giá trị lớn hơn 180
// // Hãy in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký
// // Hãy tính giá tiền mà mỗi người thực chất cần phải trả với hóa đơn của 
// mỗi người = giá trị tại bảng biên lai nhân với khuyến mãi ứng
// // với gói dịch vụ mà mỗi người đăng ký yêu cầu in ra dưới dạng là 1 array mới

function listCustomerVip(arr, arr2) {
    var list = []
    arr.map(function(value){
        arr2.map(function(value1){
            if(value.dichVuDangKy === value1.ten) {
                if(value.diemTichLuy > 100 && value1.giaTri > 180) {
                    list.push(value)
                }
            }
        })
    })
    return list
}
console.log(listCustomerVip(khachHang, dichVu));

function listCustomerService(arr, arr2) {
    arr.map(function(value){
        arr2.map(function(value1){
            if(value.dichVuDangKy === value1.ten) {
                value.khuyenMai = value1.khuyenMai
                value.giaTri = value1.giaTri
            }
        })
    })
    return arr
}
console.log(listCustomerService(khachHang, dichVu));

function billCustomer(arr, arr2, arr3, name) {
    var list = []
    arr.map(function(value){
        arr2.map(function(value1){
            arr3.map(function(value2){
                if(value.dichVuDangKy === value1.ten) {
                    value.giaTien = value1.khuyenMai * value2.giaTri
                    if(value.ten === name) {
                        if(list.indexOf(value) === -1) {
                            list.push(value)
                        }
                    }
                }
            })
        })
    })
    return list
}
console.log(370, billCustomer(khachHang, dichVu, bienLai, 'an'));









