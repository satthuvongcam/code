// Bài 1
var x = 10;
var ketQua = x < 0 ? 'x la so am' : x == 0 ? 'x = 0' : (x > 0 && x % 1 == 0) 
? 'x la so nguyen duong' : 'x la so thap phan dương'
console.log(ketQua);

// Bài 2
var x = 5
// var a = 5 + x++ + ++x - --x + x++ + 10
// var b = 5 + ++x + ++x + --x - x-- - ++x + 10
// var c = 5 + x-- + --x - ++x + --x - 10
var d = 5 + --x + --x - x++ +--x + 10

// console.log(a);
// console.log(b);
// console.log(c);
console.log(d);

// Bài 3
var string = ''
var password = (string === '') ? 'password không để trống' : (string.length < 8 || string.length > 16) 
                ? 'password không hợp lệ' :'password hợp lệ'
console.log(password);

// Bài 4
var hocSinh = {
    khoiThi: 'A',
	diemThi: {toan: 8, ly: 7, hoa: 7},
	quocTich: 'VN',
	thuongBinh: 'true'
}

var diemChuan = { A : 25, B: 24, C: 26}
var vung = {Vung1: 0, Vung2: 0.5, Vung3: 1.5 }

var scoreA = hocSinh.diemThi.toan * 2 + hocSinh.diemThi.hoa + hocSinh.diemThi.ly
var resultA = scoreA >= 25 ? 'Đỗ' : 'Trượt'
console.log(resultA);

// var scoreB = hocSinh.diemThi.toan + hocSinh.diemThi.hoa * 2 + hocSinh.diemThi.ly
// var resultB = scoreA >= 24 ? 'Đỗ' : 'Trượt'
// console.log(resultB);

// var scoreC = hocSinh.diemThi.toan + hocSinh.diemThi.hoa + hocSinh.diemThi.ly * 2
// var resultC = scoreA >= 26 ? 'Đỗ' : 'Trượt'
// console.log(resultC);

hocSinh.vung = vung
var scoreA = hocSinh.diemThi.toan * 2 + hocSinh.diemThi.hoa + hocSinh.diemThi.ly + hocSinh.vung.Vung2
var resultA = scoreA >= 25 ? 'Đỗ' : 'Trượt'
console.log(resultA);

var diemTong = hocSinh.diemThi.toan + hocSinh.diemThi.hoa + hocSinh.diemThi.ly + hocSinh.vung.Vung2
console.log(diemTong);

var hocBong = (diemTong > 28) ? 5000000 : (diemTong > 25 && hocSinh.thuongBinh === 'true') ? 4000000 :
                (diemTong > 23 && hocSinh.quocTich === 'Lào') ? 3000000 : 0
console.log(hocBong);



