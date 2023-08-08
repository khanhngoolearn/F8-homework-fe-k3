function number_triangle(n) {
    var num = 1;
    
    for (var i = 1; i <= n; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += num + ' ';
            num++;
        }
        console.log(row);
    }
}

var line_number = 5;
number_triangle(line_number);