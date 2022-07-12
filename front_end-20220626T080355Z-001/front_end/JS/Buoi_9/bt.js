// Bài 1 : 
// var ten = ['dao linh huong', 'tran ngoc diep', 'nguyen duy minh', 'dao minh nguyet', 'dao van anh']
// var thongTin = [
//     {ten: 'dao linh huong', ngaySinh:'02/28/1998'},
//     {ten: 'tran ngoc diep', ngaySinh:'02/12/1998'},
//     {ten: 'nguyen duy minh', ngaySinh:'02/03/1998'},
//     {ten: 'dao minh nguyet', ngaySinh:'02/20/1998'}
// ]

// Hãy in lại họ tên của những người trong array 
// ten có chữ hoa ở đầu mỗi từ VD: Dao Linh Huong
// Hãy in lại thông tin ngày sinh của mỗi người trong 
// bảng thông tin đang từ dạng mm/dd/yyyy thành dd/mm/yyyy
// Hãy sắp xếp lại data trong array thongTin theo thứ tự ngày sinh tăng dần 

// var result = ten.map(function(value){
//     return value.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
// })
// console.log(result)

// function wrap(x,y) {
//     var tg = x
//     x = y
//     y = tg
//     return [x, y]
// }

// var updateBirth = thongTin.map(function(value){
//     value.ngaySinh = wrap(value.ngaySinh.split('/')[0], value.ngaySinh.split('/')[1])
//     .join('/').concat('/').concat(value.ngaySinh.split('/')[2])
//     return value
// })
// console.log(updateBirth);

// var sapXep = updateBirth.sort(function(a,b){
//     if(a.ngaySinh.split('/')[2] < b.ngaySinh.split('/')[2]) {
//         return -1
//     } else if (a.ngaySinh.split('/')[2] === b.ngaySinh.split('/')[2]) {
//         if(a.ngaySinh.split('/')[1] < b.ngaySinh.split('/')[1]) {
//             return -1
//         } else if(a.ngaySinh.split('/')[1] === b.ngaySinh.split('/')[1]) {
//             if(a.ngaySinh.split('/')[0] < b.ngaySinh.split('/')[0]) {
//                 return -1
//             }
//         }
//     }
// })
// console.log(sapXep);

// Bài 2 : 

// var all = [
//   {name: 'huy', score: 10, class: 'A'},
//   {name: 'hai', score: 7, class: 'B'},
//   {name: 'hung', score: 8, class: 'A'},
//   {name: 'kien', score: 6, class: 'A'},
//   {name: 'vinh', score: 9, class: 'B'},
//   {name: 'binh', score: 8, class: 'B'},
//   {name: 'cuong', score: 5, class: 'B'},
//   {name: 'chien', score: 6, class: 'A'},
//   {name: 'minh', score: 7, class: 'B'}
// ]
 
// var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

// a, Lọc các học viên cùng lớp , lọc các học viên cùng điểm .
// b, Hãy tạo ra array chứa object các học viên có điểm từ 7 trở xuống
// c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển .
// d ) Cho biết mỗi lớp có bao nhiêu người . 
// e ) sắp xếp theo điểm giảm dần, nếu điểm bằng nhau thì xếp theo tên

// function filterClass (arr, nameClass) {
//     var list = []
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i].class === nameClass) {
//             list.push(arr[i])
//         }
//     }
//     return list
// }
// var a = filterClass(all, 'A')
// var b = filterClass(all, 'B')

// function filterScore (arr) {
//     var list = []
//     for(var i = 0; i < arr.length - 1; i++) {
//         for(var j = i + 1; j < arr.length; j++) {
//             if(arr[i].score === arr[j].score) {
//                 list.push(arr[i])
//                 list.push(arr[j])
//             }
//         }
//     }
//     return list
// }
// console.log(filterScore(all));

// var findStudents = all.filter(function(value){
//     if(value.score <= 7) {
//         return true
//     }
// })
// console.log(findStudents);

// var vip = all.filter(function(value){
//     for(var i = 0; i < doiTuyen.length; i++) {
//         if(doiTuyen[i] === value.name) {
//             return true
//         }
//     }
// })
// console.log(114, vip);

// function studentQuantity (arr) {
//     var cnt = 0
//     var Cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].class === 'A') {
//             ++cnt
//         } else if(arr[i].class === 'B') {
//             ++Cnt
//         }
//     }
//     console.log(cnt);
//     return Cnt
// }
// console.log(129, studentQuantity(all));

// var sapXep = all.sort(function(a,b){
//     if(a.score > b.score){
//         return -1
//     } else if(a.score === b.score) {
//         if(a.name < b.name) {
//             return -1
//         }
//     }
// })
// console.log(sapXep);

// Bài 3 : 

// var arr =[1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm',5,8,'Huy' ,'Nấm','Nam','Hải','6','9'] ;

// a, hãy lọc trùng array trên để các phần tử bên trong chỉ hiển thị 1 lần, không lặp lại . 
// b ) Hãy tính tổng các phần tử trong array , tính cả string và number 

// function locTrung (arr){
//     var result = []
//     arr.map(function(value){
//         if(result.indexOf(value) === -1) {
//             result.push(value)
//         }
//     })
//     return result
// }
// console.log(locTrung(arr));

// function tongElement (arr){
//     var sum = 0
//     arr.map(function(value){
//         if(typeof(value * 1) === 'number' && value % 1 == 0) {
//             sum += (value * 1)
//         }
//     })
//     return sum
// }
// console.log(tongElement(arr));

// Bài 4 : Viết một function có chức năng giống với array method indexOf .
// var a = [1,2,4,5,6,7,8,5,4,3]

// function timKiem (arr, number, start) {
//     var cnt = 0
//     var value
//     if(start == null) {
//         start = 0
//     } 
//     for(var i = start; i < arr.length; i++) {
//         if(arr[i] === number) {
//             ++cnt
//             value = i
//             break
//         }
//     }
//     if(cnt === 1) {
//         return value
//     } else {
//         return -1 
//     }
// }
// console.log(timKiem(a, 4));

// Bài 5 : 

// a, khóa học kéo dài 88 buổi, mỗi tuần 3 buổi vào T3, T5, T7
// nếu T3 tuần này tham gia học thì buổi học thứ 77 là ngày nào, thứ mấy
// (không nghỉ buổi nào) . 

// b, Thứ 6 tuần sau là sinh nhật của Hoàng, hôm đó Hoàng 25 tuổi, hỏi Hoàng sinh vào ngày, tháng năm nào .

// var today = new Date()
// var day = today.getDay()
// var kc = day - 2
// console.log(kc);
// var tuesday = new Date(today.setDate(today.getDate() - kc))
// tuesday.setDate(tuesday.getDate() + (88 / 3) * 7)
// console.log(tuesday.getDay() + 2, tuesday.getDate());

// var today = new Date()
// var day = today.getDay()
// var khoangCach = day - 5
// var friday = new Date(today.setDate(today.getDate() - khoangCach))
// friday.setDate(friday.getDate() + 7)
// friday.setFullYear(friday.getFullYear() - 25)
// console.log(friday);






