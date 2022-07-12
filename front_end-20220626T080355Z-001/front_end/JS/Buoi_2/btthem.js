// Toán tử số học
// Bài 2
var a = 3
var b = 3
var c = 3

var chuVi = a + b + c
console.log(chuVi);

var tamGiacDeu = (a == b && a == c) ? 'tam giac deu' : 'khong la tam giac deu'
console.log(tamGiacDeu);

var dienTich = tamGiacDeu ? ((a ** 2 * 3 ** (0.5)) / 4) : '0'
console.log(dienTich);

// Bài 3
var banKinh = 3
var pi = 3.14

var duongKinh = 2 * banKinh
console.log(duongKinh);

var dienTichTron = pi * banKinh ** 2
console.log(dienTichTron);

var chuViTron = 2 * pi * banKinh
console.log(chuViTron);

var chuViTrond = pi * duongKinh
console.log(chuViTrond);

// Bài 4
var cd = 5
var cr = 5

var chuViHCN = (cd + cr) * 2
console.log(chuViHCN);

var dienTichHCN = cd * cr
console.log(dienTichHCN);

var hinhVuong = (cd == cr) ? 'HCN là hình vuông' : 'HCN không là hình vuông'
console.log(hinhVuong);

var ctHinhVuong = hinhVuong ? (CVHV = 4 * cd, DTHV = cd ** 2) : 0
console.log(ctHinhVuong);

// Bài 5
var r = 4
var pi = 3.14

var d = 2 * r
console.log(d);

var C = pi * r
console.log(C);

var S = (pi * r ** 2) / 2
console.log(S);

// Toán tử 3 ngôi
// Bài 1
var diem = 8

var ketQua = diem < 0 ? 'không hợp lệ' : diem < 5 ? 'kém' : diem < 6.5 ? 'trung bình' : diem < 8 ? 'khá' :
diem <= 10 ? 'giỏi' : 'không hợp lệ'
console.log(ketQua);

// Bài 2
var soDienThoai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

var SDThople = soDienThoai = '' ? 'không được để trống' : soDienThoai.length > 10 ? 'SĐT không hợp lệ' : 
soDienThoai.length == 10 ? `SĐT hợp lệ, ${soDienThoai}` : 'không hợp lệ'
console.log(SDThople);

// Bài 3
var x = 4.5

var kiemTra = x > 0 ? `${x} là số dương` : x < 0 ? `${x} là số âm` : 0
console.log(kiemTra);

var test = x % 1 == 0 ? `${x} là số nguyên` : `${x} là số thập phân`
console.log(test);

// Bài 4
var tuoi = 17

var doTuoi = tuoi < 13 ? 'Trẻ em' : tuoi <= 17 ? 'Thiếu niên' : 
tuoi <= 39 ? 'Trưởng thành' : tuoi <= 65 ? 'Trung niên' : 'Già'
console.log(doTuoi);

// BT sáng 21/4/2022
// Bài 1
var a1 = 3
var a2 = 3
var a3 = 3

var V = a1 * a2 * a3 
console.log(V);

var Vlapphuong = a1 ** 3
var lapPhuong = (a1 == a2 && a1 == a3) ? `Hình lập phương, Thể tích: ${Vlapphuong}` : 'không là hình lập phương'
console.log(lapPhuong);

var D = (a1 ** 2 + a2 ** 2 + a3 ** 2) ** 0.5
console.log(D);

var P = 4 * (a1 + a2) + 8 * (a2 + a3) 
console.log(P);

var Sxq = 2 * (a1 + a2) * a3
console.log(Sxq);

var Stp = Sxq + 2 * a1 * a2
console.log(Stp);

// Bài 3
var sanPham = 0

var tongTien = (sanPham >= 1 && sanPham <= 20) ? 10000 * sanPham : (sanPham <= 50) ? 8000 * sanPham :
(sanPham > 50 && sanPham < 100) ? 7000 * sanPham : (sanPham >= 100) ? 6000 * sanPham : 0
console.log(tongTien);

// Bài 4
var giaTri1 = 20
var giaTri2 = 10

var soSanh = giaTri1 < giaTri2 ? 'nhỏ hơn' : giaTri1 > giaTri2 ? 'lớn hơn' : 'bằng'
console.log(soSanh);

// Bài 5
var tienLuong = 5000000

var thue = tienLuong > 80000000 ? tienLuong * 0.3 :
tienLuong >= 20000000 ? tienLuong * 0.2 : 
tienLuong < 20000000 ? tienLuong * 0.1 : '0' 
console.log(thue);

var tienLuongThat = tienLuong > 80000000 ? tienLuong - tienLuong * 0.3 :
tienLuong >= 20000000 ? tienLuong - tienLuong * 0.2 : 
tienLuong < 20000000 ? tienLuong - tienLuong * 0.1 : '0' 
console.log(tienLuongThat);

// Bài 6
var t = 21

var compare = t > 20 ? `${t} lớn hơn 20` : t == 20 ? `${t} bằng 20` : `${t} nhỏ hơn 20`
console.log(compare);

// Bài 7
var m = 1
var n = 1
var p = -2
var x1 = (-n + (n * n - 4 * m * p) ** 0.5) / (2 * m)
var x2 = (-n - (n * n - 4 * m * p) ** 0.5) / (2 * m)

var nghiem1 = (m == 0 && n == 0) ? 'PT vô nghiệm' : (m == 0) ? -p / n : ((n * n - 4 * m * p) < 0 ) ? 'pt vô nghiệm' :
((n * n - 4 * m * p) == 0 ) ? -n / (2 * m) : `${x1}`

var nghiem2 = (m == 0 && n == 0) ? 'PT vô nghiệm' : (m == 0) ? -p / n : ((n * n - 4 * m * p) < 0 ) ? 'pt vô nghiệm' :
((n * n - 4 * m * p) == 0 ) ? -n / (2 * m) : `${x2}`

console.log(nghiem1, nghiem2)
