// Callback

// const array = [1, 2, 3, 4, 5, 3, 23, 2, 1, 2];
const array = ['b', 'x', 'c', 'a']

// Map
// Array.prototype.map2 = function(callback){
//     let result = []
//     for(let i = 0; i < this.length; i++) {
//         let data = callback (this[i], i)
//         result.push(this[i])
//     }
//     return result
// }
// let ketQua = array.map2(function(value, index){
//     return value
// })
// console.log(ketQua);

// Filter

// Array.prototype.filter2 = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     let data = callback(this[i], i);
//     if (data) {
//       result.push(this[i]);
//     }
//   }
//   return result;
// };

// Sort
// function sort (arr, callback) {
//     for(let i = 0; i < arr.length - 1; i++) {
//         let data = callback(arr[i + 1], arr[i])
//         if(data < 0) {
//             let temp = arr[i + 1]
//             arr[i + 1] = arr[i]
//             arr[i] = temp
//             i = -1
//         }
//     }
//     return arr
// }

// let test = sort(array, function(after, before) {
//     if(before > after) {
//         return -1
//     }
// })
// console.log(test);


Array.prototype.sort2 = function(callback) {
    for(let i = 0; i < this.length - 1; i++) {
        for(let j = i + 1; j < this.length; j++) {
            let data = callback(this[j], this[i])
            if(data < 0) {
                let temp = this[j]
                this[j] = this[i]
                this[i] = temp
                i = -1
            } 
        }
    }
    return this
}

let test = array.sort2(function(after, before){
    if(before > after) {
        return -1
    }
})
console.log(test);





