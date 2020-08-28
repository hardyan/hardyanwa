// soal 1

var flag = 1;
console.log('LOOPING PERTAMA');
while (flag <= 20) {
    flag = 1 + flag
    console.log((flag) + ' - I love coding');
    flag++;
}
var deret = 21;
console.log('LOOPING KEDUA');
while (deret >= 2) {
    deret = deret - 1
    console.log((deret) + ' - I will become a frontend developer');
    deret--;
}

// soal 2

var str = '';
for (var angka = 1; angka <= 20; angka++) {
    if (angka % 3 === 0 && angka % 2 === 1) {
        str = ' - I Love Coding'
    } else if (angka % 2 === 1) {
        str = ' - Santai'
    } else if (angka % 2 === 0) {
        str = ' - Berkualitas'
    }
    console.log(angka + str);
}

// soal 3

var tagar = '';
for (var angka = 1; angka <= 7; angka++) {
    tagar = tagar + '#';
    console.log(tagar);
}

// soal 4

var kalimat = "saya sangat senang belajar javascript"
console.log(kalimat.split(' '))

// soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var urut       = daftarBuah.sort()
for (let index = 0; index < urut.length; index++) {
    var buah = urut[index];
    console.log(buah)
}
