const prompt = require('prompt-sync')({sigint:true});

let x = Number(prompt('Masukan nilai x : '))
let y = Number(prompt('Masukan nilai y : '))

// menentukan posisi kuadran
let kuadran;
if (x > 0 && y > 0)
    kuadran = 'Kuadran I'
else if (x < 0 && y > 0)
    kuadran = 'Kuadran II'
else if (x < 0 && y < 0)
    kuadran = 'Kuadran III'
else if (x > 0 && y < 0)
    kuadran = 'Kuadran IV'
else
    kuadran = 'Tidak terletak di kuadran manapun'

console.log(`
Titik kordinat ${x},${y} berada pada ${kuadran}`)