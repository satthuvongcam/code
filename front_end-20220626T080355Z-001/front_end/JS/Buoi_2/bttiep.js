// Bài 2
var x = 2
// var a = 8 + x++ + ++x - --x + x++ + 7
var b = 5 + ++x + ++x + --x - x-- - ++x  + 10
// var c = 1 + x-- + --x - ++x + --x - 11
// var d = 15 + --x + --x - x++ +--x + 12

// console.log(a);
console.log(b);
// console.log(c);
// console.log(d);

// Bài 4
var button = 'abckqe'
var page = 5

var test = (page == 10 && button === 'next') ? page = 10 : (button === 'next') ? ++page 
: (page == 1 && button === 'prev') ? page = 1 : (button === 'prev') ? --page : 
(button.length >= 1 && button.length <= 10) ? page = button.length : 0

console.log(test);