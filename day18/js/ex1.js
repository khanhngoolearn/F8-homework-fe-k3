function findMaxMinandIndices(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return [null, null, null, null];
    }
    var minNum = maxNum = arr[0];
    var minIndex = maxIndex = 0;

    for (var i = 0; i < arr.length; i++) {
        if(arr[i] < minNum) {
            minNum = arr[i];
            minIndex = i;
        }
        if(arr[i] > maxNum) {
            maxNum = arr[i];
            maxIndex = i;
        }
    }
    return [minNum, minIndex, maxNum, maxIndex];
};

var array = [4, 6, 2, 8, 1];
var [minNum, minIndex, maxNum, maxIndex] = findMaxMinandIndices(array);
console.log(minNum);
console.log(minIndex);
console.log(maxNum);
console.log(maxIndex);