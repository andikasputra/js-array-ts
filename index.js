var angkaArr = [0, 1, 2, 3, 4, 9, 2, 0];
var kataArr = ["aku", "dia", "mereka", "kami"];
var siswaArr = [
    {
        id: 1,
        nama: "Andika",
        nilai: 80
    },
    {
        id: 2,
        nama: "Wulandari",
        nilai: 76
    },
    {
        id: 3,
        nama: "Fitri",
        nilai: 90
    },
    {
        id: 4,
        nama: "Januar",
        nilai: 54
    },
];
// filter
// membuat array baru dari sebuah array yang memenuhi kondisi tertentu
var angkaBaru = angkaArr.filter(function (value) { return value > 3; });
console.log(angkaBaru);
var kataBaru = kataArr.filter(function (value) { return value.length > 4; });
console.log(kataBaru);
var siswaLulus = siswaArr.filter(function (siswa) { return siswa.nilai > 70; });
console.log(siswaLulus);
