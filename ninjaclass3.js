// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.
// ES6 version


class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.strength = 3;
        this.speed = 3;
    }
    sayName(){
        console.log(`My name is ${this.name}`);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Strength: ${this.strength}, Speed: ${this.speed}`);
    }
    drinkSake() {
        this.health += 10;
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("It is better to be a warrior in a garden, than be a gardener in war.");
    }

}
let ninja1 = new Ninja('Joel');
ninja1.sayName();
ninja1.showStats();

const master = new Sensei("Master Yoda");
master.sayName();
master.speakWisdom();
master.showStats();