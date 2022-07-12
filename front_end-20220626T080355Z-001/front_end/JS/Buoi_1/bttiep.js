// Bài 1
var luongT5 = {
    Anh: 1222000,
    Duy: 2250000,
    Thai: 222225455
}

console.log(luongT5.Duy);

luongT5.Thai = 40000000

console.log(luongT5.Anh + luongT5.Duy + luongT5.Thai);

luongT5.Truong = 4444444

var luong = luongT5.Anh + luongT5.Duy + luongT5.Thai + luongT5.Truong
console.log(`Tong luong thang 5 cua And, Duy, Thai, Truong la ${luong}`);

// Bài 2
var arr2 = [6, 2, 'Duong', 'Hai', 5, 2, 'Huy', 3, 6, 'Nam', 'Hai']

console.log(arr2[3]);
console.log(arr2[2]);
console.log(arr2[6]);

arr2[arr2.length - 1] = 'Truong'
console.log(arr2[arr2.length - 1]);

arr2[1] = 18
console.log(arr2[1]);

var dauTien = arr2[0]
var cuoiCung = arr2[arr2.length - 1]
console.log(`Phan tu dau tien la ${dauTien} va phan tu cuoi cung la ${cuoiCung}`);

var trungGian = arr2[0]
    arr2[0] = arr2[arr2.length - 1]
    arr2[arr2.length - 1] = trungGian
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);

// Bài 3
var arr3 = [1, 3, 6, 8, [1, 11, 12, 3], 13, 15, [4, 3, 2]]

// var trunggian = arr3[0]
//     arr3[0] = arr3[arr3.length - 1]
//     arr3[arr3.length - 1] = trunggian

console.log(arr3[4][1]);
console.log(arr3[arr3.length - 1][1]);

console.log(arr3[4][1] + arr3[4][0] + arr3[4][2] + arr3[4][3] + arr3[arr3.length - 1][1] + arr3[arr3.length - 1][0] + arr3[arr3.length - 1][2]);
console.log(arr3[4][1] + arr3[4][0] - arr3[4][2] - arr3[4][3] - arr3[arr3.length - 1][1] - arr3[arr3.length - 1][0] - arr3[arr3.length - 1][2]);
console.log(arr3[4][1] * arr3[4][0] * arr3[4][2] * arr3[4][3] * arr3[arr3.length - 1][1] * arr3[arr3.length - 1][0] * arr3[arr3.length - 1][2]);

// Bài 4
var ten = 'UTT'
var web = 'UTT.com'
var diaChi = 'Thanh Xuan - HN'

var thongTinTruong = {
    ten,
    web,
    diaChi
}

console.log(thongTinTruong);

var thongTinCanhan = {
    Ten: 'Truong',
    maSv: 'abc'
}

console.log(`Toi ten la ${thongTinCanhan.Ten}. Ma SV: ${thongTinCanhan.maSv} hoc truong ${thongTinTruong.ten}, dia chi: ${thongTinTruong.diaChi}`);

var thongTinSv = {...thongTinCanhan,...thongTinTruong}
console.log(thongTinSv);

// Bài 5
var arr004 = [1, 13, 5, 7, 8, 9, [6, 9, 12, 5], 10, [12, 21, 3], 24]

console.log(arr004[6][0]);
console.log(arr004[6][arr004[6].length - 1]);
console.log(arr004[arr004.length - 2][0]);
console.log(arr004[arr004.length - 2][arr004[arr004.length - 2].length - 1]);
console.log(arr004[0]);
console.log(arr004[arr004.length - 1]);

console.log(arr004[6][0] + arr004[6][arr004[6].length - 1] + arr004[arr004.length - 2][0] + arr004[arr004.length - 2][arr004[arr004.length - 2].length - 1] + arr004[0] + arr004[arr004.length - 1]);

arr004[arr004.length] = 2;
console.log(arr004[6][0] + arr004[6][arr004[6].length - 1] + arr004[arr004.length - 3][0] + arr004[arr004.length - 3][arr004[arr004.length - 3].length - 1] + arr004[0] + arr004[arr004.length - 1]);

// Bài 7
var sanPham = {
    ten: 'tui xach',
    soLuong: 12,
    mauSac: ['do', 'xanh', 'vang'],
    diachi: {
        tinh: 'HCM',
        quan: 'Q1'
    }
}

console.log(sanPham.mauSac);

console.log(sanPham.mauSac[sanPham.mauSac.length - 1]);

console.log(`Ten san pham ${sanPham.ten} so luong ${sanPham.soLuong} mau ${sanPham.mauSac[sanPham.mauSac.length - 1]}`);

sanPham.diachi.duong = 'Nguyen Xien'

