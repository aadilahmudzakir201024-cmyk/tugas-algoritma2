const prompt = require('prompt-sync')({});

let tahun = Number(prompt('Masukan tahun : '));
let bulan = Number(prompt('Masukan bulan : '));

// menentukan apakah tahun ini kabisat / tidak untuk bulan februari (2)
let kabisat;
if (tahun % 400 == 0) {
    kabisat = 'kabisat' }
else if (tahun % 100 == 0) {
    kabisat = 'bukan' }
else if (tahun % 4 == 0) {
    kabisat = 'kabisat' }
else {
    kabisat = 'bukan' }

// menentukan jumlah hari
let bulan2;
switch (bulan) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        bulan2 = 31
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        bulan2 = 30
        break;

    case 2:
        if (kabisat == 'kabisat') {
            bulan2 = 29 }
        else {
            bulan2 = 28 }
        break;

    default:
        bulan2 = 'Bulan tidak valid';
}

console.log(`Jumlah hari : ${bulan2}`);