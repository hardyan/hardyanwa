// soal 1

// Release 0
class Animal {
    constructor(name, legs = 4, cold_blooded = false) {
        this._name = name;
        this._legs = legs;
        this._cold_blooded = cold_blooded;
    }
    get name() {
        return this._name;
    }
    set name(x) {
        this._name = x;
    }
    get legs() {
        return this._legs;
    }
    set legs(x) {
        this._legs = x;
    }
    get cold_blooded() {
        return this._cold_blooded;
    }
    set cold_blooded(x) {
        this._cold_blooded = x;
    }
}

var sheep = new Animal("shaun");

console.log(`nama: ${sheep.name}`)
console.log(`jumlah kaki: ${sheep.legs}`) 
console.log(`berdarah dingin: ${sheep.cold_blooded}`)
console.log(" ")

// Release 1
class Ape extends Animal {
    constructor(name, legs, cold_blooded) {
        super(name, legs, cold_blooded)
    }
    yell() {
        return 'Auooo';
    }
}
class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        return 'hop hop';
    }
}
var sungokong = new Ape("kera sakti")
sungokong.legs = 2
console.log(`nama: ${sungokong.name}`)
console.log(`suara: ${sungokong.yell()}`)
console.log(`jumlah kaki: ${sungokong.legs}`)
console.log(`berdarah dingin: ${sungokong.cold_blooded}`)
console.log(" ")

var kodok = new Frog("buduk")
kodok.cold_blooded = true
console.log(`nama: ${kodok.name}`)
console.log(`suara: ${kodok.jump()}`)
console.log(`jumlah kaki: ${kodok.legs}`)
console.log(`berdarah dingin: ${kodok.cold_blooded}`)
console.log(" ")

// soal 2
class Clock {
    constructor({ template }) {
        this.template = template
    }
    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    };

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    };

}

var clock = new Clock({ template: 'h:m:s' });
clock.start(); 
