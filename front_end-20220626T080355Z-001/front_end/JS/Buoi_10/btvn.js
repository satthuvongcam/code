// Bài 1:
// for(var i = 0; i < 10 ; i++){

// }

// console.log(i)

// Giá trị của i là gì ?  10

// Bài 2:
// for(let i = 0; i < 10 ; i++){

// }

// console.log(i)

// Giá trị của i là gì ? Giải thích
// 'console.log(i) sẽ bị lỗi vì i được khai báo bằng let nên chỉ có thể sử dụng bên trong vòng lặp for'


// Bài 3: cho
// const object ={
// 		name: 'nodemy'
// }  
// Có gán lại  được object = ' nodemy' được không? Vì sao?
// 'Không gán được vì const không cho phép đổi biến' 
// Có gán lại được object.name = 'YA' được không?Vì sao?
// 'Được vì const cho phép thay đổi dữ liệu trong obj'

// Bài 4: Cho mảng:
// let persons = [{
//   name: 'Nam',
//   job: 'Dev'
// }, {
//   name: 'Duong',
//   job: 'Tester'
// }]

// hãy copy mảng trên và thay đổi tên dev thành ‘Kiên’, đổi tên tester thành ‘Hùng’ 
// sau khi đổi tên data cũ không bị ảnh hưởng
// let newPersons = JSON.stringify(persons);
// let newDataPersons = JSON.parse(newPersons);

// newDataPersons[0].job = 'Kiên'
// newDataPersons[1].job = 'Hùng'
// console.log(persons, newDataPersons);

