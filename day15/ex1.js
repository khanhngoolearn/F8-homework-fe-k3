function permute(a, b) {
    [a, b] = [b, a];
    return {a,b };
}

var a = 2, b = 3;
({a, b} = permute(a, b));
console.log("Permute: ", a, b);