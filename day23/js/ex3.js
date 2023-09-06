Array.prototype.push2 = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this.length;
}

var arr = ['cow', 'buffalo', 'fish'];
var result = arr.push2('dog', 'cat');
console.log(arr);