sanPham.mauSac[sanPham.mauSac.length] = 'Den'

// Bài 7
var meo = {
    mau: 'den',
    canNang: 2,
    ten: 'A'
}

meo.ten = 'B'

meo.mau = 'Tam the'

meo.canNang = 100

// Bài 8
var arr02 = [6, 6, 8, 7, 12, [6, 8, 7, 4, 3, 5], 2]

console.log(arr02[0]);
console.log(arr02[arr02.length - 1]);
console.log(arr02[arr02.length - 2][0]);
console.log(arr02[arr02.length - 2][arr02[arr02.length - 2].length - 1]);
console.log(arr02[0] + arr02[arr02.length - 1] + arr02[arr02.length - 2][0] + arr02[arr02.length - 2][arr02[arr02.length - 2].length - 1]);

arr02[arr02.length - 2][arr02[arr02.length - 2].length] = 5
console.log(arr02[0] + arr02[arr02.length - 1] + arr02[arr02.length - 2][0] + arr02[arr02.length - 2][arr02[arr02.length - 2].length - 1]);

arr02[arr02.length] = 9
arr02[arr02.length - 3][arr02[arr02.length - 3].length] = 12
console.log(arr02[0] + arr02[arr02.length - 1] + arr02[arr02.length - 3][0] + arr02[arr02.length - 3][arr02[arr02.length - 3].length - 1]);

// Bài 9 
var Arr4 = [1, 2, 6, 8, [1, 11, 12, 4], 12, 14, [4, 6, 2]]

console.log(Arr4[4][2]);
console.log(Arr4[Arr4.length - 1][1]);

var Trunggian = Arr4[0]
    Arr4[0] = Arr4[Arr4.length - 1]
    Arr4[Arr4.length - 1] = Trunggian

Arr4[2] = [12, 6, 17]

Arr4[4][2] = [1, 3, 8]
console.log(Arr4[4][2][Arr4[4][2].length - 1]);

// Bài 10
var obj101 = {
    ten: 'End game',
    hang: 'Marvel',
    nam: '2018',
    dienVien: ['Tonny', 'Jact', 'Tom']
}

var Tom = {
    SN: '12/2/1992',
    GT: 'Nam'
}

var Tonny = {
    SN: '12/2/1996',
    GT: 'Nam'
}

var Jact = {
    SN: '12/3/1993',
    GT: 'Nam'
}

var dienVien = [Tonny, Jact, Tom]

obj101.dienVien = dienVien

obj101.dienVien.Hai = {
    SN: '2/3/1993', 
    GT: 'Nam'
}
console.log(obj101.dienVien);

(obj101.dienVien[obj101.dienVien.length - 1]).SN = '11/1/1999'

console.log(obj101);

// Bài 11
var  Arr11 =[1, 2, 6, 8, {name: 'Hai', age: 22}, 12, 14,[4, 6, 2]]

Arr11[4].name = 'Huy'
Arr11[4].age = 21

console.log(Arr11[4].name);

Arr11[Arr11.length - 1] = {NAME: 'Truong', AGE: 18}

// Bài 12
var SanPham12 = {
    name: 'Giay',
    hang: 'Nike',
    Size: ['S', 'L', 'SL', 'X', 'XL', 'XS'],
    color: ['red', 'blue', 'green']
}

console.log(SanPham12.Size[SanPham12.Size.length - 1]);

console.log(SanPham12.color[1]);

SanPham12.color[SanPham12.color.length] = 'yellow'
SanPham12.color[SanPham12.color.length] = 'pink'

SanPham12.Size[SanPham12.Size.length] = 'SSL'
SanPham12.Size[SanPham12.Size.length] = 'XXL'

// Bài 13
var arr131 = [1, 12, 3, 5, 7, 8, 9, 15] 

var arr132 =  [7, 2, 3, 5, 3, 8, 9, 15, 2]

console.log(arr131[0]);
console.log(arr131[arr131.length - 1]);

console.log(arr132[0]);
console.log(arr132[arr132.length - 1]);

var Tg = arr131[0]
    arr131[0] = arr131[arr131.length - 1]
    arr131[arr131.length - 1] = Tg

var TG = arr132[0]
    arr132[0] = arr132[arr132.length - 1] 
    arr132[arr132.length - 1] = TG

console.log(arr131[0] + arr131[arr131.length - 1] + arr132[0] + arr132[arr132.length - 1]);
console.log(arr131[0] - arr131[arr131.length - 1] - arr132[0] - arr132[arr132.length - 1]);

arr131[arr131.length] = [7, 9, 11, 13]
arr132[arr132.length] = [1, 5, 7]

