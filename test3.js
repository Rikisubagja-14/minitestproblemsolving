let masukanjam = "07:05:45PM";
// memanggil jam
let jam = Number(masukanjam[1] - "0");
let jam1 = Number(masukanjam[0] - "0");
let hours24 = jam1 * 10 + (jam % 10);

// jika waktu adalah "AM"
if (masukanjam[8] == "AM") {
  if (hours24 == 12) {
    console.log("00");
    for (let i = 2; i <= 7; i++) console.log(masukanjam[i]);
  } else {
    for (let i = 0; i <= 7; i++) console.log(masukanjam[i]);
  }
}
// jika waktu adalah "PM"
else {
  if (hours24 == 12) {
    console.log("12");
    for (let i = 2; i <= 7; i++) console.log(masukanjam[i]);
  } else {
    hours24 = hours24 + 12;
    console.log(hours24);
    for (let i = 2; i <= 7; i++) console.log(masukanjam[i]);
  }
}
