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
// find
// mencari data di dalam array yang memenuhi kondisi tertentu
// tidak menghasilkan array baru
// menghasilkan satu buah data dari array
const angkaGanjilPertama = angkaArr.find((angka) => angka % 2 === 1);
console.log(angkaGanjilPertama);
const kataPendek = kataArr.find((value) => value.length < 4);
console.log(kataPendek);
const siswaCerdas = siswaArr.find((siswa) => siswa.nilai >= 80);
console.log(siswaCerdas);
