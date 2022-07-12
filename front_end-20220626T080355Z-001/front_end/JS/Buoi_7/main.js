var array = ['Lê Thanh Tùng', 'Nguyễn Văn A', 'Lê djkajdla', 'Quang Lê']
// Hãy tìm những người họ Lê
var result = array.filter(function(value){
    return value.indexOf('Lê') === 0
})
console.log(result);

var string = 'Lại Huy Trường'

// var newString = string.substring(0,5)
// console.log(newString);
// var newString = string.substr(0,5)
// console.log(newString);

var ten = 'le minh tam'

function updateName(string){
    return string.trim().split(' ').map(function(value){
        return value.replace(value[0], value[0].toUpperCase())
    }).join(' ')
}
console.log(updateName(ten));





