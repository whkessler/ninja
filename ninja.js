class Ninja{
    constructor(ninjaName, health=0, speed=3, strength=3){
        this.name = ninjaName;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`This Ninja's name is ${this.name}`);
    }
    showStats() {
        console.log(`${this.name} has Health: ${this.health}, Speed: ${this.speed}, and Strength: ${this.strength}.`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`${this.name} drank sake and now has Health: ${this.health}.`)
    }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();