var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 

let i = 1
let waktu = 10000

function baca(waktu, buku) {
    if (waktu > 1000) {
        readBooksPromise(waktu, buku)
            .then(function (sisa) {
                baca(sisa, books[i])
                i++
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }
}

// Tanya Mom untuk menagih janji
baca(waktu, books[0])
