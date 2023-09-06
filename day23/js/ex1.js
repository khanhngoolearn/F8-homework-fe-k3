function Sum(...values) {
    let sum = 0;
    for(let value of values) {
        if(typeof value !== 'number') {
            throw new Error(`${value} in ${values} is not number`);
        }
        sum += value;
    }
    return sum;
}

console.log(Sum(3, 5,3 , 5,2, 5));
  