/*
🔁 Exercise 1: Basic Class Inheritance
📝 Task:
Create a Person class with a greet() method. Then create a Student class that inherits from Person and adds a study() method.

🔍 Hint:

Use the extends keyword to inherit from a parent class.

The child class can still access methods from the parent.

Call super() inside the constructor of the child class.
*/

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hi, my name is ${this.name}`);
  }
}

class Student extends Person {
  constructor(name) {
    super(name);
  }

  study() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const per1 = new Student("Shiela");

per1.study();

/* 
🧪 Exercise 2: Add a New Property and Method in Subclass
You're given a Person class. Now, create a subclass called Teacher that:

Inherits from Person

Has an additional property called subject

Has a method called introduce() that logs something like:

Hi, I’m [name], and I teach [subject].
🔹 Instantiate an object from Teacher with the name "Mr. Cruz" and subject "Math"
🔹 Then call the introduce() method.

💡 Hint:
You'll need to pass both name and subject to the Teacher constructor.

Remember how super() works with inherited properties.
*/

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  introduce() {
    console.log(`Hi! I'm ${this.name} and I teach ${this.subject}.`);
  }
}

const teacher1 = new Teacher("Sherwin", "Math");

teacher1.introduce();

/*
🧩 Exercise #3: Animal and Dog Classes
🔍 Goal:
Create a base Animal class that has a name and a speak() method.
Then, create a Dog class that inherits from Animal and adds a bark() method.

💡 Hints:
Use class Animal {} and give it a constructor(name) and a method speak().

Use class Dog extends Animal {} to inherit from Animal.

Call super(name) in the Dog constructor to pass the name to the parent.

Add a bark() method that prints something like "Woof! I am [name]!".

Create an instance of Dog and try calling both speak() and bark().
*/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`This ${this.name} speaks`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  bark() {
    console.log(`Woof! I am ${this.name}`);
  }
}

const dog1 = new Dog("Golden Retriever");
dog1.speak();
dog1.bark();
