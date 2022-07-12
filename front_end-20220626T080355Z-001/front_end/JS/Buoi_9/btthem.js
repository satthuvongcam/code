// Bài 1  :
// var data = ['van anh', 'van thanh', 'tuan kien', 'van anh', 'tien thanh', 'lam hai', 
// 'le thai', 'hai kien','hai vu','tuan kien','lam hai'] 

// a, hãy viết hoa chữ cái đầu tiên trong họ tên của từng người
// b, hãy cho biết có bao nhiêu người trùng tên
// kết quả: [
// {ten: 'van anh', soLuong: 2},{ten:’tuan kien’, soLuong: 2},……
// ]

// var updateName = data.map(function(value){
//     return value.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
// })
// console.log(updateName);

// function countElementDuplicate(arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         var checkExist = result.find(function(el) {
//             return el.ten === arr[i]
//         })
//         if(!checkExist) {
//             var cnt = 0
//             for(var j = 0; j < arr.length; j++) {
//                 if(arr[i] === arr[j]) {
//                     ++cnt
//                 }
//             }
//             result.push({
//                 ten: arr[i],
//                 lapLai: cnt
//             })
//         }
//     }
//     return result
// }
// console.log(countElementDuplicate(data));

// Bài 2 : 
// var arr2 = [1,3,4,6,13,7,4,48,39 ,8,54] 
// a ) Đảo ngược arr2 .
// b) Tìm phần tử lớn nhất và nhỏ nhất trong arr2
// c )  Lấy ra số lẻ lớn nhất trong arr2  .Lấy ra phần tử chẵn lớn nhất  .

// var daoNguoc = arr2.reverse()
// console.log(daoNguoc);

// function max(arr){
//     var Max = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > Max) {
//             Max = arr[i]
//         }
//     }
//     return Max
// }
// console.log(max(arr2));

// function min(arr){
//     var Min = arr[0]
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] < Min) {
//             Min = arr[i]
//         }
//     }
//     return Min
// }
// console.log(min(arr2));

// function maxChan (arr){
//     var chan = []
//     arr.map(function(value){
//         if(value % 2 === 0){
//             chan.push(value)
//         }
//     })
//     var Max = chan[0]
//     for(var j = 0; j < chan.length; j++) {
//         if(chan[j] > Max) {
//             Max = chan[j]
//         }
//     }
//     return Max
// }
// console.log(maxChan(arr2));

// function maxLe (arr){
//     var le = []
//     arr.map(function(value){
//         if(value % 2 !== 0){
//             le.push(value)
//         }
//     })
//     var Max = le[0]
//     for(var j = 0; j < le.length; j++) {
//         if(le[j] > Max) {
//             Max = le[j]
//         }
//     }
//     return Max
// }
// console.log(maxLe(arr2));

// Bài 3 :

// 	viết function có đầu vào là 1 string
// 	Thay thế tất cả dấu cách ‘ ‘ trong string bằng dấu ‘-‘ và trả ra string mới 

// function thayThe (string) {
//     var String = ''
//     for(var i = 0; i < string.length; i++) {
//         if(string[i] !== ' ') {
//             String += string[i]
//         } else {
//             String += '-'
//         }
//     }
//     return String
// }
// console.log(thayThe('Lai Huy Truong'));

// Bài 4 : 
// var  iphone= [
//     {id: 1, product:'Iphone 12 ', price: 9990000, store: 120, color:'red'},
//     {id: 2, product:'Iphone 12 ', price: 12590000, store: 121, color:'black'},
//     {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
//     {id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
//     {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
//     {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
//     {id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
//     {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
//     {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
// ] 

// a ) Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
// b ) viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
// c ) Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
// Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr .. 

// function findNameProduct (arr, nameProduct){
//     var list = []
//     arr.map(function(value){
//         if(value.product === nameProduct) {
//             list.push(value)
//         }
//     })
//     return list.length === 0 ? 'Không tìm thấy' : list
// }
// console.log(findNameProduct(iphone, 'iphone 18'));

// function findColorProduct (arr, colorProduct){
//     var list = []
//     arr.map(function(value){
//         if(value.color === colorProduct) {
//             list.push(value)
//         }
//     })
//     return list.length === 0 ? 'Không tìm thấy' : list
// }
// console.log(findColorProduct(iphone, 'black'));

// function findPrice (arr, priceMin, priceMax) {
//     var list = []
//     arr.map(function(value){
//         if(value.price >= priceMin && value.price <= priceMax) {
//             list.push(value)
//         }
//     })
//     return list
// }
// console.log(findPrice(iphone, 10000000, 15000000));

// Bài 5 : 
// var phucBirthday = '26-11-1992'
// var cuongBirthday = '27-11-1994'
// 6.1 Đổi định dạng ngày thành ‘1992-11-26’
// 6.2 Quy đổi về cả 2 về object date
// 6.3 So sánh xem phuc hay cuong lớn tuổi hơn
// 6.4 Hỏi sau 100 ngày từ lúc phucBirthday là ngày hôm nào, thứ mấy?
// 	gợi ý: dùng setDate(getDate + 100)

// 	dùng hàm getDay để tìm ra thứ  biết rằng:
// 	0: chủ nhật
// 	1: thứ 2  .. 

// var updatePhucBirthDay = phucBirthday.split('-').reverse().join('-')
// console.log(updatePhucBirthDay);
// var updateCuongBirthDay = cuongBirthday.split('-').reverse().join('-')
// console.log(updateCuongBirthDay);

// var datePhuc = new Date(updatePhucBirthDay)
// console.log(datePhuc);
// var dateCuong = new Date(updateCuongBirthDay)
// console.log(dateCuong);

// var soSanh = dateCuong.getFullYear() - datePhuc.getFullYear()
// if(datePhuc.getFullYear() > dateCuong.getFullYear()) {
//     console.log(`Phuc nho hon Cuong ${soSanh} tuoi`);
// } else if(datePhuc.getFullYear() < dateCuong.getFullYear()) {
//     console.log(`Phuc lon hon Cuong ${soSanh} tuoi`);
// } else {
//     console.log('Phuc bang tuoi Cuong');
// }

// var after100 = new Date(datePhuc.setDate(datePhuc.getDate() + 100))
// console.log(after100.toString());




