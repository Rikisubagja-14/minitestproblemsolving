let angka = [1, 3, 5, 7, 9];
let angka2 = [1, 3, 2, 4, 5];

// untuk mendapatkan nilai maximal dan minimal
let jumalah1 = angka.reduce((nilai1, nilai2) => nilai1 + nilai2);

let max = Math.max(...angka);
let min = Math.min(...angka);
console.log(`${jumalah1 - max} ${jumalah1 - min}`);

console.log("==============================================");

// mengurutkan nilai
data = angka2.sort((nilai1, nilai2) => nilai1 - nilai2);

// untuk mendapatkan nilai maximal dan minimal
const jumlah2 = angka2.reduce((i, total) => i + total);
console.log(jumlah2 - data[data.length - 1], jumlah2 - data[0]);
