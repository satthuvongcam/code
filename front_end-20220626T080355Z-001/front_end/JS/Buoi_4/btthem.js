// Hàm điều kiện IF else 

// Bài 1 :
//  Áp dụng hàm điều kiện ( if else ) để giải phương trình bậc 2 : ax2 + bx + c = 0

// var a = 1
// var b = 2
// var c = 1
// var x1, x2
// var denta = b*b - 4*a*c
// if(a == 0) {
//     if(b == 0) {
//         console.log('pt vô nghiệm');
//     } else {
//         console.log(-b/a);
//     }
// } else if (denta < 0) {
//     console.log('pt vô nghiệm');
// } else if (denta == 0) {
//     console.log(-b/(2*a));
// } else {
//     x1 = (-b + denta**(1/2)) / (2*a)
//     console.log(x1);
//     x2 = (-b - denta**(1/2)) / (2*a)
//     console.log(x2);
// }

// Bài 2  : Áp dụng hàm điều kiện  ( if else)
// Cho biến soDienThoai là một array gồm nhiều  số nguyên dương  bất kỳ .. 
// Nếu soDienThoai để trống thì in ra  “Không được để trống “ 
// Nếu soDienThoai  ít hơn hoặc nhiều hơn 10 phần tử thì in ra  “ Sđt không hơp lệ “ 
// Nếu soDienThoai  có 10 phần tử “SĐT hợp lệ “ và in ra soDienThoai 

// var soDienThoai = [0, 1, 2, 6, 5, 9, 7, 8, 2, 1]

// if (soDienThoai == '') {
//     console.log('Không được để trống');
// }
// else if (soDienThoai.length < 10 || soDienThoai.length > 10) {
//     console.log('SĐT không hợp lệ');
// } else {
//     console.log('SĐT hợp lệ', soDienThoai);
// }

// Bài 3 
// Khái báo biến sanPham là số lượng sản phẩm mà người mua nhập vào  . 
// Tính tiền Hàng  bằng hàm điều kiện if else  biết 
// mua lẻ  1 đên 20 sản phẩm  giá  10000/ sản phẩm
// Nếu mua  > 20 sản phẩm thì giá là 8000/ sản phẩm 
// Nếu mua > 50  sản phẩm thì giá là 7000/ sản phẩm 
// Nếu mua > = 100 sản phẩm thì giá là 6000/ sản phẩm . 

// var sanPham = 100
// var tongTien = 0
// if(sanPham >= 1 && sanPham <= 20) {
//     tongTien = sanPham * 10000
// } else if (sanPham <= 50) {
//     tongTien = 20 * 10000 + (sanPham - 20) * 8000
// } else if (sanPham < 100) {
//     tongTien = 20 * 10000 + 30 * 8000 + (sanPham - 50) * 7000
// } else {
//     tongTien = 20 * 10000 + 30 * 8000 + 49 * 7000 + (sanPham - 99) * 6000
// }
// console.log(tongTien);

// Bài 4 
// var arr4  = [1,2,5,10,3,7,4,8,9,25];

// a ) In ra các số chia hết cho 5 . 
// b ) In ra các số chẵn  và số lẻ trong arr4 
// c ) in ra các số .>  9 trong arr4 

// for(var i = 0; i < arr4.length; i++) {
//     if(arr4[i] % 5 == 0) {
//         console.log(arr4[i]);
//     }
// }

// for(var i = 0; i < arr4.length; i++) {
//     if(arr4[i] % 2 == 0) {
//         console.log('Số chẵn', arr4[i]);
//     } else {
//         console.log('Số lẻ', arr4[i]);
//     }
// }

// for(var i = 0; i < arr4.length; i++) {
//     if(arr4[i] > 9) {
//         console.log(arr4[i]);
//     }
// }

// Bài 5  : 

