// Bài 1
var  array = [1,5,7,8,9,15] 
//  sử dụng map hoặc filter
// bài 1.1: // * in ra các số chẵn trong mảng
// bài 1.2: // * in ra các số lẻ  trong mảng
// bài 1.3: // * in ra các số lớn hơn hoặc bằng 5 trong mảng
// bài 1.4:// *in ra các số chia hết cho 5 trong mảng
// bài 1.5:// Tìm các số >5 của mảng và tăng các giá trị đó lên 1 đơn đơn vị
// bài 1.6: dùng splice để copy mảng từ phần tử số 3 đến phần tử cuối cùng
// bài 1.7: .splice để xóa 1 phần tử trong mảng
// bài 1.8: .push thêm 1 phần tử vào cuối mảng 

// * dùng vòng for tăng kết quả của các phần tử array lên 2 lần, 
// kết quả sẽ là mảng sau [2,10,14,16,18,30]

var changeData = array

var soChan = changeData.filter(function(value, index){
    if(value % 2 === 0) {
        return true
    }
})
console.log(soChan)

var soLe = changeData.filter(function(value, index){
    if(value % 2 !== 0) {
        return true
    }
})
console.log(soLe)

var findNumber = changeData.filter(function(value, index){
    if(value >= 5) {
        return true
    }
})
console.log(findNumber)

var chiaHet5 = changeData.filter(function(value, index){
    if(value % 5 === 0) {
        return true
    }
})
console.log(chiaHet5)

function ketQua (arr) {
    var result = []
    changeData.map(function(value){
        if(value > 5) {
            result.push(value + 1)
        }
    })
    return result
}
console.log(ketQua(changeData));

// var check = changeData.splice(3, (changeData.length) - 3)
// console.log(check);

// changeData.splice(3,1)
// console.log(changeData);

// changeData.push(2)
// console.log(changeData);

var tangGiaTri = changeData.map(function(value, index){
    return value * 2
})
console.log(tangGiaTri);

// Bài 2
// var arr2 = ['4', '6', 1,2,3,5, 'y', 't', 5]

// viết function có đầu vào là 1 arr return tổng các number và string number trong array

// function tong(arr) {
//     var sum = 0
//     for(var i = 0; i < arr2.length; i++) {
//         var Number = +arr2[i]
//         if(typeof(Number) === 'number' && !isNaN(Number)) {
//             sum += Number
//         }
//     }
//     return sum
// }
// console.log(89, tong(arr2));

// Bài 3

// var list1 = [3,6,7,9,5]

// var list2 = [3,5,7,8,6,6,7]

// viết function có đầu vào là 2 array và return tổng 2 array đầy vào

// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần

// function tongTwoArray (arr, arr2) {
//     var sum = 0
//     arr.map(function(value){
//         sum += value
//     })
//     arr2.map(function(value){
//         sum += value
//     })
//     return sum
// }
// console.log(tongTwoArray(list1, list2));

// var arrayGop = [...list1,...list2]
// function sapXep (arr) {
//     arr.sort(function(a,b){
//         return a - b
//     })
//     return arr
// }
// console.log(sapXep(arrayGop));

// Bài 4

// var data = [1,2,3,1,2,3,4,5,6,5,4,6]

// viết function có dầu vào là array và return ra array mới chứa 
// các phần tử của array đầu vào không lặp lại

// function fillterDuplicate(arr) {
//     var array = []
//     for(var i = 0; i < arr.length; i++) {
//         var checkExist = true
//         for(var j = 0; j < array.length; j++) {
//             if(arr[i] === array[j]) {
//                 checkExist = false
//                 break
//             }
//         }
//         if(checkExist) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// console.log(fillterDuplicate(data));

// function fillterDuplicate(arr) {
//     var array = []
//     for(var i = 0; i < arr.length; i++) {
//         if(array.indexOf(arr[i]) === -1) {
//             array.push(arr[i])
//         }
//     }
//     return array
// }
// console.log(fillterDuplicate(data));

// var result = data.filter(function(value, index){
//     return index === data.indexOf(value)
// })
// console.log(result);

// Bài 5
var hocSinh=[
{ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
{ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
{ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}}
]

var khoiThi = [
{khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
{khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
{khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20}
]


// hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
// hệ số sẽ thay đổi theo khối thi và môn thi
// hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
// hãy cho biết ai thi đỗ, ai thi trượt

var newList = hocSinh.map(function(value){
    var heSoDiem = khoiThi.filter(function(khoiItem){
        return khoiItem.khoi === value.khoi
    })[0].heSo
    value.diemThi = value.diem.toan * heSoDiem.toan + value.diem.van * 
    heSoDiem.van + value.diem.anh * heSoDiem.anh
    return value
})
console.log(newList);

// function checkDo(arr, arr2) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr[i].khoi === arr2[j].khoi) {
//                 if(arr[i].diem.diemThi >= arr2[j].diemSan) {
//                     result.push(arr[i])
//                 }
//             }
//         }
//     }
//     return result
// }
// console.log(205, checkDo(hocSinh, khoiThi));

// Bài 6
// var all = [
//     {name: 'huy', score: 10, class: 'A'},
//     {name: 'hai', score: 7, class: 'B'},
//     {name: 'hung', score: 8, class: 'A'},
//     {name: 'kien', score: 6, class: 'A'},
//     {name: 'vinh', score: 9, class: 'B'}, 
//     {name: 'binh', score: 8, class: 'B'}, 
//     {name: 'cuong', score: 5, class: 'B'}, 
//     {name: 'chien', score: 6, class: 'A'},
//     {name: 'minh', score: 7, class: 'B'}
//   ]
  
// var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

//   a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A
//   b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống
//   c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển

// function findClass(arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].class === 'A') {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// var arrayA = findClass(all)
// console.log(arrayA);

// function findScore(arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].score <= 6) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// var score = findScore(all)
// console.log(score);

// function vip(arr, arr2) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr[i].name === arr2[j]) {
//                 result.push(arr[i])
//             }
//         }
//     }
//     return result
// }
// console.log(261, vip(all, doiTuyen));


// Bài 7

// var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

// hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// kết quả: [
// {phanTu: 1, lapLai: 2},
// {phanTu: 2, lapLai: 2},
// {phanTu: 3, lapLai: 3},
// ……
// ]


// function countElementDuplicate(arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         const checkExist = result.find(function(el) {
//             return el.so === arr[i]
//         })
//         if(!checkExist) {
//             var cnt = 0
//             for(var j = 0; j < arr.length; j++) {
//                 if(arr[i] === arr[j]) {
//                     ++cnt
//                 }
//             }
//             result.push({
//                 so: arr[i],
//                 lapLai: cnt
//             })
//         }
//     }
//     return result
// }
// console.log(307, countElementDuplicate(data));
