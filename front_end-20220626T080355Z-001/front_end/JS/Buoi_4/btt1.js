// Bài 1 : Một function với đầu vào là một Array  .với giá trị là các số nguyên .   
// a )  in ra tổng các phần tử của Array  
// b ) Tìm giá trị Min và Max của Array đó . 
// c ) Tính trung bình cộng của array đó 

// function tong(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// var result = tong([1,2,3,4,5])
// console.log(result);

// function min(arr) {
//     var min = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] < min) min = arr[i]
//     }
//     return min
// }
// console.log(min([1,2,3,4,5]));
// function max(arr) {
//     var max = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > max) max = arr[i]
//     }
//     return max
// }
// console.log(max([1,2,3,4,5]));

// function TBC(arr) {
//     var sum = 0
//     var cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//         ++cnt
//     }
//     var tbc = (1.0 * sum) / cnt
//     return tbc
// }
// console.log(TBC([1,2,3,4,5]));

// Bài 2  : 
// Viết function với đầu vào là một số nguyên  n ,và một Array chứa các số . 
// Đếm xem  số n được lặp bao nhiêu lần trong Array .  Nếu không có phần tử 
// nào trùng thì in ra  “ Không có phần tử nào trùng “ . 

// function lapLai(n, arr) {
//     var n = 2
//     var cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] == n) {
//             ++cnt
//         }
//     }
//     if(cnt == 0) {
//         console.log('Không có phần tử nào trùng');
//     } else {
//         return cnt
//     }
// }
// console.log(lapLai(2, [0,2,3,4,5]));

// Bài 3 : 

// var sanPham = [
//   {
//     ten: "Túi chanel", 
//     gia: 100000,
//     doanhSo: 100,
//   },
//   {
//     ten: "áo khoác Gucci", 
//     gia: 400000,
//     doanhSo: 50,
//   },
//   {
//     ten: "Ví da Pumma", 
//     gia: 120000,
//     doanhSo: 200,
//   },
// ];
// Hãy viết function để xử lý data trên 
// a, function trả về tên hàng hóa có danh số cao nhất trong shop
// b, function trả về tên hàng hóa có danh số thấp nhất trong shop
// c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban 

