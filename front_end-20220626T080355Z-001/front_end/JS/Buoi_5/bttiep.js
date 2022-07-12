// Bài 1 : 
var shop = [
	{id: 1, product:'Dày da  ', price: 259000, store: 100},
	{id: 2, product: 'Dép lào', price: 129000, store: 230},
	{id: 3, product: 'Dày cao gót', price: 749000, store: 130},
	{id: 4, product: 'Dép tông', price: 499000, store: 20},
] 
// ( price là giá ; store : số lượng còn lại ) 
// a ) Viết function tìm kiếm sản phẩm theo tên  . Nếu không tìm thấy thì thì in ra “Không tìm thấy “ 
// b ) Viết function tính tổng số sản phẩm có trong shop.
// c ) Viết functinon tính tiền sản phẩm và cập nhật số lượng sản phẩm còn lại trong shop . 

// đầu vào là chuỗi string tên sản phẩm , và số lượng mua . 
// Nếu số sản phẩm còn lại trong shop  =< 0 thì in ra “ Shop đã hết của bạn cần mua “

// function findProduct(name, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].product === name) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy'
// }
// console.log(findProduct('d,ksadjkas', shop));

// function tongProduct(arr) {
//     var s = 0
//     for(var i = 0; i < arr.length; i++) {
//         s += arr[i].store
//     }
//     return s
// }
// console.log(tongProduct(shop));

// function result(name, quantity, arr) {
//     var sum = 0
//     var cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].store <= 0) {
//             console.log('Shop đã hết của bạn cần mua');
//         } else {
//             if(arr[i].product === name) {
//                 ++cnt
//                 sum += arr[i].price * quantity
//                 arr[i].store -= quantity
//             }
//         }
//     }
//     if(cnt == 0) {
//         console.log('Không có sản phẩm bạn cần tìm kiếm');
//     }
//     console.log('Tổng tiền = ', sum);
//     return arr 
// }
// console.log(result('Dép tông', 1, shop));

// Bài 2 : 
// var  iphone= [
// 	{id: 1, product: 'Iphone 12', price: 9990000, store: 120, color:'red'},
// {id: 2, product: 'Iphone 12 ', price: 12590000, store: 121, color:'black'},
// {id: 3, product:'Iphone 12 ', price: 13590000, store: 120, color:'green'},
// 	{id: 4, product: 'iphone 13 Pro', price: 17900000, store: 230 , color:'black'},
// {id: 5, product: 'iphone 13 Pro', price: 19900000, store: 230 ,color:'red'},
// {id: 6, product: 'iphone 13 Pro', price: 14900000, store: 230,color:'blue'},
// 	{id: 7, product: 'iphone 13', price: 12490000, store: 220,color:'black'},
// {id: 8, product: 'iphone 13', price: 24900000, store: 220,color:'while'},
// {id: 9, product: 'iphone 13', price: 24900000, store: 220,color:'blue'}
// ] 

// a ) Viết function tìm sản phẩm tìm kiếm sản phẩm theo tên . nếu không tìm thấy thì in ra “ Không tìm thấy “
// b ) viết function tìm kiếm sản phẩm theo tên và theo màu .   nếu không tìm thấy thì in ra “ không tìm thấy  “ .
// c ) Viết function tìm kiếm sản phẩm theo khoảng giá .10-15tr , 
// Ví dụ người dùng tìm kiếm sản phẩm từ 10 đến 15 tr thì in ra các sản phẩm từ 10 đến 15 tr ..

// function findProductName(name, arr) {
//     var string = []
//     for(var i = 0; i< arr.length; i++) {
//         if(arr[i].product === name) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy'
// }
// console.log(findProductName('iphone 13', iphone));

// function findProductNameColor(name, color, arr) {
//     var string = []
//     for(var i = 0; i< arr.length; i++) {
//         if(arr[i].product === name && arr[i].color === color) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy'
// }
// console.log(findProductNameColor('iphone 13', 'blue', iphone));

// function findProductPrice(price, price2, arr) {
//     var string = []
//     for(var i = 0; i< arr.length; i++) {
//         if(arr[i].price >= price && arr[i].price <= price2) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string
// }
// console.log(findProductPrice(20000000, 25000000, iphone));

