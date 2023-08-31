var arr = [["a", 1, true], ["b", 2, false]];
if(Array.isArray(arr)) {
    arr = arr.flat(Infinity);
    var array = arr.reduce(function(prev, current) {
        var type = typeof current;
        if (!prev[type]) {
            prev[type] = [];
        }

        prev[type].push(current);

        return prev;
    }, []);
    var result = [];
    for(var index in array) {
        result.push(array[index]);
    }

    console.log(result);
}