// Khai báo một biến tienLuong  với giá trị là số lương của bạn mong muốn . 
// Tính số tiền lương thực lãnh của bạn . Biết rằng : 
// Lương thực lãnh  = tienLuong - thuế .
// và : 
// 30% thuế thu nhập nếu lương là 25 triệu. 
// 15% thuế thu nhập nếu lương từ 7 đến 25 triệu.
// 7% thuế thu nhập nếu lương dưới 7 triệu.

// var tienLuong = 25000000
// var luongThucLanh = 0
// if(tienLuong < 7000000) {
//     luongThucLanh = tienLuong - 0.07 * tienLuong
// } else  if(tienLuong < 25000000) {
//     luongThucLanh = tienLuong - 0.15 * tienLuong
// } else if(tienLuong == 25000000) {
//     luongThucLanh = tienLuong - 0.3 * tienLuong
// }
// console.log(luongThucLanh);

// Bài 6 :  
// Xếp loại học sinh theo điểm trung Bình . 
// Nếu:
// Điểm trung bình >= 9.0 là Loại A.
// Điểm trung bình >=7.0 và < 9.0 là loại B
// Điểm trung bình >=5.0 và < 7.0 là Loại C
// Điểm trung bình <5.0 là Loại F

// var diemTB = 8
// if(diemTB >= 9) {
//     console.log('Loại A');
// } else if(diemTB >= 7) {
//     console.log('Loại B');
// } else if(diemTB >= 5) {
//     console.log('Loại C');
// } else {
//     console.log('Loại F');
// }

// Vòng lặp while 
// Bài 1  :
// ÁP dụng vòng lặp while In ra các số lẻ , nguyên dương  > 9 và < = 25 . 

// var i = 10
// while(i <= 25) {
//     if(i % 2 != 0) {
//         console.log(i);
//     }
//     i++
// }

// Bài 2  :  Áp dụng vòng lặp while 

// var arr1 = [1,2,4,6,3,7,4,8,9]

// a ) Tính tổng các phần tử trong arr1
// b ) Tính tích các phần tử trong arr1 
// c ) Tính tổng  và  tích các số chẵn trong arr1 
// d ) Đếm xem có bao nhiêu số chẵn và số lẻ trong Arr1 

// var sum = 0
// var i = 0
// while(i < arr1.length) {
//     sum += arr1[i]
//     i++
// }
// console.log(sum);

// var multy = 1
// var j = 0
// while(j < arr1.length) {
//     multy *= arr1[j]
//     j++
// }
// console.log(multy);

// var chan = []
// var a = 0
// while(a < arr1.length) {
//     if(arr1[a] % 2 == 0) {
//         chan[chan.length] = arr1[a]
//     }
//     a++
// }
// var x = 0
// var y = 0
// var s = 0
// var Multy = 1
// while(x < chan.length) {
//     s += chan[x]
//     x++
// }
// console.log(s);
// while(y < chan.length) {
//     Multy *= chan[y]
//     y++
// }
// console.log(Multy);

// var cnt = 0
// var Cnt = 0
// var z = 0
// while(z < arr1.length) {
//     if(arr1[z] % 2 == 0) {
//         ++cnt
//     } else {
//         ++Cnt
//     }
//     z++
// }
// console.log('Số số chẵn:', cnt, 'Số số lẻ:', Cnt);


// Bài 3  
// var arr2 = [1,3,4,6,13,7,4,48,39] 
// a ) Tìm phần tử lớn nhất và nhỏ nhất trong arr2
// b )  Lấy ra số lẻ lớn nhất trong arr2 

// var max = arr2[0]
// var min = arr2[0]
// var i = 0
// var j = 0
// while(i < arr2.length) {
//     if(arr2[i] > max) max = arr2[i]
//     i++
// }
// console.log('Max =',max);

// while(i < arr2.length) {
//     if(arr2[i] < min) min = arr2[i]
//     j++
// }
// console.log('Min =',min);

