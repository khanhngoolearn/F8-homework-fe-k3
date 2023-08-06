var a = 4 , b = 3, c = 5;

if (a > b && a > c && b > c) {
    console.log(c, b, a);
    if (c > b) {
        console.log(b, c, a);
    }
} else if (b > a && b > c && a > c) {
    console.log(c, a, b);
    if (c > a) {
        console.log(a, c, b);
    }
} else if(c > a && c > b && b > a) {
    console.log(a, b, c);
} else {
    console.log(b, a, c);
}