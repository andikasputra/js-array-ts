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

// foreach
// angkaArr.forEach((value, index, arr) => {
//   // console.log("nilai value", value);
//   // console.log("nilai index", index);
//   // console.log("nilai arr", arr);
//   if (index + 1 < arr.length) {
//     console.log(value + arr[index + 1]);
//     console.log("--------");
//   }
// });

// kataArr.forEach((data, i, arraynya) => {
//   if (i + 1 < arraynya.length) {
//     console.log(data + arraynya[i + 1]);
//     console.log("--------");
//   }
// });

// siswaArr.forEach((siswa, index, arr) => {
//   // console.log(siswa);
//   if (index + 1 < arr.length) {
//     const nilaiRataRata = (siswa.nilai + arr[index + 1].nilai) / 2;
//     console.log(
//       "Rata-rata nilai ",
//       siswa.nama + " dan " + siswaArr[index + 1].nama
//     );
//     console.log(nilaiRataRata);
//   }
// });

// map
// const angkaBaruArr = angkaArr.map((value, index, arr) => {
//   if (index + 1 < arr.length) {
//     console.log(value + arr[index + 1]);
//     console.log("--------");
//     return value + arr[index + 1];
//   }
// });
// console.log(angkaArr);
// console.log(angkaBaruArr);
// const kataBaruArr = kataArr.map((value, index, arr) => {
//   if (index + 1 < arr.length) {
//     console.log(value + " " + arr[index + 1]);
//     console.log("--------");
//     return value + " " + arr[index + 1];
//   }
// });
// console.log(kataArr);
// console.log(kataBaruArr);
const siswaBaruArr = siswaArr.map((value, index, arr) => {
  if (index + 1 < arr.length) {
    const nilaiRataRata = (value.nilai + arr[index + 1].nilai) / 2;
    const siswaBaru = {
      nama: value.nama + " " + arr[index + 1].nama,
      nilaiRataRata,
    };
    // console.log(value + " " + arr[index + 1]);
    // console.log("--------");
    return siswaBaru;
  }
});
console.log(siswaArr);
console.log(siswaBaruArr);
