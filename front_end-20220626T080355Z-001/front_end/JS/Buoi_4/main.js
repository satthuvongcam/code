var data = [3,2,4,1,8,7]
var data1 = [10, 15, 2, 9, 3, 6]

// function sapXep(input) {
//     for (var i = 0; i < input.length - 1; i++)
//         for (var j = i + 1; j < input.length; j++) {
//             if (input[i] < input[j]) {
//                 var tg = input[i]
//                 input[i] = input[j]
//                 input[j] = tg
//             }
//         }
//     return input
// }

// console.log(sapXep(data));
// console.log(sapXep(data1));

// function sum(number1, number2) {
//     return number1 + number2
// }

// var result = sum(200, 200)
// console.log(result)

// Viết function tính tổng, tích các phần tử trong array
// function sum(array) {
//     var Sum = 0
//     for(var i = 0; i < array.length; i++) {
//         Sum += array[i]
//     }
//     return Sum
// }


// function multy(array) {
//     var Multy = 1
//     for(var i = 0; i < array.length; i++) {
//         Multy *= array[i]
//     }
//     return Multy
// }

// console.log(sum([1,2,3,4,5]));

// Viết function tính tổng của 3 phần tử đầu tiên trong array

function sumArr(array) {
    var s = 0
    for(var i = 0; i < 3; i++) {
        s += array[i]
    }
    return s
}
console.log(56, sumArr(data));
console.log(57, sumArr(data1));

function sumArr1(array) {
    var S = 0
    for(var i = array.length - 3; i < array.length; i++) {
        S += array[i]
    }
    return S
}
console.log(65, sumArr1(data));
console.log(66, sumArr1(data1));


