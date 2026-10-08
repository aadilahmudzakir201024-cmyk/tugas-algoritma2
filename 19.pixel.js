const prompt = require('prompt-sync')({})

let pixel = Number(prompt('Masukan jumlah pixel : '))

let proses;
let clipping;
if(pixel > 255) {
    proses = pixel - 255
    clipping = pixel - proses }
else if(pixel < 0) {
    clipping = 0 }
else {
    clipping = pixel }

console.log(`
Hasil potong (Clipping) : ${clipping}`)