Array.prototype.filter2 = function(callback) {
    if (typeof callback !== 'function') {
        throw new Error(`${callback} is not function`)
    }
    let output = [];
    for(var index in this) {
        if (this.hasOwnProperty(index)) {
            if(callback(this[index], index, this)) {
                var atom = this[index];
                output.push(atom);
            }
        }
    }
    return output;
}

var animals = ['cow', 'cat', 'dog', 'fish'];
var result = animals.filter2(function(animal) {
    return animal.length === 4;
});

console.log(result);