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
 * .reverse()
 *
 * membalik susunan / urutan data di dalam array
 * mengubah isi array yang di .reverse()
 * bisa dimasukkan ke dalam variabel baru
 */

// console.log("sebelum reverse", angkaArr);
// const terbalik = angkaArr.reverse();
// console.log("setelah reverse", angkaArr);
// console.log("terbalik", terbalik);

// console.log("sebelum reverse", kataArr);
// const terbalik = kataArr.reverse();
// console.log("setelah reverse", kataArr);
// console.log("terbalik", terbalik);

console.log("sebelum reverse", siswaArr);
const terbalik = siswaArr.reverse();
console.log("setelah reverse", siswaArr);
console.log("terbalik", terbalik);