// Bài 3  : 
// var TFT= [
// { name:'yasuo', price: 5, toc:['Độc hành','Anh em']},
// { name:'yone', price: 5, toc:['Độc hành','Anh em']},
// { name:'lux', price: 7, toc:['Học giả','Tối thượng']},
// { name:'Braum', price: 4, toc:['Vệ sĩ','Băng đảng']},
// { name:'chogat', price: 3, toc:['Khổng lồ','Đột biến']},
// { name:'Galio', price: 5, toc:['Khổng lồ','vệ sĩ']},
// { name:'Ahri', price: 4, toc:['Pháp sư','Băng đảng']},
// { name:'Diana', price: 1, toc:['Băng đảng','Sát thủ']},
// ]
// a ) Viết function tìm tướng theo Tên . Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// b ) Viết function theo giá tiền .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng bạn cần “ 
// c ) Viết function tìm kiếm tướng theo tộc . “ Không tìm thấy in ra không tìm thấy  “

// function findProductName(name, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].name === name) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy tướng bạn cần'
// }
// console.log(findProductName('yasuo', TFT));

// function findProductPrice(price, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].price === price) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy tướng bạn cần'
// }
// console.log(findProductPrice(4, TFT));

// function findProductToc(toc, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr[i].toc.length; j++) {
//             if(arr[i].toc[j] === toc) {
//                 string[string.length] = arr[i]
//             }
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy tướng bạn cần'
// }
// console.log(findProductToc('Độc hành', TFT));

// Bài 4 :  
// var LOL =[
// { name:'yasuo', power: 50000,viTri:'Mid'},
// { name:'aphelios', power: 43000,viTri:'ADC'},
// { name:'Yone', power: 45000,viTri:'Mid'},
// { name:'Vayle', power: 12000,viTri:'ADC'},
// { name:'Nasus', power: 30000,viTri:'Top'},
// { name:'Jayce', power: 20000,viTri:'Top'},

// { name:'LeeSin', power: 41000,viTri:'Jungle'},
// { name:'Nunu', power: 15000,viTri:'Jungle'},
// { name:'Threst', power: 23000,viTri:'SP'},
// { name:'Lulu', power: 25000,viTri:'SP'},
// ]
// // a ) Viết function tìm tướng theo tên .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 
// // b ) Viết function tìm tướng theo Vị trí .  Nếu không tìm thấy thì in ra “ Không tìm thấy tướng của bạn  “ 

// // c )  Viết function tính tổng sức mạnh của 2 tướng bất kỳ  . 
// // d ) Viết function tính tổng của một đội 5 tướng.

// function findName(name, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].name === name) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy tướng bạn cần'
// }
// console.log(findName('yasuo', LOL));

// function findViTri(place, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].viTri === place) {
//             string[string.length] = arr[i]
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy tướng bạn cần'
// }
// console.log(findViTri('SP', LOL));

// function tongPower(tuong1, tuong2, arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length - 1; i++) {
//         if(arr[i].name === tuong1) {
//             sum += arr[i].power
//             for(var j = i + 1; j < arr.length; j++) {
//                 if(arr[j].name === tuong2) {
//                     sum += arr[j].power
//                 }
//             }
//         }
//     }
//     return sum
// }
// console.log(tongPower('yasuo', 'Nunu', LOL));

// function tongPowerDoi (tuong1, tuong2, tuong3, tuong4, tuong5, arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].name === tuong1) {
//             sum += arr[i].power
//         } else if (arr[i].name === tuong2) {
//             sum += arr[i].power
//         }
//         else if (arr[i].name === tuong3) {
//             sum += arr[i].power
//         }
//         else if (arr[i].name === tuong4) {
//             sum += arr[i].power
//         }
//         else if (arr[i].name === tuong5) {
//             sum += arr[i].power
//         }
//     }
//     return sum
// }
// console.log(tongPowerDoi('Lulu', 'Nunu', 'yasuo', 'LeeSin', 'Threst', LOL));

// Bài 5 : 
// var  hocSinh = [
// { name:'A', age:18,queQuan:'Hà Nội',maVung:'V001'},
// { name:'B', age:18,queQuan:'Tây Bắc',maVung:'V002'},
// { name:'C', age:19,queQuan:'Hưng Yên',maVung:'V003'},
// { name:'D', age:18,queQuan:'Thái Bình',maVung:'V003'}
// ]

// var diemVung = [
// {maVung:'V001',ten:['Hà Nội'],diem:2},
// {maVung:'V002',ten:['Hà Giang','Tây Bắc','Mù Cang Trải'],diem:2.5},
// {maVung:'V003',ten:['Thái Bình','Hưng Yên'],diem:1}
// ]

