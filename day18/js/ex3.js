var arr = [2, 4, 2, 5, 6, 2, 5, 9];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
        continue;
    }
    newArr[newArr.length] = arr[i];
}

console.log(newArr);