// function doanhSoMax(arr) {
//     var max = arr[0].doanhSo
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].doanhSo > max) {
//             max = arr[i].doanhSo
//         } 
//     }
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].doanhSo == max) {
//             console.log(arr[i]);
//             return max
//         }
//     }
// }
// console.log(doanhSoMax(sanPham));

// function doanhSoMin(arr) {
//     var min = arr[0].doanhSo
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].doanhSo < min) {
//             min = arr[i].doanhSo
//         } 
//     }
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].doanhSo == min) {
//             console.log(arr[i]);
//             return min
//         }
//     }
// }
// console.log(doanhSoMin(sanPham));

// function doanhThuTong(arr) {
//     var tong = 0
//     for(var i = 0; i < arr.length; i++) {
//         tong += arr[i].doanhSo * arr[i].gia
//     }
//     return tong
// }
// console.log(doanhThuTong(sanPham));

// Bài 4  : 
// var  phim = [
// {ten:'Người Sắt',thoiLuong:120, danhGia:100},
// {ten:'Người Dơi',thoiLuong:180, danhGia:70},
// {ten:'Xmen',thoiLuong:150, danhGia:80},
// {ten:'Avenger 1',thoiLuong:140, danhGia:30},
// {ten:'Avenger 2',thoiLuong:180, danhGia:75},
// {ten:'Avenger 3',thoiLuong:120, danhGia:83},
// {ten:'Thor',thoiLuong:180, danhGia:73},
// {ten:'Thor',thoiLuong:180, danhGia:10}
// ]

// Viết function để xử lý data sau  :  
// a ) viết function tìm kiếm phim theo tên ( một chuỗi string)  .
// Nếu không tìm thấy thì trả về “ Không tìm thấy “.
// b ) viết function   tìm kiếm phim đánh giá ( thang điểm  / 100 ) 
// . Nếu người dùng tìm kiếm theo “Tốt nhất “ thì in ra phim có đánh giá cao nhất.
//   Nêú người dùng tìm kiếm “ Tệ nhất” thì in ra phim có đánh giá thấp nhất.

// function timKiem(arr) {
//     var ten = 'Thor';
//     var thongTin = []
//     for(var value in arr){
//         if(arr[value].ten === ten) {
//             thongTin[thongTin.length] = arr[value]
//         }
//     }
//     console.log(thongTin);
//     return thongTin.length ? thongTin : 'không tìm thấy'
// }
// console.log(timKiem(phim));

// function danhGiaLoai(a, arr) {
//     var b = ''
//     if(a == 'Tốt nhất') {
//         var max = arr[0];
//         for(var value of arr) {
//             if(value.danhGia > max.danhGia){
//                 max.danhGia = value.danhGia
//             }
//         }
//         return max
//     } else if (a == 'Tệ nhất') {
//         var min = arr[0]
//         for(var value of arr) {
//             if(min.danhGia > value.danhGia){
//                 min.danhGia = value.danhGia
//             }
//         }
//         return min
//     }
//     else {
//         b += 'không tìm thấy'
//         return b
//     }
// }
// var a = 'Tốt nhất'
// console.log(185, danhGiaLoai(a, phim));

// Bài 5 : 
// var listStudent = [{
//     name: 'Khải',
//     gender: 'boy',
//     age: 21,
//     address: 'Hà Nội'
// }, {
//     name: 'Văn anh',
//     gender: 'boy',
//     age: 22,
//     address: 'Hà Bắc'
// },{
//     name: 'Phương',
//     gender: 'boy',
//     age: 23,
//     address: 'Hà Nam'
// }]
// a, Hãy viết function để sắp xếp theo độ tuổi tăng dần 
// b ) Viết function tìm kiếm theo tên của học sinh . 
//  c ) Viết function tìm kiếm theo địa chỉ học viên . 

// function sapXep(arr) {
//     for(var i = 0; i < arr.length - 1; i++) {
//         for(var j = i + 1; j < arr.length; j++) {
//             if(arr[i].age > arr[j].age) {
//                 var tg = arr[i].age
//                 arr[i].age = arr[j].age
//                 arr[j].age = tg
//             }
//         }
//     }
//     return arr
// }
// console.log(sapXep(listStudent));

// function timKiem(a, arr) {
//     var b = []
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i].name == a) {
//             b[b.length] = arr[i]
//         }
//     }
//     return b
// } 
// var a = 'Văn anh'
// console.log(235, timKiem(a, listStudent));

// function timKiemDC(b, arr) {
//     var c = []
//     for (var i = 0; i < arr.length; i++) {
//         if(arr[i].address == b) {
//             c[c.length] = arr[i]
//         }
//     }
//     return c
// } 
// var b = 'Hà Nội'
// console.log(245, timKiemDC(b, listStudent));

// Bài 6 : 
// Viết 1 function nhập vào giá trị của 2 điểm a và b  
// Hãy tính khoảng cách giữa 2 điểm a và b trong hệ tọa độ OXY và OXYZ 

// var a = [1, 2]
// var b = [2, 3]

// function khoangCach(a, b) {
//     var d = ((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2) ** 0.5
//     return d
// }
// console.log(khoangCach(a, b));

// var x = [1,2,3]
// var y = [2,3,4]
// function khoangCach1(x, y) {
//     var d1 = ((y[0] - x[0]) ** 2 + (y[1] - x[1]) ** 2 + (y[2] - x[2]) ** 2) ** 0.5
//     return d1
// }
// console.log(khoangCach1(x, y));

// Bài 7 : 

var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]
// -) Hãy viết 1 function in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết function để tính tích của các số nguyên tố trong dãy array 

function checkSoNguyenTo(value) {
    if (value === 1) {
        return false;
    }

    if (value < 1) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false
        }
    }
    return true
}

var b = []
function nguyenTo(arr) {
    var a = []
    for(var i = 0; i < array.length; i++) {
        if (checkSoNguyenTo(array[i])) {
            a[a.length] = array[i]
            b[b.length] = array[i]
        }
    }
    return a
}
console.log(nguyenTo(array));

function tongNguyenTo(arr) {
    var s = 0
    for(var i = 0; i < arr.length; i++) {
        s += arr[i]
    }
    return s
}
console.log(tongNguyenTo(b));

function tongMang(arr) {
    var s = 0
    for(var i = 0; i < arr.length; i++) {
        s += arr[i]
    }
    return s
}
console.log(tongMang(array));

function tichNguyenTo(arr) {
    var multy = 1
    for(var i = 0; i < arr.length; i++) {
        multy *= arr[i]
    }
    return multy
}
console.log(tichNguyenTo(b));
