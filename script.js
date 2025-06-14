//complete this code
class Animal {
	  constructor(species:string){
		  this.species = species
	  }

	  get species(): string{
		  return this.species;
	  }

	makeSound(){
		console.log(`The ${this.species} makes a sound`);
	}
}

class Dog extends Animal {
	purr(): void{
		console.log("purr")
	}
}

class Cat extends Animal {
	bark():void {
		console.log("woof")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