// var diemThi= [
// {name:'A', Toan:9, Van:6,anh:7},
// {name:'B', Toan:1, Van:8,anh:9},
// {name:'C', Toan:7, Van:6,anh:5},
// {name:'D', Toan:7, Van:5,anh:7},
// ]

// var truong = [
// {ten:'Chu Văn An',diemChuan:25},
// {ten:'Amsterdam',diemChuan:27},
// {ten:'Nguyễn Du',diemChuan:23},
// ]
// a ) Viết function truy vấn điểm vùng . theo mã Vùng . 
// b ) Viết function truy vấn điểm vùng theo tên của học Sinh .
// c ) Viết function tính điểm thi . theo tên của học sinh .
// Biết rằng điểm tổng = Điểm Toán + Điểm Văn + Điểm Anh + Điểm Vùng .
// d ) Viết function cho biết học sinh đỗ tốt nghiệp hay không . 
// Biết rằng để tốt nghiệp  điểm tổng > = 15 và không có môn nào < = 1.. 
// e ) Viết function cho biết học sinh đã đỗ trường nào  . theo tên của học sinh .

// function findDiemVung(maVung, arr) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].maVung === maVung) {
//             string[string.length] = arr[i].diem
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy'
// }
// console.log(findDiemVung('V002', diemVung));

