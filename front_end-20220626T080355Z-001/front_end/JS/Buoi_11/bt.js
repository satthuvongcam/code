// Bài 1:

// Hãy viết 1 function có tham só đầu vào là 1 array và 1 callback trong đó kết quả trả về

// là trong array nhập vào có các giá trị nào xuất hiện và giá trị đó được lặp lại mấy lần

// function checkDuplicate(arr, arr2) {
//   arr.map(function (value) {
//     let checkExist = arr2.find(function (el) {
//       return el.phanTu === value;
//     });
//     if (!checkExist) {
//       return true;
//     }
//   });
// }

// function countDuplicate(arr) {
//   arr.map(function (value1) {
//     arr.map(function (value2) {
//       if (value1 === value2) {
//         return true;
//       }
//     });
//   });
// }
// let array = [1, 2, 3, 1, 4, 5, 6, 2, 1];

// function demPhanTu(arr, elementCount) {
//   let dem = 0;
//   arr.forEach(function(el)  {
//     if (el === elementCount) {
//       dem++;
//     }
//   });

//   return {
//     phanTu: elementCount,
//     lapLai: dem
//   };

//   return [elementCount, dem]
// }

// function lapLai(arr, cb) {
//   let kq = [];

//   arr.forEach(function(element) {
//     let checkExist = kq.find(function (el) {
//       return el.phanTu === element;
//     });

//     if (!checkExist) {
//       const [elementC, demm] = cb(arr, element);
//       kq.push({
//         phanTu: elementC,
//         lapLai: demm
//       });
//     }
//   });
//   return kq;
// }
// console.log(lapLai(array, demPhanTu));

// Các bài thêm :

// Bài 1:

// const array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]

// -) Hãy viết 1 funtion in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết funtion để tính tích của các số nguyên tố trong dãy array

// function checkNguyenTo (n) {
//     if(n < 2) {
//         return false
//     }
//     for(let i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// function nguyenTo (arr, callback) {
//     let result = []
//     for(let i = 0; i < arr.length; i++) {
//         let data = callback(arr[i])
//         if(data) {
//             result.push({
//                 phanTu: arr[i],
//                 viTri: i
//             })
//         }
//     }
//     return result
// }
// console.log(nguyenTo(array, checkNguyenTo));

// function main (arr, callback){
//     let sum = 0
//     let cnt = 0
//     let tich = 1
//     for(let i = 0; i < arr.length; i++) {
//         let data = callback(arr[i])
//         if(data) {
//             cnt++
//             sum += arr[i]
//             tich *= arr[i]
//         }
//     }
//     console.log('Tong:', sum);
//     console.log('TBC:', sum / cnt);
//     return tich
// }

// console.log(main(array, checkNguyenTo));

// Bài 2:

// Viết 1 function nhập vào giá trị của 2 điểm a và b  
// Hãy tính khoảng cách giữa 2 điểm a và b với tọa độ của a và b có giá trị của xOy

// function distanceTwoPoint (arr1, arr2, callback){
//     let result = callback(arr1[0], arr1[1], arr2[0], arr2[1])
//     return result
// }

// let array1 = [1,2]
// let array2 = [3,4]
// let data = distanceTwoPoint(array1, array2, function(value1, value2, value3, value4){
//     return (Math.sqrt((value3 - value1) ** 2 + (value4 - value2) ** 2))
// })
// console.log(data);

// Bài 3:

// const array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];

// Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3
// Viết function tính tích , tính tổng , tính trung bình cộng của dãy array2 là x số cuối của dãy array1
// Viết function Tính tích, tính tổng của các phần tử từ vị trí số 2 
// xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4

// function main (arr, callback) {
//     let multi = 1, cnt = 0
//     for(let i = 0; i < arr.length; i++) {
//         multi = callback(multi, arr[i])
//         if(arr[i] === 2){
//             cnt++
//         }
//         if(cnt === 3) {
//             break
//         }
//     }
//     return multi
// }

// let data = main(array1, function(multi, value){
//     return multi * value
// })
// console.log(data);

// const TICH = 0
// const TONG = 1

