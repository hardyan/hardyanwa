// soal 1

const phi = 22 / 7
let lLingkaran = (r) => {
    let L = phi * (r * r)
    return L
}
let KLingkaran = (r) => {
    let K = 2 * phi * r
    return K
}
console.log(`Luas Lingkaran : ${lLingkaran(10)}`)
console.log(`Keliling Lingkaran : ${KLingkaran(8)}`)
console.log(' ')

// soal 2

let kalimat    = ""
let funKalimat =  (kalimat) => {
    kalimat = {
        satu  : "saya",
        dua  : "adalah",
        tiga : "seorang",
        empat : "frontend",
        lima : "developer"
    }
    const { satu, dua, tiga, empat, lima } = kalimat
    console.log(`${satu} ${dua} ${tiga} ${empat} ${lima}`)
}
funKalimat(kalimat)
console.log(' ')

// soal 3

const newFunction = (firstName, lastName) => {
    return {
        firstName: firstName,
        lastName : lastName,
        fullName : (() => {
            console.log(firstName + " " + lastName)
        })
    }
}

newFunction("William", "Imoh").fullName()
console.log(' ')

// soal 4

const newObject = {
    firstName  : "Harry",
    lastName   : "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation : "Deve-wizard Avocado",
    spell      : "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation } = newObject
console.log(firstName, lastName, destination, occupation)
console.log(' ')

// soal 5

const west     = ["Will", "Chris", "Sam", "Holly"]
const east     = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
console.log(combined)
console.log(' ')
