var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var arrAB =[];

function timPhanTuGiaoNhau(mang1, mang2) {
    const set1 = new Set(mang1);
    const ketQua = [...set1].filter(item => mang2.includes(item));
    return ketQua;
};

console.log(timPhanTuGiaoNhau(arrA, arrB));
