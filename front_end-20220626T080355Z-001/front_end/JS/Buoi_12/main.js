
// new Promise(function(res, rej){
//     let soDu = 50000
//     if(soDu > 50000) {
//         res('ok')
//     } else {
//         rej('vui lòng nạp tiền')
//     }
// })
// .then(function(data){
//     console.log(11, data);
// })
// .catch(function(err){
//     console.log(14, err);
// })

let chuyenKhoan = 3000000

let p1 = new Promise(function(res, rej){
    let kq
    setTimeout(function(){
        kq = {error: false, data: 500000}
        // kq = {error: true, message: 'user not found'}
        if(!kq.error && kq.data >= chuyenKhoan){
            res(kq)
        }else{
            rej(kq)
        }
    },2000)
})


let p2 = new Promise(function(res, rej){
    let kq
    setTimeout(function(){
        kq = {error: false, data: 3000000}
        // kq = {error: true, message: 'user not found'}
        if(!kq.error){
            res(kq)
        }else{
            rej(kq)
        }
    },1000)
})

// p1.then(function(data){
//     p2.then(function(data2){
//         data2.data = data2.data + data.data
//         console.log(47, data2);
//     })
// }).catch(function(error){
//     console.log(error);
// })
// console.log(p1);

Promise.all([p1, p2]).then(function(data){
    console.log(56, new Date());
    data[1].data = data[1].data + data[0].data
    console.log(data[1]);
}).catch(function(err){
    console.log(err);
})