console.log(arr131[0] + arr131[1] + arr131[2] + arr131[3] + arr131[4] + arr131[5] + arr131[6] + arr131[7] + arr131[arr131.length - 1][0]
+ arr131[arr131.length - 1][1] + arr131[arr131.length - 1][2] + arr131[arr131.length - 1][arr131[arr131.length - 1].length - 1]);
console.log(arr132[0] + arr132[1] + arr132[2] + arr132[3] + arr132[4] + arr132[5] + arr132[6] + arr132[7] + arr132[8] 
+ arr132[arr132.length - 1][0] + arr132[arr132.length - 1][1] + arr132[arr132.length - 1][arr132[arr132.length - 1].length - 1]);

console.log(arr131[0] + arr131[arr131.length - 1][0] + arr131[arr131.length - 1][1] + arr131[arr131.length - 1][2] + arr131[arr131.length - 1][arr131[arr131.length - 1].length - 1] 
+ arr132[0] + arr132[arr132.length - 1][0] + arr132[arr132.length - 1][1] + arr132[arr132.length - 1][arr132[arr132.length - 1].length - 1]);
console.log(arr131[0] - arr131[arr131.length - 1][0] - arr131[arr131.length - 1][1] - arr131[arr131.length - 1][2] - arr131[arr131.length - 1][arr131[arr131.length - 1].length - 1] 
- arr132[0] - arr132[arr132.length - 1][0] - arr132[arr132.length - 1][1] - arr132[arr132.length - 1][arr132[arr132.length - 1].length - 1]);


// Bài 14
var truongHoc = {
    Ten: 'ĐH Bách Khoa',
    Diachi: 'Số  1 Giải Phóng' , 
    Nganh: ['CNTT', 'Dệt', 'Cơ khí'],
    SoLop: 30
}

var CNTT = {
    soLop: 8,
    Khoa:['Mạng', 'Toán Tin', 'AI', 'Điện tử']
}

 var detMay = {
    soLop: 6,
    Khoa:['May Công nghiệp', 'Quản lý may mặc', 'dệt']
}
    
var coKhi = {
    soLop: 6,
    Khoa:['Gia Công', 'Chế Tạo', 'Điện lạnh']
}

console.log(CNTT.soLop + detMay.soLop + coKhi.soLop);

console.log(CNTT.Khoa.length + detMay.Khoa.length + coKhi.Khoa.length);

var dienTuvienthong = {
    soLop: 8,
    khoa: ['Lập trình bảng mạch', 'Điện lạnh', 'Điều hòa']
}

console.log(CNTT.soLop + detMay.soLop + coKhi.soLop + dienTuvienthong.soLop);

console.log(CNTT.Khoa.length + detMay.Khoa.length + coKhi.Khoa.length + dienTuvienthong.khoa.length);

var Sv = {
    ten: 'Truong',
    maSv: 'afds',
    nganh: 'CNTT',
    khoa: 'AI'
}

CNTT.Khoa[2] = 'Tri tue nhan tao'

delete truongHoc.SoLop
truongHoc.SoSV = 5000

// Bài 15
var data_ex2 = [1, 2, 'a', 3, '2', 1, 'c', 2, 3, 4, 'c', '3', 5, 6, 5, 4, 6, 'a']

console.log(data_ex2[0] + data_ex2[2]);
console.log(data_ex2[0] - data_ex2[2]);
console.log(data_ex2[0] * data_ex2[2]);
console.log(data_ex2[0] / data_ex2[2]);

console.log(data_ex2[2] + data_ex2[2]);
console.log(data_ex2[2] - data_ex2[2]);
console.log(data_ex2[2] * data_ex2[2]);
console.log(data_ex2[2] / data_ex2[2]);

// Bài 16
var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]

console.log(Nodemy[0].ho, Nodemy[0].ten);
console.log(Nodemy[1].ho, Nodemy[1].ten);
console.log(Nodemy[2].ho, Nodemy[2].ten);
console.log(Nodemy[Nodemy.length - 1].ho, Nodemy[Nodemy.length - 1].ten);

Nodemy[0].subject[0].name = 'Ruby'
console.log(Nodemy[0].subject);

Nodemy[Nodemy.length] = {ho: 'Hoang', ten: 'Van Duy', class: 'b4', subject: ['html', 'css', 'js', 'react']}
console.log(Nodemy);

console.log(Nodemy[0].subject.length + Nodemy[1].subject.length + Nodemy[2].subject.length + Nodemy[3].subject.length + Nodemy[Nodemy.length - 1].subject.length);

// var person1 = {
//     name: 'Phuong',
//     gendal: 'nu',
//     honu: 'Thi'
// }

// var person2 = {
//     name: 'Truong',
//     gendal: 'nam',
//     honam: 'Van'
// }