// var a = 0
// var Max
// while(a < arr2.length) {
//     if(arr2[a] % 2 != 0) {
//         Max = arr2[a]
//         break
//     }
//     a++
// }
// while(a < arr2.length) {
//     if(arr2[a] % 2 != 0) {
//         if(arr2[a] > Max) Max = arr2[a]
//     } 
//     ++a
// }
// console.log('Max =', Max);

// Vòng lặp for
// Bài 1 :  Sử dụng vòng lặp for 
// var arr3 = [1,3,42,61,13,7,4,38,29] 
// a ) tính tổng các phần tử trong arr3
// b ) Tính Tích các phần tử trong arr3 
// c ) Tìm số lớn nhất và nhỏ nhất trong arr3 
// d ) có bao nhiêu số chẵn và bao nhiêu số lẻ trong arr3 
// e ) Tìm ra số chẵn lớn nhất và số lẻ nhỏ nhất . 

// var sum = 0
// for(var i = 0; i < arr3.length; i++) {
//     sum += arr3[i]
// }
// console.log(sum);

// var multy = 1
// for(var i = 0; i < arr3.length; i++) {
//     multy *= arr3[i]
// }
// console.log(multy);

// var max = arr3[0]
// var min = arr3[0]
// for(var i = 0; i < arr3.length; i++) {
//     if(arr3[i] > max) max = arr3[i]
// }
// console.log(max);
// for(var i = 0; i < arr3.length; i++) {
//     if(arr3[i] < min) min = arr3[i]
// }
// console.log(min);

// var cnt = 0
// var Cnt = 0
// for(var i = 0; i < arr3.length; i++) {
//     if(arr3[i] % 2 == 0) ++cnt
//     else ++Cnt
// }
// console.log(cnt, Cnt);

// var chan = []
// var le = []
// for(var i = 0; i < arr3.length; i++) {
//     if(arr3[i] % 2 == 0) {
//         chan[chan.length] = arr3[i]
//     } else {
//         le[le.length] = arr3[i]
//     }
// }
// var Max = chan[0]
// for(var i = 0; i < chan.length; i++) {
//     if(chan[i] > Max) Max = chan[i]
// }
// console.log(Max);
// var Min = le[0]
// for(var i = 0; i < le.length; i++) {
//     if(le[i] < Min) Min = le[i]
// }
// console.log(Min);

// Bài 2 :  
// var arr4 =   [1,3,2,13,5,7,4,38,29] 
// a ) sắp xếp arr4 theo thứ tự tăng dần 
// b ) sắp xếp arr4 theo thứ tự giảm dần 

// for(var i = 0; i < arr4.length - 1; i++) {
//     for(var j = i + 1; j < arr4.length; j++) {
//         if(arr4[i] > arr4[j]) {
//             var tg = arr4[i]
//             arr4[i] = arr4[j]
//             arr4[j] = tg
//         }
//     }
// }
// console.log(arr4);
// for(var i = 0; i < arr4.length - 1; i++) {
//     for(var j = i + 1; j < arr4.length; j++) {
//         if(arr4[i] < arr4[j]) {
//             var tg = arr4[i]
//             arr4[i] = arr4[j]
//             arr4[j] = tg
//         }
//     }
// }
// console.log(arr4);

// Bài 3 
// var array = [1,9,3,7,6,4,5,2]
// a, Dùng vòng lặp for để in ra tổng các số lẻ trong array sau
// b, Dùng vòng lặp for để in ra tích các số trong array 

// var s = 0
// for(var i = 0; i < array.length; i++) {
//     if(array[i] % 2 != 0) {
//         s += array[i]
//     }
// }
// console.log(s);

// var multy = 1
// for(var i = 0; i < array.length; i++) {
//     multy *= array[i]
// }
// console.log(multy);


// Bài 4 : Sử dụng for of
// var Luong = [
//     {
//         ten:'Anh',
//         luong:1000
//     },
//     {
//         ten:'Duy',
//         luong:2000
//     },
//     {
//         ten:'Thai',
//         luong:4000
//     }
// ]
//  a )Tính tổng luong của Anh , Duy  và Thái .
//  b )Tìm xem lương của ai lớn nhất , lương của au nhỏ nhất  .  
// c ) Sắp xếp thứ tự theo lương  .

