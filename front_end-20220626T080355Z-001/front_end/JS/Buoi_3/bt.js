// Bài 1
// var array = [1,5,7,8,9,15,8]

// console.log('Cac so chan: ');
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0 ) 
//         console.log(array[i]);
// }

// console.log('Cac so le: ');
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 != 0 ) 
//         console.log(array[i]);
// }

// console.log('Cac so lon hon hoac bang 5: ');
// for (var i = 0; i < array.length; i++) {
//     if (array[i] >= 5 ) 
//         console.log(array[i]);
// }

// var sum = 0
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 5 == 0) 
//         sum += array[i];
// }
// console.log('Tong cac so chia het cho 5', sum);

// var multy = 1
// for (var i = 0; i < 3; i++) {
//         multy *= array[i];
// }
// console.log('Tich cua 3 so dau trong mang', multy);

// var s = 0
// for (var i = 4; i < array.length; i++) {
//     s += array[i];
// }
// console.log('Tong cua 3 so cuoi', s);

// for (var i = 0; i < array.length; i++) {
//     if (array[i] == 5) 
//         console.log('Co phan tu la so 5');
// }

// var cnt = 0
// for (var i = 0; i < array.length; i++) {
//     if (array[i] == 8) 
//         ++cnt
// }
// console.log('So phan tu bang 8 trong mang la:', cnt);

// Bài 2
// var data = [3,2,4,1,8,7,1,10,1,2]

// var Sum = 0
// for (var i = 0; i < data.length; i++) {
//     Sum += data[i];
// }
// console.log('Tong cua cac phan tu trong mang', Sum);

// var multy = 1
// for (var i = 0; i < data.length; i++) {
//     multy *= data[i];
// }
// console.log('Tich cua cac phan tu trong mang', multy);

// var s = 0
// for (var i = 0; i < data.length; i++) {
//     if (data[i] % 2 != 0 ) 
//         s += data[i];
// }
// console.log('Tong cua cac so le trong mang', s);

// var Tich = 1
// for (var i = 0; i < data.length; i++) {
//     if (data[i] % 2 == 0 ) 
//         Tich *= data[i];
// }
// console.log('Tich cua cac so chan trong mang', Tich);

// var cnt = 0
// for (var i = 0; i < data.length; i++) {
//     if (data[i] == 1) {
//         ++cnt
//         console.log('Vi tri cua cac so 1 la: ', i);
//     }
// }
// console.log('So cac so 1 trong day', cnt);


// console.log('Vi tri cua so 1 dau tien va cuoi cung lan luot la: ');
// for (var i = 0; i < data.length; i += 2) {
//     if (data[i] == 1) {
//         console.log(i);
//     }
// }

// Bài 3
// var data = [3,2,4,'5',1,8,7,'9'] 

// var s = 0
// for (var i = 0; i < data.length; i++) {
//     data[i] *= 1
//     s += data[i];
// }
// console.log('Tong cua cac phan tu trong mang', s);

// var array2 = []
// for (var i = 0; i < data.length; i++) {
//     if (data[i] % 2 != 0) array2[array2.length] = data[i]
// }
// console.log('array2 =', array2);

// var array3 = []
// for (var i = data.length - 1; i >= 0 ; i--) {
//     array3[array3.length] = data[i]
// }
// console.log('array3 =', array3);

// Bài 4
// var array = [1,9,3,7,6,4,5,2]

// var max = array[0]
// for (var i = 0; i < array.length; i++) {
//     if (array[i] > max) max = array[i]
// }
// console.log('Max =', max);

// var chan = []
// for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         chan[chan.length] = array[i]
//     }
// }
// var min = chan[0]
// for (var i = 0; i < chan.length; i++) {
//     if (chan[i] < min) {
//         min = chan[i]
//     }
// }
// console.log('Min chan =', min);

// Bài 5
// var sanPham = [
//     {
//       ten: "áo somi",
//       soLuong: 100,
//     },
//     {
//       ten: "áo khoác",
//       soLuong: 50,
//     },
//     {
//       ten: "áo phông",
//       soLuong: 200,
//     },
// ];

// var sum = 0
// for (var value in sanPham) {
//     sum += sanPham[value].soLuong
// }
// console.log('Tong so luong = ', sum);

// Bài 6
var data = [3,2,4,1,8,7]

for (var i = 0; i < data.length - 1; i++)
    for (var j = i + 1; j < data.length; j++) {
        if (data[i] > data[j]) {
            var tg = data[i]
            data[i] = data[j]
            data[j] = tg
        }
    }
console.log('Sap xep tang dan:', data);

for (var i = 0; i < data.length - 1; i++)
    for (var j = i + 1; j < data.length; j++) {
        if (data[i] < data[j]) {
            var tg = data[i]
            data[i] = data[j]
            data[j] = tg
        }
    }
console.log('Sap xep giam dan:', data);








