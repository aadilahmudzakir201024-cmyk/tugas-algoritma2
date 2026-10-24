const prompt = require('prompt-sync')({});

let nilai = Number(prompt('Masukan nilai ujian anda : '))

// menentukan indeks sesuai nilai ujian
let indeks;
if (nilai >= 80)
    indeks = 'A'
else if (nilai >= 70)
    indeks = 'B'
else if (nilai >= 55)
    indeks = 'C'
else if (nilai >= 40)
    indeks = 'D'
else
    indeks = 'E'

console.log(`
Nilai ujian anda adalah indeks ${indeks} `)