// function main (arr, startIndex, callback){
//     let tich = 1;
//     let tong = 0;
//     let tbc = 0;
//     let cnt = 0

//     for(let i = arr.length - 1; i >= 0; i--) {
//         cnt++
//         tich = callback(tich, arr[i], TICH) 
//         tong = callback(tong, arr[i], TONG) 
//         tbc = callback(tbc, arr[i], TONG) 
//         if(cnt === startIndex) {
//             break
//         }
//     }

//     return [tich, tong, tbc / cnt]
// }

//  let a = main(array1, 3, function(ketQua, value, type){
//     if (type === TICH) {
//         return ketQua * value
//     }
//     if (type === TONG) {
//         return ketQua + value
//     }
// })
// console.log(a);

// function main (arr, callback) {
//     let ketQua = 0, cnt = 0
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 2) {
//             cnt++
//         }
//         if(cnt >= 2) {
//             ketQua = callback(ketQua, arr[i])
//         }
//         if(cnt === 4){
//             break
//         }
//     }
//     return ketQua
// }

// let tong = main(array1, function(ketQua, value){
//     return ketQua + value
// })
// let tich = main(array1, function(ketQua, value){
//     ketQua = ketQua === 0 ? 1 : ketQua
//     return ketQua * value
// })
// console.log(tich);

// Bài 4:

const array1 = [1,5,2];

const array2 = [4,6,3];

const array3 = [2,5,1];

// Viết function Tính tổng, tích, giá trị 
// trung bình cộng của cả 3 array

// Viết function Tính tích của các phần tử từ 
// đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 
// với tích phần tử từ đầu đến vị trí có giá trị là 5 
// xuất hiện lần 2 của array2

// Viết function tính tích , tính tổng , tính 
// trung bình cộng của dãy là x số cuối của cả 
// array1,array2,array3

// Viết function Tính tích, tính tổng của các 
// phần tử từ vị trí số 2 xuất hiện lần đầu đến 
// vị trí số 2 xuất hiện lần thứ 4 của cả 3 array

function main (arr1, arr2, arr3, callback1, callback2, callback3) {
    let ketQua1 = 0, ketQua2 = 0, ketQua3 = 0
    let cnt1 = 0, cnt2 = 0, cnt3 = 0
    for (let i = 0; i < arr1.length; i++) {
        cnt1++
        ketQua1 = callback1(ketQua1, arr1[i])
    }
    for(let j = 0; j < arr2.length; j++) {
        cnt2++
        ketQua2 = callback2(ketQua2, arr2[j])
    }
    for(let k = 0; k < arr3.length; k++) {
        cnt3++
        ketQua3 = callback3(ketQua3, arr3[k])
    }
    return [ketQua1 + ketQua2 + ketQua3, (ketQua1 + ketQua2 + ketQua3) / (cnt1 + cnt2 + cnt3)]
}

let result = main(array1, array2, array3, function(ketQua1, value1) {
    return ketQua1 + value1
}, function(ketQua2, value2){
    return ketQua2 + value2
}, function(ketQua3, value3){
    return ketQua3 + value3
})
console.log(result);

// let result1 = main(array1, array2, array3, function(ketQua1, value1) {
//     ketQua1 = ketQua1 === 0 ? 1 : ketQua1
//     return ketQua1 * value1
// }, function(ketQua2, value2){
//     ketQua2 = ketQua2 === 0 ? 1 : ketQua2
//     return ketQua2 * value2
// }, function(ketQua3, value3){
//     ketQua3 = ketQua3 === 0 ? 1 : ketQua3
//     return ketQua3 * value3
// })
// console.log(result1);

// function main (arr1, arr2, callback) {
//     let ketQua = 0
//     let cnt1 = 0
//     let cnt2 = 0
//     for(let i = 0; i < arr1.length; i++) {
//         ketQua = callback(ketQua, arr1[i])
//         if(arr1[i] === 2) {
//             cnt1++
//         }
//         if(cnt1 === 1) {
//             break
//         }
//         for(let j = 0; j < arr2.length; j++) {

//         }
//     }
// }




