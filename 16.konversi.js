const promprt = require('prompt-sync')({sigint:true});

let string = (promprt(String('Masukan angka 0-9 : ')))

// mengonversi dari string ke integer dengan (parseInt)
let ket;
let hasil = parseInt(string)
if(hasil >= 0 && hasil < 10) {
    hasil = string
    ket = 'Memenuhi ketentuan' }
else {
    hasil = -99 
    ket = 'Angka ini tidak memenuhi ketentuan!!'}

console.log(`Hasil konversi '${string}' : ${hasil}, ${ket} `)