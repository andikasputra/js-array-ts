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
 * .concat()
 *
 * menggabungkan 2 array atau lebih,
 * menggabungkan array dengan suatu nilai
 * tidak mengubah isi array yang di .concat()
 * menghasilkan array yang sudah digabung
 * bisa dimasukkan ke dalam variabel baru
 */

// console.log("angkaArr sebelum concat", angkaArr);
// const gabung = angkaArr.concat([1, 3, 6], 8, 9, [5, 7]);
// console.log("angkaArr setelah concat", angkaArr);
// console.log("gabung", gabung);

// console.log("kataArr sebelum concat", kataArr);
// const gabung = kataArr.concat(["cerdas", "pintar", "baik"], "hebat");
// console.log("kataArr setelah concat", kataArr);
// console.log("gabung", gabung);

console.log("siswaArr sebelum concat", siswaArr);
const gabung = siswaArr.concat([{ id: 6, nama: "Bambang", nilai: 80 }], {
  id: 7,
  nama: "Damar",
  nilai: 25,
});
console.log("siswaArr setelah concat", siswaArr);
console.log("gabung", gabung);
