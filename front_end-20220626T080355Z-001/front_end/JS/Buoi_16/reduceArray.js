
const array = [1,2,34,5,6]


Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if(arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for(; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}



let totalItem = array.reduce2(function(total, arrayItem){
    return total + arrayItem
})
console.log(totalItem);
