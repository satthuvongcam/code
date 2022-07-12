
// For
// B1 
// a, Dùng vòng lặp for để in ra tổng các số lẻ trong array sau
// b, Dùng vòng lặp for để in ra tích các số trong array 
// var array = [1,9,3,7,6,4,5,2]

// var s = 0
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0) s += array[i]
// }
// console.log(s);

// var multy = 1
// for (var i = 0; i < array.length; i++) {
//     multy *= array[i]
// }
// console.log(multy);

// B2 
// a, Hãy lấy ra số lơn nhất trong array
// b, Hãy lấy ra số chẵn nhỏ nhất trong array
// var array = [1,9,3,7,6,4,5,2]

// var max = array[0]
// for(var i = 0; i < array.length; i++) {
//     if(array[i] > max) max = array[i]
// }
// console.log(max);

// var chan = []
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) chan[chan.length] = array[i]
// }
// var min = chan[0]
// for(var j = 0; j < chan.length; j++) {
//     if(chan[j] < min) min = chan[j]
// }
// console.log(min);

// B3 Hãy sắp xếp array trên theo thứ tự ngược lại
// var array = [1,9,3,7,6,4,5,2]

// var array1 = []
// for (var i = array.length - 1; i >= 0; i--){
//     array1[array1.length] = array[i]
// }
// console.log(array1);

// B4 Dùng vòng lặp for để sắp xếp array sau theo thứ tự tăng dần và giảm dần
// var array = [1,9,3,7,6,4,5,2]

// for(var i = 0; i < array.length - 1; i++) {
//     for(var j = i + 1; j < array.length; j++) {
//         if (array[i] > array[j]) {
//             var tg = array[i]
//             array[i] = array[j]
//             array[j] = tg
//         }
//     }
// }
// console.log(array);

// for(var i = 0; i < array.length - 1; i++) {
//     for(var j = i + 1; j < array.length; j++) {
//         if (array[i] < array[j]) {
//             var tg = array[i]
//             array[i] = array[j]
//             array[j] = tg
//         }
//     }
// }
// console.log(array);

// B5 Dùng vòng lặp for in để tính tổng số lượng sản phẩm
var sanPham = [
    {
      ten: "áo somi",
      soLuong: 100
    },
    {
      ten: "áo khoác",
      soLuong: 50
    },
    {
      ten: "áo phông",
      soLuong: 200
    },
];

var sum = 0
for (var value in sanPham) {
    sum += sanPham[value].soLuong
}
console.log(sum);

// if else
// B6, 
// A, Hãy xếp loại học lực học sinh theo điểm bằng if else
// B, Hãy xếp loại học lực học sinh theo điểm bằng toán tử 3 ngôi

// var score = 8
// if(score >= 9 && score <= 10) {
//     console.log('Giỏi');
// } else if (score >= 7 && score <= 8) {
//     console.log('Khá');
// } else if (score >= 5 && score <= 6) {
//     console.log('TB');
// } else console.log('Kém');

// var result = (score >= 9 && score <= 10) ? 'Giỏi' : 
// (score >= 7 && score <= 8) ? 'Khá' : (score >= 5 && score <= 6) ?
// 'TB' : 'Kém'
// console.log(result);

// B7
// Tính tiền điện 
// Từ 0 – 100 số điện giá 2000 1 số
// Từ 101 – 200 giá 3000 1 số
// Từ 201 - 300 giá 4000 1 số
// Từ 301- 500 giá 5000 1 số
// Trên 500 giá 10000 1 số
// Dùng if else

// var soDien = 200
// var tienDien = 0
// if (soDien <= 100) {
//     tienDien = soDien * 2000
// } else if (soDien <= 200) {
//     tienDien = 100 * 2000 + (soDien - 100) * 3000
// } else if (soDien <= 300) {
//     tienDien = 100 * 2000 + 100 * 3000 + (soDien - 200) * 4000
// } else if (soDien <= 500) {
//     tienDien = 100 * 2000 + 100 * 3000 * 100 * 4000 + (soDien - 300) * 5000
// } else {
//     tienDien = 100 * 2000 + 100 * 3000 + 100 * 4000 + 
//     200 * 5000 + (soDien - 500) * 10000 
// }
// console.log(tienDien);

// B8 
// Kiểm tra 1 số có phải là số nguyên tố hay không
// Biết số nguyên tố chỉ chia hết cho 1 và chính nó 

// var n = 4
// var dem = 0
// for (var i = 1; i <= n; i++) {
//     if (n % i == 0) {
//         dem++
//     }
// }
// if (dem == 2) console.log('n la so nguyen to');
// else console.log('n khong la so nguyen to');

// bài 9 :  
// cho 1 obj có 10 thuộc tính ,dùng vòng lặp  in ra tất cả các phần tất cả key và value

var sinhVien = {
    ten: 'Truong',
    tuoi: '18',
    diaChi: 'HN',
    truongHoc: 'UTT',
    biCan: 'YES'
}

for (var value in sinhVien) {
    console.log(value + ':', sinhVien[value]);
}





