const angkaArr = [0, 1, 2, 3, 4, 9, 2, 0];
const kataArr = ["aku", "dia", "mereka", "kami"];
const siswaArr = [
  {
    id: 1,
    nama: "Andika",
    nilai: 80,
  },
  {
    id: 2,
    nama: "Wulandari",
    nilai: 76,
  },
  {
    id: 3,
    nama: "Fitri",
    nilai: 90,
  },
  {
    id: 4,
    nama: "Januar",
    nilai: 54,
  },
];

/**
 * .unshift()
 *
 * menambahkan ke sebuah array di awal posisi
 * mengubah isi array yang di .unshift()
 * data yg di .unshift() bisa lebih dari satu
 */

// console.log("array sebelum unshift", angkaArr);
// angkaArr.unshift(1, 6, 9);
// console.log("array setelah unshift", angkaArr);

// console.log("array sebelum unshift", kataArr);
// kataArr.unshift("saya", "kamu");
// console.log("array setelah unshift", kataArr);

console.log("array sebelum unshift", siswaArr);
siswaArr.unshift(
  { id: 11, nama: "Ahmad", nilai: 99 },
  { id: 12, nama: "Arman", nilai: 0 }
);
console.log("array setelah unshift", siswaArr);
