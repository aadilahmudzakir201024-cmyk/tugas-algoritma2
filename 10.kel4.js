const prompt = require('prompt-sync')({});

let bil = Number(prompt('Masukan bilangan bulat (+) : '))

// menentukan apakah bilangan ini termasuk kelipatan 4 atau bukan
if (bil % 4 == 0)
    console.log('Bilangan ini kelipatan 4')
else 
    console.log('Bilangan ini bukan kelipatan 4')