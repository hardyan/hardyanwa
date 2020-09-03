// di index.js
var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini

let i = 1
let waktu = 10000
function baca(waktu, buku) {
    if (waktu > 0) {
    readBooks(waktu, buku, (sisa) => {
            baca(sisa, books[i])
            i++
        })
    }
}
baca(waktu, books[0])
