const prompt = require('prompt-sync')({});

let total_belanja = Number(prompt('Masukan nilai total belanja : '))
let diskon = total_belanja * 10/100 // total diskon

// menentukan apakah total belanjanya mendapatkan diskon / tidak
let total;
if (total_belanja > 100000)
    total = total_belanja - diskon
else
    total = total_belanja

console.log(`
Total pembayaran : ${total}`)