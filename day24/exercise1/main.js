function reserve(number) {
    var reservedNumber = 0;
    while (number > 0) {
        var digit = number % 10;
        reservedNumber = reservedNumber * 10 + digit;
        number = Math.floor(number / 10);
    }
    return reservedNumber;
}

console.log(reserve(225325287));
