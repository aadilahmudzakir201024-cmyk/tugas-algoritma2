const prompt = require('prompt-sync')({});

let tinggi = Number(prompt('Masukan tinggi badan (cm) : '));
let berat = Number(prompt('Masukan berat badan (kg) : '))
let proses1 = tinggi - 100
let proses2 = 10/100 * proses1
let ideal = proses1 - proses2
let selisih = berat - ideal

let hasil;
if(berat >= ideal - 2 && berat <= ideal + 2)
    hasil = 'Ideal'
else
    hasil = 'Tidak ideal'

console.log(`
Berat badan anda ${hasil}`)