const prompt = require('prompt-sync')({});

let bil1 = Number(prompt('Masukan angka pertama : '))
let bil2 = Number(prompt('Masukan angka kedua   : '))
let bil3 = Number(prompt('Masukan angka ketiga  : '))

let bil_besar;
if (bil1 > bil2 && bil1 > bil3)
    bil_besar = bil1
else if (bil2 > bil1 && bil2 > bil3)
    bil_besar = bil2
else if (bil3 > bil1 && bil3 > bil2)
    bil_besar = bil3

let bil_tengah;
if (bil1 < bil_besar)
    bil_tengah = bil1
else if (bil2 < bil_besar)
    bil_tengah = bil2
else if (bil3 < bil_besar)
    bil_tengah = bil3

let bil_kecil;
if (bil1 < bil_tengah)
    bil_kecil = bil1
else if (bil2 < bil_tengah)
    bil_kecil = bil2
else if (bil3 < bil_tengah)
    bil_kecil = bil3

console.log(`
${bil_besar},${bil_tengah},${bil_kecil}`)