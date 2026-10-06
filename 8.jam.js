const prompt = require('prompt-sync')({});

let hh = Number(prompt('Masukan jam (hh)   : '))
let mm = Number(prompt('Masukan menit (mm) : '))
let ss = Number(prompt('Masukan detik (ss) : '))

const JAM_KE_DETIK = 3600
const MENIT_KE_DETIK = 60

const JAM_LAMA = hh * JAM_KE_DETIK + mm * MENIT_KE_DETIK + ss
const JAM_BARU = JAM_LAMA + 1

let jam = menit = sisa = 0

jam = (JAM_BARU / JAM_KE_DETIK) % 24
sisa = JAM_BARU % JAM_KE_DETIK 

menit = (sisa / MENIT_KE_DETIK)
sisa %= MENIT_KE_DETIK

jam = jam < 10 ? '0' + jam : jam
menit = menit < 10 ? '0' + menit : menit
sisa = sisa < 10 ? '0' + sisa : sisa

console.log(`${jam}:${menit}:${sisa}`)