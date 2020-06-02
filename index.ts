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

// filter
// membuat array baru dari sebuah array yang memenuhi kondisi tertentu
const angkaBaru = angkaArr.filter((value) => value > 3);
console.log(angkaBaru);

const kataBaru = kataArr.filter((value) => value.length > 4);
console.log(kataBaru);

const siswaLulus = siswaArr.filter((siswa) => siswa.nilai > 70);
console.log(siswaLulus);
