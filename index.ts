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
 * .shift()
 *
 * mengeluarkan data pertama dari sebuah array
 * mengubah isi array yang di .shift()
 * data yg di .shift() bisa dimasukkan ke dalam sebuah variabel
 */

// console.log(angkaArr);
// // angkaArr.shift();
// const angkaPertama = angkaArr.shift();
// console.log(angkaArr);
// console.log("angka yg dishift", angkaPertama);

// console.log("sebelum di shift", kataArr);
// const kataPertama = kataArr.shift();
// console.log("setelah di shift", kataArr);
// console.log("kata yg dishift", kataPertama);

console.log("sebelum di shift", siswaArr);
const siswaPertama = siswaArr.shift();
console.log("setelah di shift", siswaArr);
console.log("siswa yg dishift", siswaPertama);
