// Thao tác với console.log
// Bài 1
console.log ("Bootcamp 3 thực hành Nodemy buổi 1")

console.log (43674)

var list = ['Hoa', 'Hải', 'Huy', 'Thái']
console.log (list)

// Bài 2
var info = {
    Name: 'Trường',
    Wasborn: '10/10/2003',
    Address: 'HN'
}
console.log (info)

var text = `
Primitive values, like "John Doe"
But with JS
Because JS
`
console.log (text)

var name = "Trường"
var age = 18
var chat = `Ten toi la ${name} nam nay ${age}`
console.log (chat)

// Object
// Bài 1
var car = {
    name: 'Audi',
    color: 'Black',
    age: 1
}
console.log (car)

car.name = "Lamborghini"

car.color = "Red"

car.age = 0

car.yearproduce = 2015

console.log (car)

// Bài 2
var hocVien = {
    ten: "Văn Anh",
    tuoi: 23,
    diachi: 'HN'
}

hocVien.ho = "Đào"

console.log (`
Toi ten ${hocVien.ho} ${hocVien.ten} nam nay ${hocVien.tuoi} tuoi dia chi ${hocVien.diachi}`)

hocVien.ho = "Lại"
hocVien.ten = "Huy Trường"
hocVien.tuoi = 18
hocVien.diachi = "HN"
console.log (hocVien)

delete hocVien.diachi
hocVien.noisinh = "SL"
console.log (hocVien)

// Bài 3
var luongThang4 = {
    Anh: 10000,
    Duy: 20000,
    Thai: 22222
}

console.log (luongThang4.Duy)
luongThang4.Thai = 40000
var tong = luongThang4.Anh + luongThang4.Duy + luongThang4.Thai
console.log (tong)

console.log (`Tong luong thang 4 cua And, Duy, Thai la ${tong}`)

// Array
// Bài 1
var arr = [1, 2, 'Nam', "Hai", 5, 8, 'Huy', 3, 6, "Nấm"]

console.log (arr[0])
console.log (arr[3])
console.log (arr[5])

arr[2] = "Trường"
console.log (arr[2])

console.log (arr[1])
arr[1] = 100
console.log (arr[1])

var first = arr[0]
var last = arr[arr.length - 1]
console.log (`Phan tu dau tien la ${first} và phan tu cuoi cung la ${last}`)

// Bài 2
var arr2 = ['Lam', 'Hai', 'Huy', 'Anh', 'Duy']

console.log (arr2.length)
var dautien = arr2[0]
var cuoicung = arr2[arr2.length - 1]
console.log (dautien)
console.log (cuoicung)

var trunggian = dautien
    dautien = cuoicung
    cuoicung = trunggian

    console.log (dautien)
    console.log (cuoicung)

console.log (arr2[3])
arr2[3] = "Thái"
console.log (arr2)

// Bài 3
var arr3 = [1, 3, 5, 7, [12, 11, 10], 13, 9]

var dauTien = arr3[0]
var cuoiCung = arr3[arr3.length - 1]
console.log (dauTien)
console.log (cuoiCung)

console.log (arr3[3])
console.log (arr3[1])

var sum = arr3[4][0] + arr3[4][1] + arr3[4][2]
console.log (sum)

console.log (dauTien + cuoiCung)




