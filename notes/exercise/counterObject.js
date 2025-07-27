/*
ENCAPSULATION!
🔒 Exercise 1: Counter Object
Create a Counter class that maintains an internal count.

Requirements:

The count should not be directly accessible or modifiable from outside.

The class should provide the following methods:

increment() — increases the count by 1.

decrement() — decreases the count by 1.

getValue() — returns the current count.
*/

class counter {
  #privateField;
  constructor(value) {
    this.#privateField = value;
  }

  increment() {
    this.#privateField++;
    return console.log(`Increment: ${this.#privateField}`);
  }

  decrement() {
    this.#privateField--;
    return console.log(`Decrement: ${this.#privateField}`);
  }

  getValue() {
    this.#privateField;
    return console.log(`Current value: ${this.#privateField}`);
  }
}

let object = new counter(5);

object.increment();
object.getValue();
object.decrement();
object.value = 1000;
object.getValue();
