// Bài 1: 
// giả sử tải file nặng 500 mb 
// tốc độ tải mỗi giây biến động trong khoảng từ 1 - 10 mb/s 
// hãy hiển thị % download mỗi giây 1 lần, đến 100% thì thông báo tải thành công và kết thúc 
// Nâng cao bài 2 là mỗi lần hiển thị % download mới thì thời gian ngẫu nhiên từ 1 đến 3 giây


// function download(weightFile, callback){
//     let total = 0
//     let i = 0
//     let tongThoiGian = 0
//     let sum = 0
//     let kq = setInterval(function(){
//         total += Math.round(Math.random() * 9 + 1)
//         i += callback(tongThoiGian)
//         sum = (total / weightFile) * 100
//         if(sum < 100){
//             tongThoiGian = callback(tongThoiGian)
//             console.log(tongThoiGian);
//             console.log(i + 's');
//             console.log(total + ' MB');
//             console.log(sum + '%');
//         } else{
//             tongThoiGian = callback(tongThoiGian)
//             console.log(tongThoiGian);
//             console.log(i + 's');
//             console.log(500 + ' MB');
//             console.log(100 + '%');
//             clearInterval(kq)
//         }
//     }, callback(tongThoiGian) * 1000)
// }
// download(500, function(tongThoiGian){
//     return tongThoiGian = Math.round(Math.random() * 2 + 1)
// })

// Bài 2 :  

// Áp dụng setIterval  , tạo một function có tác dụng giống với đồng hồ đếm ngược . 
// Đầu vào số giây cần đếm ngược  .
// nếu Người dùng cố tình nhập vào một số âm thì  in ra “ Hãy nhập số > 0 “ 
// Nếu số giây đã đếm hết (tức số đếm hiện tại <= 0) thì hiển thị thông báo: Bạn đã hết giờ làm bài.
//  Nếu số giây còn thì hiển thị số giây còn lại

// function workSameCountdown (second) {
//     if(second < 0) {
//         console.log('Hãy nhập số > 0');
//     } else {
//         let runTime = setInterval(function(){
//             second -= 1000
//             if(second > 0) {
//                 console.log(second + 's');
//             } else {
//                 console.log('Bạn đã hết giờ làm bài');
//                 clearInterval(runTime)
//             }
//         }, 1000)
//     }
// }
// workSameCountdown(100000)


// Bài 3 :  

//  promise1 xử lý tác vụ 3s  cho ra kết quả là 2
// 	promise2 xử lý tác vụ 3s và CẦN data của tác vụ 1 trả ra kết quả giá trị x3 kết quả tác vụ 1 (=6)
// 	promis3 CẦN data của tác vụ 2 để xác định kết quả tác vụ 2 có > 10 hay không
// 	in ra màn hình true hoặc false. 

// let result = 0
// let promise1 = new Promise(function(res, rej){
//     setTimeout(function(){
//         res(2)
//     }, 3000)    
// })
// promise1.then(function(data){
//     console.log(data);
//     result = data
// }).catch(function(err){
//     console.log(err);
// })

// let promise2 = new Promise(function(res, rej){
//     setTimeout(function(){
//         res(result * 6)
//     }, 3000)    
// })
// promise2.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise3 = Promise.all([promise1, promise2])
// promise3.then(function(data){
//     if(data[1] > 10) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }).catch(function(err){
//     console.log(err);
// })


// B4: tạo 1 promise1 với tác vụ resovle sau 3 giây (dùng settimeout)
// 	tạo 1 promise2 tác vụ resolve sau 2 giây
// 	tạo 1 promise3 tác vụ reject sau 2 giây
// dùng .all  để thực hiện song song tác vụ tiết kiệm time.

// let promise1 = new Promise(function(res){
//     setTimeout(function(){
//         res('done')
//     }, 3000)
// })
// promise1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise2 = new Promise(function(res){
//     setTimeout(function(){
//         res('oke')
//     }, 2000)
// })
// promise2.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise3 = new Promise(function(rej){
//     setTimeout(function(){
//         rej('failed')
//     }, 2000)
// })
// promise3.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise4 = Promise.all([promise1, promise2, promise3])
// promise4.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })


// B5: áp dụng hợp lý, promise1 xử lý 2s retrun 3. promise2 xử lý 5s return 7
// 	Bài toán Cần data của 2 tác vụ trên, biết prmise1 vs promise2 không phụ thuộc nhau. 
// Viết chương trình sao cho kết quả trả về 3+7=10 trong thời gian ngắn nhất 

// let promise1 = new Promise(function(res){
//     setTimeout(function(){
//         res(3)
//     }, 2000)
// })
// promise1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise2 = new Promise(function(res){
//     setTimeout(function(){
//         res(7)
//     }, 3000)
// })
// promise2.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise3 = Promise.all([promise1, promise2])
// promise3.then(function(data){
//     console.log(data[0] + data[1]);
// }).catch(function(err){
//     console.log(err);
// })


// B7:	
// cho tài khoản khách số dư 10 tr thực hiện mua hàng 3 tr và nhận hoàn tiền 10%
// tài khoản shop dư 100tr
// viết promise1 kiểm tra số dư trong 1s và trả về true nếu số dư của khách đủ 
// để thanh toán / false nếu khách không đủ số dư
// viết promise2 để chuyển tiền từ khách sang shop ( khách - 3 , shop + 3) và trả về số dư của 2 bên
// viết promise3 để hoàn tiền 10% sau khi đã thanh toán ở promise2 và trả về số dư của 2 bên
// (khách + 10% * 3 ,  shop - 3 * 10%)  

// let khachHang = 10
// let shop = 100

// let result1 = 0
// let result2 = 0
// let promise1 = new Promise(function(res, rej){
//     if(khachHang > 3) {
//         res(true)
//     } else {
//         rej(false)
//     }
// })

// promise1.then(function(data){
//     console.log(209, data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise2 = Promise.all([promise1])
// promise2.then(function(data){
//     if(data){
//         result1 = khachHang - 3
//         result2 = shop + 3
//         console.log('So du khach hang:', result1)
//         console.log('So du shop:', result2);
//     } else {
//         console.log('tài khoản không đủ số dư');
//     }
// }).catch(function(err){
//     console.log(err);
// })

// let promise3 = Promise.all([promise2])
// promise3.then(function(data){
//     console.log('So du khach hang:', result1 + 3 * 0.1)
//     console.log('So du shop:', result2 - 3 * 0.1);
// }).catch(function(err){
//     console.log(err);
// })

// Bài 8  :  

const cuaHang = [
    {ten: 'Bia', loai: 'A', gia:10000,soLuong:200},
    {ten: 'Rượu',loai: 'A',gia:20000,soLuong:50},
    {ten: 'Coca',loai: 'A',gia:15000,soLuong:100},
    {ten: 'Bia Tươi',loai: 'B',gia:12000,soLuong:55},
    {ten: 'Rượu Vang',loai: 'B',gia:50000,soLuong:250},
    {ten: 'Bánh Đa',loai: 'C',gia:5000,soLuong:300},
    {ten: 'Lạc giang',loai: 'C',gia:12000,soLuong:200},
    {ten: 'Lạc luộc',loai: 'B',gia:14000,soLuong:150}
    ]
 
let bienLai = [
    {ten:'Lạc luộc',soLuong:20},
    {ten:'Bia',soLuong:10},
    {ten:'Bánh Đa',soLuong:20}     
]

// c1 viết promise in ra tất cả các sản phẩm của cửa hàng nếu không ra thì trả về (false) .
// c2: viết promise in ra tất cả các sản phẩm theo từng loại A,B,C .
// c3 viết promise in ra tất cả các sản phẩm có giá >=15000 .
// c4: Tính tiền theo biên lai .Nếu số lượng trong cửa hàng không đủ thì in ra “ cửa hàng đủ sản phẩm “ 

let promise1 = new Promise(function(res, rej){
    let result = []
    cuaHang.map(function(value){
        result.push(value)
        res(result)
    })
    if(cuaHang.length === 0) {
        rej(false) 
    }
})
promise1.then(function(data){
    data.map(function(value){
        console.log(value);
    })
}).catch(function(err){
    console.log(err);
})

function type (arr, nameType){
    return arr.filter(function(value){
        if(value.loai === nameType){
            return true
        }
    })
}

let promise2 = Promise.all([promise1])
promise2.then(function(data){
    let A = data.filter()
}).catch(function(err){
    console.log(err);
})


