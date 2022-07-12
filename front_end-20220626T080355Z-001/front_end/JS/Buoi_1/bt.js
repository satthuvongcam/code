// Bài 1
var list = [1, 6, 8, 7, 6, 9] 

console.log (list.length)

console.log (list[0])

console.log (list[list.length - 1])

list[list.length] = 5
list[0] = 10
list[list.length - 1] = 10
console.log(list);

// Bài 2
var user = {
    ten: 'Tung',
    tuoi: 20
}

console.log(user.ten)
console.log(user.tuoi)

user.ho = 'Nguyen'
user.tuoi = 30

// Bài 3
var User = {
    ten: 'Tung',
    tuoi: 20,
    banBe: ['Vy', 'Tung', 'Tuan'],
    diaChi: {
        tinh: 'HCM',
        quan: 'Q1'
    }
}

console.log(User.banBe);
console.log(User.banBe[User.banBe.length - 1]);
console.log(User.diaChi);

var name = User.ten
var age = User.tuoi
var District = User.diaChi.quan
var province = User.diaChi.tinh
console.log(`Ten toi la ${name}, toi ${age} tuoi, toi o ${District} tỉnh ${province}`);

User.way = 'Nguyen Tuan'

User.banBe[User.banBe.length] = 'Thai'
console.log(User.banBe);

// Bài 4
var Age = 20
var Name = 'tung'

console.log(`xin chao, tôi là ${Name} , tôi ${Age} tuổi.
tên bạn là gì?`);

// Bài 5
var array = [1, 2, [7, 8, 9], 3, 4]

console.log(array[0]);
console.log(array[array.length - 1]);

console.log(array[2][0]);
console.log(array[2][array[2].length - 1]);

// Bài 6
var Array = [3,5,4,9,8,1,10]

console.log(Array[0] + Array[Array.length - 1]);

Array[Array.length] = 20
console.log(Array[0] + Array[Array.length - 1]);

// Bài 7
var array2 = [1,6,8,7,10 ,[6,8,7,4,3,5], 3]

console.log(array2[0] + array2[5][0] + array2[5][array2[5].length - 1] + array2[array2.length - 1]);

array2[array2.length] = 10
console.log(array2[0] + array2[5][0] + array2[5][array2[5].length - 1] + array2[array2.length - 1]);

