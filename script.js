class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species; // ✅ Assign to private field
  }

  get species(): string {
    return this._species; // ✅ Return the private field
  }

  makeSound(): void {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Cat = Cat;
window.Dog = Dog;
