// 1 	Viết function có đầu vào là 1 array
// a, Function trả ra tổng các phần tử trong array
// b, Function trả ra tích các phần tử trong array

// function tong(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(tong([1,2,3,4,5]));

// function tich(arr) {
//     var multy = 1
//     for(var i = 0; i < arr.length; i++) {
//         multy *= arr[i]
//     }
//     return multy
// }
// console.log(tich([1,2,3,4,5]));

// 2	viết function có đầu vào là 1 array chứa các số
// 	a, Function trả ra số lớn nhất trong array 
// 	b, Function trả ra số bé nhất trong array 

// function Max(arr) {
//     var max = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > max) max = arr[i]
//     }
//     return max
// }
// console.log(Max([1,2,3,4,5]));

// function Min(arr) {
//     var min = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] < min) min = arr[i]
//     }
//     return min
// }
// console.log(Min([1,2,3,4,5]));


// 3	viết function có đầu vào là 1 array
// 	Function trả ra array mới với thứ tự ngược lại với array ban đầu

// function daoNguoc(arr) {
//     var array = []
//     for(var i = arr.length - 1; i >= 0; i--) {
//         array[array.length] = arr[i]
//     }
//     return array
// }
// console.log(daoNguoc([1,2,3,4,5]));

// 4 	viết function có đầu vào là số number và 1 array chứa số
// 	Function trả ra số lần number lặp lại trong array

// function soLanLap(a, arr) {
//     var a = 2
//     var dem = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] == a) {
//             ++dem
//         }
//     }
//     return dem
// }
// console.log(soLanLap(2, [2,2,3,4,5]));

// 5 	viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới

function thayThe(str) {
    var string = ''
    for(var i = 0; i < str.length; i++) {
        if(str[i] != ` `) {
            string += str[i]
        } else {
            string += '-'
        }
    }
    return string
}
console.log(thayThe('Lai Huy Truong'));








