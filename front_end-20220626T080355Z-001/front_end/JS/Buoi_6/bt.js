// Bài 1
// var data2 = [1,1,3,4,4,5,6,7,9]
// a ) Thêm số 8 vào cuối array data2 .
// b ) Thêm số 10 vào cuối array data2
// c ) Thêm số 5 vào đầu  array data2 .
// d ) Đổi phần tử có vị trí là 5 thành số  11 .
// e ) Xóa phần tử vị trí  thứ 4 và thêm 2 số 5 và 7 vào data2 

// var changeData = data2
// changeData.push(8)
// console.log(changeData);

// changeData.push(10)
// console.log(changeData);

// changeData.unshift(5)
// console.log(changeData);

// changeData.splice(5,1,11)
// console.log(changeData);

// changeData.splice(4,2,5,7)
// console.log(changeData);

// Bài 2
// var data3 = ['Cam', 'Xoài', 'Mít', 'Bưởi', 'Quýt', 'Dưa gang']
// a ) Copy array data03. Bằng  …
// b )  Sửa phần tử “Dưa gang” thành “Dưa hấu”
// c ) Thêm “mận” vào giữa data03 .
// d ) Thêm “Dứa” vào đầu của data03 và “Chanh”  vào cuối data03 .

// var changeData = data3

// var copyData = [...changeData]
// console.log(copyData);

// changeData.splice(5,1,'Dưa hấu')
// console.log(changeData);

// changeData.splice(3,0, 'Mận')
// console.log(changeData);

// changeData.push('Chanh')
// changeData.unshift('Dứa')
// console.log(changeData);

// Bài 3
// var persons = [
//     {firstname: 'Đào', lastname: 'Văn Anh'},
//     {firstname: 'Trần', lastname: 'Huy'},
//     {firstname: 'Lê', lastname: 'Hoàng'}
// ]

// a ) Tạo ra một array persons mới . (newPersons)
// a ) Thêm {firstname : "Điền họ của bạn…", lastname: "Điền họ của ban …."} vào cuối Array newPersons.
// b)Xóa {firstname : "Trần", lastname: "Huy"}, và Đổi thành
// {firstname : "Nguyễn", lastname: "Hoàng"}.
// c ) Áp dụng map thêm key address:"Hà Nội"  vào mỗi value của array newPersons 

// var newPersons = persons

// newPersons.push({firstname : "Lại", lastname: "Huy Trường"})
// console.log(newPersons);

// newPersons.splice(1,1, {firstname : "Nguyễn", lastname: "Hoàng"})
// console.log(newPersons);

// var result = newPersons.map(function(value, index){
//     value.address = 'Hà Nội'
//     return value
// })
// console.log(result);

// Bài 4
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

// Bài 5

// var list1 = [3,6,7,9,5]

// var list2 = [3,5,7,8,6,6,7]

// viết function có đầu vào là 2 array và return tổng 2 array đầy vào

// viết function có đầu vào là 2 array return array mới gộp 2 array với nhau và các phần tử sắp xếp tăng dần

// function tongTwoArray (arr, arr2) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     for(var j = 0; j < arr2.length; j++) {
//         sum += arr2[j]
//     }
//     return sum
// }
// console.log(tongTwoArray(list1, list2));

// var arrayGop = [...list1,...list2]
// function tong (arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(tong(arrayGop));

// Bài 6

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

// Bài 7
// var hocSinh=[
// {ten: 'huy', khoi:'A', diem: {toan: 7, van: 5, anh:5}},
// {ten: 'lam', khoi:'B', diem: {toan: 7, van: 7, anh:5}},
// {ten: 'tung', khoi:'C', diem: {toan: 7, van: 4, anh:7}},
// ]

// var khoiThi = [
// {khoi: 'A', heSo:{toan:2, van:1, anh:1}, diemSan:25},
// {khoi: 'B', heSo:{toan:1, van:1, anh:2}, diemSan:24},
// {khoi: 'C', heSo:{toan:1, van:2, anh:1}, diemSan:20}
// ]


// hãy tính điểm thi của từng học sinh biết tổng điểm = điểm thi * hệ số
// hệ số sẽ thay đổi theo khối thi và môn thi
// hoc sinh thi đỗ nếu điểm thi >= điểm sàn của khối tương ứng
// hãy cho biết ai thi đỗ, ai thi trượt

// function tongDiem(arr, arr2) {
//     for(var i = 0; i < arr.length; i++) {
//         var sum = 0
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr[i].khoi === arr2[j].khoi) {
//                 sum += arr[i].diem.toan * arr2[j].heSo.toan + arr[i].diem.van * arr2[j].heSo.van
//                 + arr[i].diem.anh * arr2[j].heSo.anh
//             }
//         }
//         arr[i].diem.diemThi = sum
//     }
//     return hocSinh
// }
// console.log(190, tongDiem(hocSinh, khoiThi));

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

// Bài 8
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


// Bài 9

var data = [1,2,3,1,2,3,4,5,6,5,4,6,3]

// hãy cho biết các phần tử trong array trên lặp lại bao nhiêu lần
// kết quả: [
// {phanTu: 1, lapLai: 2},
// {phanTu: 2, lapLai: 2},
// {phanTu: 3, lapLai: 3},
// ……
// ]


function countElementDuplicate(arr) {
    var result = []
    for(var i = 0; i < arr.length; i++) {
        const checkExist = result.find(function(el) {
            return el.so === arr[i]
        })
        if(!checkExist) {
            var cnt = 0
            for(var j = 0; j < arr.length; j++) {
                if(arr[i] === arr[j]) {
                    ++cnt
                }
            }
            result.push({
                so: arr[i],
                lapLai: cnt
            })
        }
    }
    return result
}
console.log(307, countElementDuplicate(data));







