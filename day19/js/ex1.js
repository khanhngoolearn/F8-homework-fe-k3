var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrAB = [];

for (var element of arrA) {
    if (arrB.includes(element)) {
        arrAB.push(element);
    }
}

console.log(arrAB.toString());