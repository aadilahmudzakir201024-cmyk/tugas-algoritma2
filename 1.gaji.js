const prompt = require('prompt-sync')({sigint:true});

let jam = Number(prompt('Masukan jumlah jam kerja dalam seminggu : '))

// upah kerja normal 2000/jam
// upah kerja lembur 3000/jam

const JAM_NORMAL = 48 * 2000

let TOTAL_UPAH;
if (jam > 48) {
    JAM_LEMBUR = (jam - 48) * 3000
    TOTAL_UPAH = JAM_NORMAL + JAM_LEMBUR
    }
else {
    TOTAL_UPAH = jam * 2000
    }

console.log(`
Total upah mingguan : ${TOTAL_UPAH}`) 