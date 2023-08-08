var km = 2, total;

if (km <= 1) {
   total = 15000 * km
} else if (km > 1 && km <= 5) {
    total = 13500 * km;
} else if (km > 120) {
    total = 11000 * km * .9;
} else {
    total = 11000 * km;
}

console.log("You must pay: ", total, "vnd");