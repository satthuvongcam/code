Array.prototype.forEach2 = function (callback) {
    for(let index in this) {
        if(this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}

let arr = [1,2,3]
arr.forEach2(function(value, index){
    console.log(value, index);
})