// var s = 0
// for(var value in Luong) {
//     s += Luong[value].luong
// }
// console.log(s);

// var max = Luong[0].luong
// for(var value in Luong){
//     if(Luong[value].luong > max) {
//         max = Luong[value].luong
//     }
// }
// console.log(max);
// var min = Luong[0].luong
// for(var value in Luong){
//     if(Luong[value].luong < min) {
//         min = Luong[value].luong
//     }
// }
// console.log(min);

// for(var value in Luong){
//     for(var number in Luong) {
//         if(Luong[value].luong > Luong[number].luong) {
//             var tg = Luong[value].luong
//             Luong[value].luong = Luong[number].luong
//             Luong[number].luong = tg
//         }
//     }
// }
// console.log(Luong);

// Bài 5 :  Sử dụng vòng lặp for 
var sanPham = [
{ten :"Túi xách",
    gia:10000,
    soLuong:100
},
{ten :"dày",
gia:15000,
soLuong:30
},
{ten :"Dép",
gia:12000,
soLuong:30
},
{ten :"Ví",
gia:101000,
soLuong:20
}];

// a  ) Tính tổng số lượng các sản phẩm trên  . 
// b ) Xếp các sản phẩm theo giá tăng dần . 
// c ) Sử dụng vòng lặp để tìm sản phẩm có giá là 101000 đ . (In ra tên giá và số lượng)
// d ) Sử dụng vòng lặp để tìm sản phẩm theo tên người dùng nhập vào  .

// var sum = 0
// for(var value in sanPham) {
//     sum += sanPham[value].soLuong
// }
// console.log(sum);

// for(var i = 0; i < sanPham.length - 1; i++){
//     for(var j = i + 1; j < sanPham.length; j++) {
//         if(sanPham[i].gia > sanPham[j].gia) {
//             var tg = sanPham[i].gia
//             sanPham[i].gia = sanPham[j].gia
//             sanPham[j].gia = tg
//         }
//     }
// }
// console.log(sanPham);

// for(var value in sanPham) {
//     if(sanPham[value].gia == 101000) {
//         console.log(sanPham[value]);
//     }
// }

// for(var value in sanPham) {
//     console.log(sanPham[value].ten);
// }

// Bài 6 :  Cho array sau  : 
// var arr6 =  [1,13,2,6,4,8];

// a ) Tính tổng ,hiệu, tích , chia , tất cả các phần tử trong arr6 . 
// b ) Sắp xếp arr6 theo thứ tự tăng dần và giảm dần .  

// var tong = 0
// var hieu = 0
// var tich = 1
// var chia = 1

// for(var i = 0; i < arr6.length; i++){
//     tong += arr6[i]
//     hieu -= arr6[i]
//     tich *= arr6[i]
//     chia /= arr6[i]
// }
// console.log(tong, hieu, tich, chia);

// for(var i = 0; i < arr6.length - 1; i++) {
//     for(var j = i + 1; j < arr6.length; j++) {
//         if(arr6[i] > arr6[j]) {
//             var tg = arr6[i]
//             arr6[i] = arr6[j]
//             arr6[j] = tg
//         }
//     }
// }
// console.log(arr6);
// for(var i = 0; i < arr6.length - 1; i++) {
//     for(var j = i + 1; j < arr6.length; j++) {
//         if(arr6[i] < arr6[j]) {
//             var tg = arr6[i]
//             arr6[i] = arr6[j]
//             arr6[j] = tg
//         }
//     }
// }
// console.log(arr6);

// Bài 7
// Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).

// var sum = 0
// var n = 4
// for(var i = 0; i <= n; i++) {
//     sum += i * (i + 1)
// }
// console.log(sum);
