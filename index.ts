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
 * .some()
 *
 * mengecek apakah di dalam array ada data yang sesuai kondisi
 * menghasilkan nilai true / false
 * tidak mengubah isi array
 * bisa dimasukkan ke dalam variabel baru
 */

// console.log("sebelum some", angkaArr);
// const adakah = angkaArr.some((value, index, arr) => value > 5);
// console.log(adakah);
// console.log("setelah some", angkaArr);

// console.log("sebelum some", kataArr);
// const adakah = kataArr.some((value) => value.length > 5);
// console.log(adakah);
// console.log("setelah some", kataArr);

console.log("sebelum some", siswaArr);
const adakah = siswaArr.some((value) => value.nilai < 50);
console.log(adakah);
console.log("setelah some", siswaArr);
