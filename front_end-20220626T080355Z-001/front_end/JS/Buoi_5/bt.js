// var khach = [
//     {username: 'huy', age: 15, class: 'A'},
//     {username: 'vinh', age: 20, class: 'B'},
//     {username: 'nam', age: 16, class: 'C'},
//     {username: 'tien', age: 25, class: 'C'},
//     {username: 'binh', age: 30, class: 'A'},
//     {username: 'kien', age: 17, class: 'B'}
// ]

// var gia = [
//     {class: 'A', price: 1000000, child: 0.5},
//     {class: 'B', price: 800000, child: 0.7},
//     {class: 'C', price: 500000, child: 1}
// ]
// a, thêm giá cho từng khách
// hãy thêm totalPrice cho từng hành khách

// b
// hành khách < 18 tuổi hưởng giá trẻ em
// hãy cập nhật lại giá tiền lại cho user

// function cost(arr, arr1) {
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr1.length; j++) {
//             if(arr[i].class === arr1[j].class) {
//                 arr[i].totalPrice = arr1[j].price
//             }
//         }
//     }
//     return arr
// }
// console.log(cost(khach, gia));

// function cost1(arr, arr1) {
//     for(var i = 0; i < arr.length; i++) {
//         for(var j = 0; j < arr1.length; j++) {
//             if(arr[i].class === arr1[j].class) {
//                 if(arr[i].age < 18) {
//                     arr[i].totalPrice = arr1[j].price * arr1[j].child
//                 } else {
//                     arr[i].totalPrice = arr1[j].price
//                 }
//             }
//         }
//     }
//     return arr
// }
// console.log(cost1(khach, gia));

var shop = [
    {id: 1, product: 'ao so mi', price: 200000, store: 100},
    {id: 2, product: 'ao khoac', price: 800000, store: 20},
    {id: 3, product: 'ao gio', price: 500000, store: 30},
    {id: 4, product: 'ao phong', price: 540000, store: 40}
]

var cart = [
    {user: 'huy', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]},
    {user: 'linh', buy: [{id: 1, quantity: 5}, {id: 3, quantity: 5}, {id: 2, quantity: 5}]},
    {user: 'hai', buy: [{id: 1, quantity: 10}, {id: 2, quantity: 5}, {id: 4, quantity: 5}]},
    {user: 'kien', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 7}]}
]

// // a. tính tiền cho từng user và thêm totalPrice
// // b. cập nhật lại kho hàng cuối ngày
// c viết function mua hàng có đầu vào là object dạng
// {user: 'huy', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 1}]},
// nếu hàng trong kho đủ để đáp ứng thì tính tiền như ý a
// nếu hàng không đủ để bán thì trả ra thiếu những hàng nào, thiếu bao nhiêu

function price(arr, arr2) {
  for(var i = 0; i < arr2.length; i++) {
      arr2[i].totalPrice = 0
      for(var j = 0; j < arr2[i].buy.length; j++) {
          for(var k = 0; k < arr.length; k++) {
              if(arr2[i].buy[j].id === arr[k].id) {
                  arr2[i].totalPrice = arr2[i].totalPrice + arr2[i].buy[j].quantity * arr[k].price
              }
          }
      }
  }
    return arr2
}
console.log(price(shop, cart));

function update(arr, arr2) {
  for(var i = 0; i < arr2.length; i++) {
    for(var j = 0; j < arr2[i].buy.length; j++) {
        for(var k = 0; k < arr.length; k++) {
            if(arr2[i].buy[j].id === arr[k].id) {
                arr[k].store -= arr2[i].buy[j].quantity
            }
        }
    }
  }
  return arr
}
console.log(update(shop, cart));

function buyProduct(arr, object) {
  var donHang = object
  var tong = 0
  var buy = donHang.buy
  var isOK = true
  for(var j = 0; j < buy.length; j++) {
    for(var k = 0; k < arr.length; k++) {
      if(arr[k].id === buy[j].id) {
        if(arr[k].store >= buy[j].quantity){
          tong += arr[k].price * buy[j].quantity
        } else {
          arr[k].needMore = buy[j].quantity - arr[k].store
          isOK = false
        }
      }
    }
  }
  donHang.totalPrice = isOK ? tong : null
  return donHang
} 

var object = {user: 'huy', buy: [{id: 1, quantity: 2}, {id: 2, quantity: 2}]}
console.log(buyProduct(shop, object));

// Bài 3: In ra các số lẻ nhỏ hơn 100
// function soLe(n) {
//     for(var i = 1; i < n; i++) {
//         if(i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }
// console.log(soLe(100));

// Bài 4: Viết 1 function kiểm tra số nhập vào có phải là số nguyên tố hay không?
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

// function soNguyenTo(n) {
//     if(checkNguyenTo(n) === true) {
//         return n + ' ' + 'là số nguyên tố'
//     } else {
//         return n + ' ' +  'không là số nguyên tố'
//     }
// }
// console.log(soNguyenTo(4));

// Bài 5:
// var user= [
//     {username: 'huy', age: 15},
//     {username: 'vinh', age: 20},
//     {username: 'nam', age: 16},
//     {username: 'tien', age: 25},
//     {username: 'binh', age: 30},
//     {username: 'kien', age: 17}
//   ]

// Hãy viết function có đầu vào là 1 number để tăng tuổi của tất cả user lên number đơn vị

// function upAge(number, arr) {
//     for(var i = 0; i < arr.length; i++) {
//         arr[i].age += number
//     }
//     return arr
// }
// console.log(upAge(2, user));

// bai 6:
var array = [4, 6, 8, 8, 7, 6, 2, 1, 3, 5, 7, 9, 5, 1, 3, 6];

// hãy cho biết mỗi phần tử trong array trên lặp lại bao nhiêu lần
// kq [{so: 4, lapLai:1}, {so: 6, lapLai:2}, {so: 8, lapLai:2}, ….]

// Cách 1
// function lapLai(arr) {
//   var result = []
//   for(var i = 0; i < arr.length; i++) {
//     var checkExist = false
//     for(var k = 0; k < result.length; k++) {
//       if(arr[i] === result[k].so) {
//         checkExist = true
//         break
//       }
//     }
//     if(!checkExist) {
//       var cnt = 0
//       for(var j = 0; j < arr.length; j++) {
//         if(arr[i] === arr[j]) {
//           ++cnt
//         }
//       }
//       result[result.length] = {
//         so: arr[i],
//         lapLai: cnt
//       }
//     }
//   }
//   return result
// }
// console.log(lapLai(array));

// Cách 2
// B1     taoj ra arrray khong trùng [4,6,8,2,7,9,5,1,3]
var newArr = []
for(var i = 0; i < array.length; i++){
  var check = true
  for(var j = 0; j < newArr.length; j++){
    if(array[i] === newArr[j]){
      check = false
      break
    }
  }
  if(check){
    newArr[newArr.length] = array[i]
  }
}


// B2     mang từng từng phần tử không trùng đểm trong array gốc
var ketQua = []
for(var i = 0; i < newArr.length; i++){
  var count = 0
  for(var j = 0; j < array.length; j++){
    if(array[j] === newArr[i]){
      count++
    }
  }
  ketQua[ketQua.length] = {so: newArr[i], lapLai: count}
}
console.log(200, ketQua);

