var number = parseInt('3')

var Number = 10000
var string = Number.toString ()

var so = 2000
var String = so.toString ()

console.log(typeof string);
console.log(typeof String);

var So = 10
console.log( So++ + ++So - ++So - So-- + --So );

var user = {
    tuoi: 66,
    gioiTinh: 'nam',
    ngheNghiep: 'a'
}
console.log(user.tuoi < 18 || user.tuoi > 60 || (18 <= user.tuoi <= 60 && user.ngheNghiep === ''));

var troCap = (user.tuoi < 18) ? 2000000 : ((user.tuoi > 60 && user.gioiTinh === 'nu') ? 3000000 : 
             ((user.tuoi >= 65 && user.gioiTinh === 'nam') ? 2500000 : 0))
console.log(troCap);