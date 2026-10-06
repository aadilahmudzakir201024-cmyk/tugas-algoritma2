const prompt = require('prompt-sync')({});

let nilai = Number(prompt('Masukan nilai ujian anda : '))

let indeks;
if (nilai >= 80)
    indeks = 'A'
else if (70 <= nilai < 80)
    indeks = 'B'
else if (55 <= nilai < 70)
    indeks = 'C'
else if (40 <= nilai < 55)
    indeks = 'D'
else
    indeks = 'E'

console.log(`
Nilai ujian anda adalah indeks ${indeks} `)