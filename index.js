class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        console.log('(drinks sake...)')
        this.health += 10
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake()
        console.log('Sake it to me!')
    }
}
const ninja = new Ninja("Hyabusa");
ninja.showStats();
const sensei = new Sensei("Master Splinter");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();