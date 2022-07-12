// function cong (number1, number2) {
//     return number1 + number2
// }

// function tru (number1, number2){
//     return number1 - number2
// }

// function test (number1, number2, callback) {
//     let data = callback(number1, number2)
//     return data
// }
// console.log(test(300, 200, tru));

// const arr = [1,2,43,45,6,5,76,4]
// function sumArray (array, callback) {
//     let ketQua = 0
//     for(let i = 0; i < array.length; i++) {
//         ketQua = callback(ketQua, array[i])
//     }
//     return ketQua
// }

// var data = sumArray (arr, function (ketQua, value){
//     ketQua = ketQua === 0 ? 1 : ketQua
//     return ketQua * value
// })
// console.log(data);

// const arr = [1,2,43,45,6,5,76,4]
// function workSameMap (array, callback) {
//     let result = []
//     for(let i = 0; i < array.length; i++) {
//         result.push(callback(array[i], i))
//     }
//     return result
// }

// var kq = workSameMap (arr, function (value, index){
//     return value * 2
// })
// console.log(kq);


