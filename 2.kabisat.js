const prompt = require('prompt-sync')({sigint:true});

let tahun = Number(prompt('Masukan angka tahun : '))

// menentukan tahun kabisat atau bukan
let kabisat;
if (tahun % 400 == 0) { 
    kabisat = 'adalah tahun kabisat' }
else if (tahun % 100 == 0) { 
    kabisat = 'bukan tahun kabisat' }
else if (tahun % 4 == 0) { 
    kabisat = 'adalah tahun kabisat' }
else {
    kabisat = 'bukan tahun kabisat' }

console.log(`
Tahun ${tahun} ${kabisat}`)