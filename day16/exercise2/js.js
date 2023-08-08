var kwh = 2343, total;

if (kwh <= 50) {
    total = kwh * 1678;
} else if (kwh > 50 && kwh <= 100) {
    total = kwh * 1734;
} else if (kwh > 100 && kwh <= 200) {
    total = kwh * 2014;
} else if (kwh > 200 && kwh <= 300) {
    total = kwh * 2536;
} else if (kwh > 300 && kwh <= 400) {
    total = kwh * 2834;
} else {
    total = kwh * 2927;
}

console.log("You must pay: ", total, "vnd");