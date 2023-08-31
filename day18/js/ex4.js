var numbers = [2, 42, 35, 63 , 2, 55 ,1];
numbers.sort(function(a, b) {
    return a - b;
});

var element = 100;

if (element < numbers[0]) {
    numbers.unshift(element);
} else if (element > numbers[numbers.length - 1]) {
    numbers.push(element);
} else {
    var indexInsert;
    for (var i = 0; i < numbers.length - 1; i++) {
        if (element >= numbers[i] && element < numbers[i + 1]) {
            indexInsert = i + 1;
        }
    }
    numbers = numbers.slice(0,indexInsert).concat(element, numbers.slice(indexInsert));
}

console.log(numbers);