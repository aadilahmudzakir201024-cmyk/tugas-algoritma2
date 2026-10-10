const prompt = require('prompt-sync')({});

let hh = Number(prompt('Masukan jam (hh)   : '))
let mm = Number(prompt('Masukan menit (mm) : '))
let ss = Number(prompt('Masukan detik (ss) : '))

const JAM_KE_DETIK = 3600
const MENIT_KE_DETIK = 60

// mengonversi dari jam, menit ke detik
const JAM_LAMA = hh * JAM_KE_DETIK + mm * MENIT_KE_DETIK + ss
const JAM_BARU = JAM_LAMA + 1 // menambahkan satu detik

let jam = menit = sisa = 0

// mengembalikan dari detik ke jam, menit
jam = parseInt(JAM_BARU / JAM_KE_DETIK) % 24 // dikasih mod agar jika hasil konversi 24jam maka akan diubah ke 00jam
sisa = JAM_BARU % JAM_KE_DETIK 

menit = parseInt(sisa / MENIT_KE_DETIK)
sisa %= MENIT_KE_DETIK

// menambahkan Angka 0 jika hasil jam, menit, dan detik dibawah 10
jam = jam < 10 ? '0' + jam : jam
menit = menit < 10 ? '0' + menit : menit
sisa = sisa < 10 ? '0' + sisa : sisa

console.log(`${jam}:${menit}:${sisa}`)