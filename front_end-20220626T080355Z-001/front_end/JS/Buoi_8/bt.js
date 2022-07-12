// Bài 1: 
// cho biến a là mốc thời gian hiện tại
// -) In ra giá trị của a 
// -) In ra giá trị của a dưới dạng String 
// -) In ra ngày, tháng, năm hiện tại 
// -) Ghi đè ngày, tháng , năm của a bằng ngày tháng năm theo ý muốn
// var a = new Date()
// console.log(a);
// console.log(a.toString());

// console.log(new Date('2022/06/11'));

// a.setFullYear(2003, 10, 10)
// console.log(a);

// Bài 2: 
// Viết 1 function có giá trị đầu vào là a và b và trả ra kết quả là a mũ b
// Viết 1 function có giá trị đầu vào là c và trả ra kết quả là c căn bậc 2 
var array1 = [1,5,2,6,2,8,9,4,6,2,3,5,7,9,3,2,75,6,4,3,7,5,2,4,13];
// Dùng toán tử để viết 1 function xuất ra giá trị lớn nhất và nhỏ nhất của dãy 
// Và viết function và xuất ra số trung bình 
// cộng của dãy (lưu ý giá trị của trung bình cộng thì làm tròn)

function mu(a,b){
    return a ** b
}
console.log(mu(2,3));

function can(c){
    return c ** (1/2)
}
console.log(can(4));

function max(arr){
    var Max = arr[0]
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] > Max) {
            Max = arr[i]
        }
    }
    return Max
}
console.log(max(array1));

function min(arr){
    var Min = arr[0]
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] < Min) {
            Min = arr[i]
        }
    }
    return Min
}
console.log(min(array1));

function tbc(arr){
    var sum = 0
    var cnt = 0
    arr.map(function(value){
        sum += value
        ++cnt
    })
    return sum / cnt
}
console.log(tbc(array1));