Array.prototype.customReduce = function(callback, initialValue) {
    let accumulator = initialValue === undefined ? this[0] : initialValue;
  
    for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
      accumulator = callback(accumulator, this[i], i, this);
    }
  
    return accumulator;
};
  
const numbers = [1, 2, 3, 4, 5];
  
const sum = numbers.customReduce((acc, num) => acc + num, 0);
  
console.log(sum); 
  
  