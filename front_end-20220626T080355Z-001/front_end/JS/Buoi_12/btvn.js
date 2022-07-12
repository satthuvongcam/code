// B5
let Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        }]
    }]
 
// c1 viết promise in ra tất cả họ và tên tất cả học viên 
// trong Nodemy nếu không ra thì trả về (false)
// c2: viết promise in ra tất cả thành viên học html
// c3 viết promise in ra tất cả thành viên có họ Nguyen
// c4: viết promise in ra tất cả học viên có subject >=3 nếu 
// không có thì in ra tất cả học viên có subject nhỏ hoặc bằng 2 

// let promise = new Promise(function(res, rej){
//     let ho = 'das'
//     let ten = 'dsa'
//     let check = false
//     for(let i = 0; i < Nodemy.length; i++) {
//         if(Nodemy[i].ho === ho && Nodemy[i].ten === ten) {
//             check = true
//             res(Nodemy[i])
//         } 
//     }
//     if(!check) {
//         rej(false)
//     }
    
// })
// promise.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise1= new Promise(function(res){
//     let learn = 'html'
//     for(let i = 0; i < Nodemy.length; i++) {
//         for(let j = 0; j < Nodemy[i].subject.length; j++){
//             if(Nodemy[i].subject[j].name === learn) {
//                 res(Nodemy[i])
//             }
//         }
//     }
    
// })
// promise1.then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// let promise3 = new Promise(function(res){
//     let result = []
//     let ho = 'Nguyen'
//     for(let i = 0; i < Nodemy.length; i++) {
//         if(Nodemy[i].ho === ho) {
//             result.push(Nodemy[i])
//             res(result)
//         } 
//     }
// })
// promise3.then(function(data){
//     console.log(100, data[0], data[1]);
// }).catch(function(err){
//     console.log(err);
// })

let promise4 = new Promise(function(res, rej){
    let result = []
    let result1 = []
    let check = false
    for(let i = 0; i < Nodemy.length; i++) {
        if(Nodemy[i].subject.length >= 3) {
            check = true
            result.push(Nodemy[i])
            res(result)
        }
    } 
    if(!check) {
        for(let j = 0; j < Nodemy.length; j++) {
            result1.push(Nodemy[j])
            rej(result1)
        }
    }
    
})
promise4.then(function(data){
    console.log(data[0]);
}).catch(function(err){
    console.log(err[0]);
})






