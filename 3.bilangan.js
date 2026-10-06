const prompt = require('prompt-sync')({sigint:true});

let bil = Number(prompt('Masukan bilangan bulat : '))

let hasil;
if (bil > 0)
    hasil = 'bilangan positif (+)'
else if (bil < 0)
    hasil = 'bilangan negatif (-)'
else if (bil == 0)
    hasil = 'nol (0)'

console.log(`
Bilangan ${bil} adalah ${hasil}`)