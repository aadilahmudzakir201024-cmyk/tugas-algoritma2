const prompt = require('prompt-sync')({})

let angka1 = Number(prompt('Masukan Angka 1 (+) : '))
let angka2 = Number(prompt('Masukan Angka 2 (+) : '))

// mengubah dari angka biasa ke romawi
let hangka1;
let hangka2;
if(angka1 == 0) {
    switch (angka2) { // untuk angka 1 - 10
        case 1:
            hangka1 = ' '
            hangka2 = 'I'
            break;
        case 2:
            hangka1 = ' '
            hangka2 = 'II'
            break;
        case 3:
            hangka1 = ' '
            hangka2 = 'III'
            break;
        case 4:
            hangka1 = ' '
            hangka2 = 'IV'
            break;
        case 5:
            hangka1 = ' '
            hangka2 = 'V'
            break;
        case 6:
            hangka1 = ' '
            hangka2 = 'VI'
            break;
        case 7:
            hangka1 = ' '
            hangka2 = 'VII'
            break;
        case 8:
            hangka1 = ' '
            hangka2 = 'VIII'
            break;
        case 9:
            hangka1 = ' '
            hangka2 = 'IX'
            break;
        case 10:
            hangka1 = ' '
            hangka2 = 'X'
            break;
        } }
else if(angka1 === 4 && angka2 === 0) {
    hangka1 = ' X'
    hangka2 = 'L' }
else if(angka1 === 9 && angka2 === 0) { // khusus untuk angka 40 dan 90
    hangka1 = ' X'
    hangka2 = 'C' }
else if(angka1 >= angka2 || angka1 <= angka2) { // untuk angka 11 - 99
    switch (angka1) { 
        case 1:
            hangka1 = ' X'
            break;
        case 2:
            hangka1 = ' XX'
            break;
        case 3:
            hangka1 = 'XXX'
            break;
        case 4:
            hangka1 = ' XL'
            break;
        case 5:
            hangka1 = ' L'
            break;
        case 6:
            hangka1 = ' LX'
            break;
        case 7:
            hangka1 = ' LXX'
            break;
        case 8:
            hangka1 = ' LXXX'
            break;
        case 9:
            hangka1 = ' XC'
            break;
        } 
        switch (angka2) {
        case 1:
            hangka2 = 'I'
            break;
        case 2:
            hangka2 = 'II'
            break;
        case 3:
            hangka2 = 'III'
            break;
        case 4:
            hangka2 = 'IV'
            break;
        case 5:
            hangka2 = 'V'
            break;
        case 6:
            hangka2 = 'VI'
            break;
        case 7:
            hangka2 = 'VII'
            break;
        case 8:
            hangka2 = 'VIII'
            break;
        case 9:
            hangka2 = 'IX'
            break;
        } }


console.log(`Angka romawi :${hangka1}${hangka2}`)