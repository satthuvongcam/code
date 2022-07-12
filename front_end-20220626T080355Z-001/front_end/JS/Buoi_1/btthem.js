// Bài 1
var cat = {
    color: 'yellow',
    weight: 7,
    age: 2
}

console.log (cat.weight)

cat.weight = 4 

cat.address = 'HN'
console.log (cat)

//Bài 2
var ten = "Trường"
var tuoi = 18
var diachi = "HN"

var thongTin = {
    ten,
    tuoi,
    diachi
}

console.log (thongTin)
thongTin.nguoiYeu = "False"

var thongTinGiaDinh = {
    mom: 'abc',
    dad: 'dma'
}

// thongTin.thongTinGiaDinh = thongTinGiaDinh
var thongtin1={...thongTin,...thongTinGiaDinh}
console.log (thongtin1)
console.log(thongtin1.mom);

// console.log (thongTin.thongTinGiaDinh.mom)

// Bài 3
var arr03 = ['Hóa', 12, ['Hung', 1, 'Huy', 5], 21, 32, 'Hai']

var trungGian = arr03[0]
    arr03[0] = arr03[arr03.length - 1]
    arr03[arr03.length - 1] = trungGian
console.log (arr03[0])
console.log (arr03[arr03.length - 1])

console.log (arr03[2])
console.log(arr03[1])

console.log(arr03.length-2);

console.log(arr03.length);

// Bài 4
var arr004 = [3, 5, 7, 8, 9, [6, 9, 12], 10, 12]

var dau = arr004[0]
var cuoi = arr004[arr004.length - 1]
var dauCon = arr004[5][0]
var cuoiCon = arr004[5][arr004[5].length - 1]
console.log(dauCon);
console.log(cuoiCon);

console.log(dau + cuoi + dauCon + cuoiCon);

arr004[arr004.length] = 8;
var cuoiSau = arr004[arr004.length - 1]
console.log(dau +cuoiSau + dauCon + cuoiCon);


