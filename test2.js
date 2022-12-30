let nilaiarray = [1, 1, 0, -1, -1];
let positif = 0;
let negatif = 0;
let nol = 0;
for (let i = 0; i < nilaiarray.length; i++) {
  if (nilaiarray[i] === 0) {
    nol++;
  } else if (nilaiarray[i] > 0) {
    positif++;
  } else {
    negatif++;
  }
}

console.log((positif / nilaiarray.length).toFixed(6));
console.log((negatif / nilaiarray.length).toFixed(6));
console.log((nol / nilaiarray.length).toFixed(6));

console.log("=========================");

let nilaiarray1 = [-4, 3, -9, 0, 4, 1];
let positif1 = 0;
let negatif1 = 0;
let nol1 = 0;
for (let i = 0; i < nilaiarray1.length; i++) {
  if (nilaiarray1[i] > 0) {
    positif1 += 1;
  } else if (nilaiarray1[i] < 0) {
    negatif1 += 1;
  } else {
    nol1 += 1;
  }
}
console.log((positif1 / nilaiarray1.length).toFixed(6) + "");
console.log((negatif1 / nilaiarray1.length).toFixed(6) + "");
console.log((nol1 / nilaiarray1.length).toFixed(6) + "");