// function findDiemVungName(name, arr, arr1) {
//     var string = []
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr1.length; j++) {
//             if(arr[i].name === name && arr[i].maVung === arr1[j].maVung) {
//                 string[string.length] = arr1[j].diem
//             }
//         }
//     }
//     return string.length > 0 ? string : 'Không tìm thấy'
// }
// console.log(findDiemVungName('A', hocSinh, diemVung));

// function tongDiemThi(name, arr, arr1, arr2) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr1.length; j++) {
//             if(arr[i].name === name && arr[i].maVung === arr1[j].maVung) {
//                 sum += arr1[j].diem
//                 for(var k = 0; k < arr2.length; k++) {
//                     sum += arr2[k].Toan + arr2[k].Van + arr2[k].anh
//                     return sum
//                 }
//             }
//         }
//     }
// }
// console.log(tongDiemThi('B', hocSinh, diemVung, diemThi));

// function checkDoTotNghiep(name, arr, arr1, arr2) {
//     for(var i = 0; i < arr2.length; i++) {
//         if(arr2[i].Toan > 1 && arr2[i].Van > 1 && arr2[i].anh > 1 && tongDiemThi(name, arr, arr1, arr2) >= 15) {
//             return 'Đỗ'
//         } else {
//             return 'Trượt'
//         }
//     }
// }
// console.log(checkDoTotNghiep('A', hocSinh, diemVung, diemThi));

// function checkDoDaiHoc(name, arr, arr1, arr2, arr3) {
//     var string = []
//     for(var i = 0; i < arr3.length; i++) {
//         if(tongDiemThi(name, arr, arr1, arr2) >= arr3[i].diemChuan) {
//             string[string.length] = 'Đỗ trường' + ' ' + arr3[i].ten
//         } else {
//             string[string.length] = 'Không đỗ trường' + ' ' + arr3[i].ten
//         }
//     }
//     return string
// }
// console.log(checkDoDaiHoc('A', hocSinh, diemVung, diemThi, truong));

// Bài 6: 
// var array = [1,4,3,2,5,7,10,5,9,11,23,35,71,43]
// -) Hãy viết 1 funtion in ra dãy các số nguyên tố và vị trí của nó trong array  
// -) Tính tổng các số nguyên tố trong array  và trung bình cộng của các số trong array
// -) Viết funtion để tính tích của các số nguyên tố trong dãy array 

// function checkNguyenTo(n) {
//     if(n <= 1) {
//         return false
//     }
//     for(var i = 2; i <= Math.sqrt(n); i++) {
//         if(n % i === 0) {
//             return false
//         }
//     }
//     return true
// }

// var a = []
// function soNguyenTo(arr) {
//     for(var i = 0; i < arr.length; i++) {
//         if(checkNguyenTo(arr[i]) === true) {
//             a[a.length] = arr[i]
//             console.log(i);
//         }
//     }
//     return a
// }
// console.log(soNguyenTo(array));

// function tongNguyenTo(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(tongNguyenTo(a));

// function tbcNguyenTo(arr) {
//     var cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         cnt++
//     }
//     return tongNguyenTo(arr) / cnt
// }
// console.log(tbcNguyenTo(a));

// function tichNguyenTo(arr) {
//     var multy = 1
//     for(var i = 0; i < arr.length; i++) {
//         multy *= arr[i]
//     }
//     return multy
// }
// console.log(tichNguyenTo(a));

// Bài 7: 
// var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,2,4,12];
// var array2 = [4,6,3,8,5,7,4,1,2,9,6,5,3,1,5,2,7,6,8,6,3,2,1,5];
// var array3 = [2,5,1,6,3,8,4,10,5,3,1,6,5,2,6,4,8,9,2,1,5,8,7,12];
// a) Viết function Tính tổng, tích, giá trị trung bình cộng của cả 3 array
// 
//b) Viết function Tính tích của các phần tử từ đầu đến vị trí số 2 xuất hiện lần thứ 3 của array1 với tích phần 
// tử từ đầu đến vị trí có giá trị là 5 xuất hiện lần 2 của array2
//c) Viết function Tính tích, tính tổng của các phần tử từ vị trí số 
// 2 xuất hiện lần đầu đến vị trí số 2 xuất hiện lần thứ 4 của cả 3 array . 

// function tongMang(arr) {
//     var sum = 0
//     for(var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(tongMang(array1));
// console.log(tongMang(array2));
// console.log(tongMang(array3));

// function tbcMang(arr) {
//     var cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         cnt++
//     }
//     return tongMang(arr) / cnt
// }
// console.log(tbcMang(array1));
// console.log(tbcMang(array2));
// console.log(tbcMang(array3));

// function tichMang(arr) {
//     var multy = 1
//     for(var i = 0; i < arr.length; i++) {
//         multy *= arr[i]
//     }
//     return multy
// }
// console.log(tichMang(array1));
// console.log(tichMang(array2));
// console.log(tichMang(array3));

// function tichTwoArray(a, b, arr1) {
//     var cnt = 0
//     var multy = 1
//     for(var i = 0; i < arr1.length; i++) {
//         cnt = arr1[i] === a ? ++cnt : cnt
//         multy *= arr1[i]
//         if(cnt === b) {
//             break
//         }
//     }
//     return multy
// }
// console.log(tichTwoArray(2, 3, array1) * tichTwoArray(5, 2, array2));

// function tichArray (a, b, c, arr) {
//     var cnt = 0
//     var multy = 1
//     for(var i = 0; i < arr.length; i++) {
//         cnt = arr[i] === a ? ++cnt : cnt
//         if(cnt === b) {
//             break
//         }
//     }
//     multy *= arr[i]
//     cnt = 0
//     for(var i = 0; i < arr.length; i++) {
//         cnt = arr[i] === a ? ++cnt : cnt
//         multy *= arr[i]
//         if(cnt === c) {
//             break
//         }
//     }
//     return multy
// }
// console.log(tichArray(2, 1, 4, array1));

// Bài  8 

// var khachHang = [
//     {ten:'nguyen van nam', gioiTinh: 'nam', diemTichLuy: 125, dichVuDangKy: 'A'},
//     {ten:'dao linh huong', gioiTinh: 'nu', diemTichLuy: 170, dichVuDangKy: 'B'},
//     {ten:'le dinh hieu', gioiTinh: 'nam', diemTichLuy: 115, dichVuDangKy: 'C'},
//     {ten:'nguyen tien dat', gioiTinh: 'nam', diemTichLuy: 75, dichVuDangKy: 'B'},
//     {ten:'nguyen van quy', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'A'},
//     {ten:'tran ngoc diep', gioiTinh: 'nu', diemTichLuy: 105, dichVuDangKy: 'B'},
//     {ten:'lai the anh', gioiTinh: 'nam', diemTichLuy: 55, dichVuDangKy: 'C'},
//     {ten:'tran thi ngoc tram', gioiTinh: 'nu', diemTichLuy: 65, dichVuDangKy: 'C'}
// ]

// var dichVu = [
//     {ten: 'A', khuyenMai: 0.2, giaTri:250},
//     {ten: 'B', khuyenMai: 0.18, giaTri:210},
//     {ten: 'C', khuyenMai: 0.15, giaTri:200},
// ]

// var hangHoa = [
// 	{id: 1, product:'P1 ', price: 259000, store: 100},
// 	{id: 2, product: 'P1', price: 129000, store: 230},
// 	{id: 3, product: 'O2', price: 749000, store: 130},
// 	{id: 4, product: 'O6', price: 499000, store: 240},
// ] 

//a ) Viết function in ra danh sách các khách hàng có khả năng đăng ký thẻ VIP 
// với điều kiện điểm tích lũy lớn hơn 100 .
//b, Viết function in ra danh sách khách hàng theo dịch vụ mà từng người đăng ký.

// c ) Viết function in ra danh sách các khách hàng nam .
// Viết function in ra danh sách các khách hàng nữ .
// d )  Viết function tính giá sản phẩm theo từng khách hàng .  Nếu số lượng người dùng 
// cần mua quá số lượng còn trong kho thì in ra “ Trong kho không đủ sản phẩm , vui lòng mua ít hơn “ . 
// Ví dụ :  Nguyễn Văn A  , đăng ký dịch vụ A ( khuyến mãi = 20%) và mua sản phẩm O2 với số 
// lượng 10 cái . thì giá là 749000*10 -( 749000*10 )*0.2.

// function registCard(arr) {
//     var list = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].diemTichLuy > 100) {
//             list[list.length] = arr[i]
//         }
//     }
//     return list
// }
// console.log(registCard(khachHang));

// function serviceCustomer(arr, arr2) {
//     var list = []
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr2.length; j++) {
//             if(arr[i].dichVuDangKy === arr2[j].ten) {
//                 list[list.length] = {
//                     ten: arr[i].ten, 
//                     service: arr2[j]
//                 }
//             }
//         }
//     }
//     return list
// }
// console.log(serviceCustomer(khachHang, dichVu));

// function gendarCustomer(a, arr) {
//     var list = []
//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i].gioiTinh === a) {
//             list[list.length] = arr[i]
//         }
//     }
//     return list
// }
// console.log(gendarCustomer('nam', khachHang));

// function priceProduct(name, nameProduct, quantity, arr1, arr2, arr3) {
//     for(var i = 0; i < arr1.length; i++) {
//         var sum = 0
//         var khuyenMai = 0
//         if(arr1[i].ten === name) {
//             for(var j = 0; j < arr2.length; j++) {
//                 if(arr1[i].dichVuDangKy === arr2[j].ten) {
//                     khuyenMai = arr2[j].khuyenMai
//                 }
//             }
//             for(var k = 0; k < arr3.length; k++) {
//                 if(arr3[k].store < quantity) {
//                     console.log('Trong kho không đủ sản phẩm , vui lòng mua ít hơn');
//                 } else if (arr3[k].product === nameProduct) {
//                     sum += arr3[k].price * quantity + arr3[k].price * quantity * khuyenMai
//                 }
//             }
//         }
//         arr1[i].totalPrice = sum
//     }
//     return arr1
// }
// console.log(priceProduct('nguyen van nam', 'O2', 10, khachHang, dichVu, hangHoa));

// Bài 9 :
var tenKhach = [
    {ten: 'nguyen the su', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'S'}, 
    {ten: 'ngo van khoai', gioBay: '9:30', diemDen: 'Ha Noi', veKhoang: 'A'}, 
    {ten: 'tau dau hu', gioBay: '10:15', diemDen: 'Hai Phong', veKhoang: 'B'}, 
    {ten: 'chuyen lua gat', gioBay: '11:30', diemDen: 'Nha Trang', veKhoang: 'C'}, 
    {ten: 'le quan quy', gioBay: '14:30', diemDen: 'TP.HCM', veKhoang: 'A'}, 
    {ten: 'hoang hao hoa', gioBay: '11:30', diemDen: 'Nam Dinh', veKhoang: 'B'}, 
]

var choNgoi = [
    {ten: 'Ghe hang king', mave:'S'},
    {ten: 'Ghe hang thuong gia', mave:'A'},
    {ten: 'Ghe hang pho thong', mave:'B'},
    {ten: 'Ghe hang pho cap', mave:'C'},
]

var chuyenBay = [
    { gioBay: '11:30', diemDen:'Nha Trang', maMayBay: 'AB123' },
    { gioBay: '13:30', diemDen:'Nha Trang', maMayBay: 'GD178' },
    { gioBay: '11:30', diemDen:'Nam Dinh', maMayBay: 'BC452' },
    { gioBay: '14:30', diemDen:'TP.HCM', maMayBay: 'GD73' },
    { gioBay: '10:15', diemDen:'Hai Phong', maMayBay: 'FT351' },
]

//a )Viết function in ra thông tin của những người cùng giờ bay và cho 
// thêm dữ kiện họ ngồi ghế gì, trên những chuyến bay nào.
//b )  Hãy in ra thông tin chi tiết của người bay vào 9h30 và có cả dữ liệu 
// họ ngồi ghế ghì, trên những chuyến bay nào.
// c ) Viết function tìm theo tên hành khách và in ra chuyến bay của họ.

