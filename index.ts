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

// length
// console.log(angkaArr.length);
// console.log(kataArr.length);
// console.log(siswaArr.length);

// pop
// console.log(angkaArr);
// const terakhir = angkaArr.pop();
// console.log(terakhir);
// console.log(angkaArr);
// console.log(angkaArr.length);

// console.log(kataArr);
// const terakhir = kataArr.pop();
// console.log(terakhir);
// kataArr.pop();
// console.log(kataArr);
// console.log(kataArr.length);

// console.log(siswaArr);
// const terakhir = siswaArr.pop();
// console.log(terakhir);
// siswaArr.pop();
// console.log(siswaArr);
// console.log(siswaArr.length);

// push
// console.log(angkaArr);
// angkaArr.push(7, 9);
// console.log(angkaArr);
// console.log(kataArr);
// kataArr.push("pintar", "cerdas");
// console.log(kataArr);
console.log(siswaArr);
const siswaBaru = { id: 8, nama: "Agus", nilai: 40 };
siswaArr.push(siswaBaru, { id: 1, nama: "Dian", nilai: 100 });
console.log(siswaArr);
