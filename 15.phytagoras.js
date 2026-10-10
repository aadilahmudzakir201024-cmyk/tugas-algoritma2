const promprt = require('prompt-sync')({sigint:true});

console.log('Ketentuan (a <= b <= c)')
let a = Number(promprt('Masukan panjang sisi a : '))
let b = Number(promprt('Masukan panjang sisi b : '))
let c = Number(promprt('Masukan panjang sisi c : '))

// menentukan jenis segitiga
let segitiga
if(a <= b && b <= c) { // mengecek apakah sudah sesuai ketentuan
    if((a * a) + (b * b) == c * c) {
        segitiga = 'siku-siku' }
    else if(c * c < a * a + b * b) { // menentukan jenis segitiga
        segitiga = 'lancip' }
    else if(c * c > a * a + b * b) {
        segitiga = 'tumpul' } }
else {
    segitiga = 'tidak terdeteksi' }

console.log(`
Dengan ketentuan;
Panjang a = ${a}
Panjang b = ${b}
Panjang c = ${c}
Bisa kita simpulkan ini adalah Segitiga ${segitiga}`)