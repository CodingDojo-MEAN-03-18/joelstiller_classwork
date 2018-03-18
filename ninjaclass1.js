// Assignment: Ninja Class
// Create a new class called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// The Ninja class should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's Strength and Speed, as well as their health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs

function Ninja (name) {
    this.name = name;
    this.health = 100;
    let strength = 3;
    let speed = 3;

    this.drinkSake = function() {
        this.health += 10;
    }
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!")
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
ninja1.drinkSake();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"