function sum(n) {
    if (n == 1) {
        return 1;
    } else {
        return 1 / n + sum(n- 1);
    }
}

var n = 5, s = sum(n);
console.log(`Sum is: ${s}`);