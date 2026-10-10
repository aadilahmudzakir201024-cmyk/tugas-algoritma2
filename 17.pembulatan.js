const prompt = require('prompt-sync')({});

let jumlahbelanja = Number(prompt('Masukan Jumlah belanja : '))

// membulatkan bilangan Jumlahbelanja
let hasilakhir;
let hasil;
if(jumlahbelanja % 25 == 0 || jumlahbelanja % 50 == 0 || jumlahbelanja % 100 == 0) {
    hasilakhir = jumlahbelanja }
else {
    hasil = parseInt(jumlahbelanja / 25)
    hasilakhir = hasil * 25 }

console.log(`
Jumlah harga belanja yang harus dibayar : ${hasilakhir}`)