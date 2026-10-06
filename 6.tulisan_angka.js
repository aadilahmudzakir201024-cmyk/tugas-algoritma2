const prompt = require('prompt-sync')({});

let bil = Number(prompt('Masukan angka 1-4 : '))

switch (bil) {
    case 1:
        console.log('Satu')
        break;
    case 2:
        console.log('Dua')
        break;
    case 3:
        console.log('Tiga')
        break;
    case 4:
        console.log('Empat')
        break;
    default: console.log('Angka yang anda masukan salah')
        break;
}