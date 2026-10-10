const prompt = require('prompt-sync')({})

let pixel = Number(prompt('Masukan jumlah pixel : '))

// proses clipping
let proses;
let clipping;
if(pixel > 255) { // mengecek apakah jumlah pixel lebih dari 255
    proses = pixel - 255
    clipping = pixel - proses }
else if(pixel < 0) { // mengecek apakah jumlah pixel kurang dari 0
    clipping = 0 }
else {
    clipping = pixel } // untuk jumlah pixel 0 - 255

console.log(`
Hasil potong (Clipping) : ${clipping}`)