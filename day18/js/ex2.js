var arr = [2, 4, 6,2 ,4 , 6, 2,1, 6,7,9];
function isPrime(n) {
    if (n <= 1 || n % 1 !== 0) {
        return false;
    }

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
};

var total = 0, count = 0;
for (var i = 0; i < arr.length; i++) {
    if(isPrime(arr[i])) {
        count++;
        total += arr[i];
    }
};
var average;
if (count > 0) {
    average = total / count;
} else {
    console.log("There are no prime number");
}
