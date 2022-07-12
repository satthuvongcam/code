// bai 1: 
// var data = ['trung kien', 'van thanh', 'tuan kien', 
// 'thanh tung', 'tien thanh', 'lam tung', 'le thanh', 'hai kien']

// a, hãy viết hoa chữ cái đầu tiên trong họ tên của từng người
// b, hãy cho biết có bao nhiêu người trùng tên
// kết quả: [
// {ten: 'kien', soLuong: 2},{ten: thanh, soLuong: 3},……
// ]

// var updateName = data.map(function(value){
//     return value.split(' ').map(function(value1){
//         return value1.replace(value1[0], value1[0].toUpperCase())
//     }).join(' ')
// })
// console.log(updateName);

// function filterElementDuplicate (arr) {
//     var result = []
//     for(var i = 0; i < arr.length; i++) {
//         var checkExist = result.find(function(el){
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
//                 soLuong: cnt
//             })
//         }
//     }
//     return result
// }
// console.log(filterElementDuplicate(data));

// Bai 2: 
// var data = [1,2,'a',3,'2',1,'c',2,3,4,'c','3',5,6,5,4,6,'a']
// a, hãy lọc trùng array trên để các phần tử bên trong chỉ hiển thị 1 lần, không lặp lại
// b, hãy tính tổng các phần tử trong array (tính cả string number)

// function filterDuplicate (arr) {
//     var result = []
//     arr.map(function(value){
//         if(result.indexOf(value) === -1) {
//             result.push(value)
//         }
//     })
//     return result
// }
// console.log(filterDuplicate(data));

// function tongElement (arr) {
//     var sum = 0
//     arr.map(function(value){
//         if(typeof(parseInt(value)) === 'number' && value % 1 === 0) {
//             sum += parseInt(value)
//         }
//     })
//     return sum
// }
// console.log(tongElement(data));

// Bai 3: 
// var all = [
//     {name: 'huy', score: 10, class: 'A'},
//     {name: 'huy', score: 7, class: 'B'},
//     {name: 'hung', score: 8, class: 'A'},
//     {name: 'kien', score: 6, class: 'A'},
//     {name: 'kien', score: 9, class: 'B'},
//     {name: 'binh', score: 8, class: 'B'},
//     {name: 'huy', score: 5, class: 'B'},
//     {name: 'hung', score: 6, class: 'A'},
//     {name: 'hung', score: 7, class: 'B'}
//   ]
//   a, sắp xếp theo điểm giảm dần, nếu điểm bằng nhau thì xếp theo tên
//   b, hãy lọc trùng array trên theo trên (mỗi tên người chỉ hiện 1 lần)
//   c, hãy cho biết mỗi lớp có bao nhiêu người

// var sapXep = all.sort(function(a,b){
//     if(a.score > b.score) {
//         return -1
//     } else if (a.score === b.score) {
//         if(a.name < b.name) {
//             return -1
//         }
//     }
// })
// console.log(sapXep);

// function filterDuplicate (arr) {
//     var result = []
//     arr.map(function(value){
//         var checkExist = result.find(function(el){
//             return el.name === value.name
//         })
//         if(!checkExist) {
//             result.push(value)
//         }
//     })
//     return result
// }
// console.log(filterDuplicate(all));

// function soHocSinh (arr, nameClass1, nameClass2){
//     var cnt = 0
//     var Cnt = 0
//     arr.map(function(value){
//         if(value.class === nameClass1) {
//             ++cnt
//         } else if(value.class === nameClass2) {
//             ++Cnt
//         }
//     })
//     console.log(`So hoc sinh lop ${nameClass1} la:`, cnt);
//     return `So hoc sinh lop ${nameClass2} la: ${Cnt}`
// }
// console.log(soHocSinh(all, 'A', 'B'));

// Bai 4
// a, khóa học kéo dài 100 buổi, mỗi tuần 3 buổi vào T2, T4, T6
// nếu T2 tuần này tham gia học thì buổi học thứ 100 là ngày nào, thứ mấy
// (không nghỉ buổi nào)

