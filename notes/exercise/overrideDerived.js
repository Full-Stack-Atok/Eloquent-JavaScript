// class Animal {
//   speak() {
//     console.log(`This animal makes a sound.`);
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("This dog barks.");
//   }
// }

// const generic = new Animal();
// generic.speak();

// const dog = new Dog();
// dog.speak();

// class Vehicle {
//   constructor(type, wheels) {
//     this.type = type;
//     this.wheels = wheels;
//   }

//   describe() {
//     console.log(`This is a ${this.type} with ${this.wheels} wheels.`);
//   }
// }

// class Car extends Vehicle {
//   constructor() {
//     super("Car", 4);
//   }
// }

// const myCar = new Car();
// myCar.describe();

class Employee {
  constructor(name) {
    this.name = name;
  }

  work() {
    console.log(`log: Employee ${this.name} is working`);
  }
}

class Manager extends Employee {
  constructor(name) {
    super(name);
  }

  work() {
    super.work(this.name);
    console.log(`Log: Manager ${this.name} is supervising`);
  }
}

const m = new Manager("Sherwin");
m.work();
