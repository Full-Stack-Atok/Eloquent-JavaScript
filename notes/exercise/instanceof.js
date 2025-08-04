/*
🧪 Exercise #1: Basic instanceof Check
🧠 Goal:
Learn how to check if an object is an instance of a class using instanceof.

💡 Hints:
Create a class Person.

Create an object using new Person("Name").

Use the instanceof operator to check if the object is an instance of Person.

Also try checking if it’s an instance of Object.
*/

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const person1 = new Person("Shiela");

// console.log(person1 instanceof Person);
// console.log(person1 instanceof Object);

/*
🔍 Exercise #2 Hint (Beginner-Friendly):
You're going to:

Create a Vehicle class.

Create a Car class that extends Vehicle.

Then you'll make a new Car instance.

Finally, check whether that instance is:

an instance of Car

an instance of Vehicle

an instance of Object
*/

// class Vehicle {
//   constructor(type) {
//     this.type = type;
//   }
// }

// class Car extends Vehicle {
//   constructor(brand) {
//     super(brand);
//   }
// }

// const car1 = new Car("Toyota");

// console.log(car1 instanceof Car);
// console.log(car1 instanceof Vehicle);
// console.log(car1 instanceof Object);

/**
🔍 Exercise #3 — instanceof with Unrelated Classes
(Beginner-friendly but slightly more thoughtful)

This time, you’ll work with two unrelated classes. The goal is to test how instanceof behaves when there’s no inheritance relationship. 
*/

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Computer {
  constructor(brand) {
    this.brand = brand;
  }
}

const pet = new Animal("Buddy");
const laptop = new Computer("Apple");

console.log(pet instanceof Animal);
console.log(pet instanceof Computer);

console.log(laptop instanceof Computer);
console.log(laptop instanceof Animal);
