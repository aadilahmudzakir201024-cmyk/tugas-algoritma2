const prompt = require('prompt-sync')({ sigint: true });

let jam = Number(prompt('Masukan jumlah jam kerja dalam seminggu : '));
let gol = String(prompt('Masukan golongan karyawan anda (A,B,C,D): '));

let upah=total=0

// menentukan upah lembur lewat golongan karyawan
upah;
if (gol === 'A') {
    upah = 4000; } 
else if (gol === 'B') {
    upah = 5000; } 
else if (gol === 'C') {
    upah = 6000; } 
else if (gol === 'D') {
    upah = 7500; }

// menghitung total gaji dengan mengecek apakah jumlah lebih dari 48 jam
total;
if (jam > 48) {
    total = (48 * upah) + ((jam - 48) * 3000);
} else {
    total = jam * upah;
}

// mengecek apakah golongan terdapat pada ketentuan
if(gol === 'A' || gol === 'B' || gol === 'C' || gol === 'D') {
    console.log(`Total upah mingguan : ${total}`);}
else
    console.log('EROR: Golongan tidak tersedia')