// b, Thứ 4 tuần sau là sinh nhật của Minh, hôm đó Minh 20 tuổi, hỏi Minh sinh vào ngày, tháng năm nào

// var today = new Date()
// var day = today.getDay()
// var khoangCach = day - 1
// var monday = new Date(today.setDate(day - khoangCach))
// monday.setDate(monday.getDate() + (100 / 3) * 7)
// var dayAfter100 = monday.getDay()
// var dateAfter100 = monday.getDate()
// console.log(monday);

// var today = new Date()
// var day = today.getDay()
// var kc = day - 3
// var wednesday = new Date(today.setDate(today.getDate() + 7))
// var sinhNhat = new Date(wednesday.setFullYear(wednesday.getFullYear() - 20))
// console.log(sinhNhat);

// Bai 5
// hãy sắp xếp các sản phẩm trong data sau theo "createDate" tăng dần và 
// tính tổng giá trị của 2 sản phẩm đầu tiên trong array sau khi sắp xếp

const productList = [
{
    _id: '629038822b7e291ffc3f6038',
    idProductCode: '628dd9ddfc45279c29739e49',
    price: 28290000,
    priceRange: 'trên 20tr',
    storage: 10,
    productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png','https://image.cellphones.com.vn/358x/media/catalog/product/s/a/samsung-galaxy-a73-1-600x600.jpg','https://image.cellphones.com.vn/358x/media/catalog/product/x/i/xiaomi-mi-11t-1_1.jpg'],
    color: 'Xanh Dương',
    ram: '8 GB',
    rom: '128 GB',
    createDate: '2022-05-27T02:33:38.750Z',
    suggest: 'fales',
    __v: 0
},
{
    _id: '629038922b7e291ffc3f603a',
    idProductCode: '628dd9ddfc45279c29739e49',
    price: 28290000,
    priceRange: 'trên 20tr',
    storage: 10,
    productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
    color: 'Vàng đồng',
    ram: '6 GB',
    rom: '8 G',
    createDate: '2022-05-27T02:33:54.947Z',
    suggest: 'fales',
    __v: 0
},
{
    _id: '629038a02b7e291ffc3f603c',
    idProductCode: '628dd9ddfc45279c29739e49',
    price: 28290000,
    priceRange: 'trên 20tr',
    storage: 10,
    productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
    color: 'Xám',
    ram: '6 GB',
    rom: '8 G',
    createDate: '2022-05-27T02:34:08.546Z',
    suggest: 'fales',
    __v: 0
},
{
    _id: '629038bd2b7e291ffc3f603e',
    idProductCode: '628dd9ddfc45279c29739e49',
    price: 28290000,
    priceRange: 'trên 20tr',
    storage: 10,
    productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
    color: 'Bạc',
    ram: '6 GB',
    rom: '8 G',
    createDate:'2022-05-27T02:34:37.963Z',
    suggest: 'fales',
    __v: 0
},
{
    _id: '629038cc2b7e291ffc3f6040',
    idProductCode: '628dd9ddfc45279c29739e49',
    price: 28290000,
    priceRange: 'trên 20tr',
    storage: 10,
    productPic: ['https://image.cellphones.com.vn/358x/media/catalog/product/i/p/iphone_11_white_4_.png'],
    color: 'Xanh lá',
    ram: '6 GB',
    rom: '8 G',
    createDate: '2022-05-27T02:34:52.022Z',
    suggest: 'fales',
    __v: 0
}
]

// var update = productList.map(function(value){
//     value.createDate = value.createDate.split('-')
//     return value
// })

// var sapXep = productList.sort(function(a,b){
//     if(a.createDate < b.createDate){
//         return -1
//     }
// })
// console.log(sapXep);

// function tong2Product (Arr) {
//     var sum = 0
//     for(var i = 0; i < 2; i++) {
//         sum += Arr[i].price
//     }
//     return sum
// }
// console.log(tong2Product(productList));
        



