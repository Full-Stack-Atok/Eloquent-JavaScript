class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person1 = new Person("Sherwin", 23);
person1.introduce();

class Citizen {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  canVote() {
    if (this.age >= 18) {
      console.log(`${this.name} is eligible to vote.`);
    } else {
      console.log(`${this.name} is not eligible to vote.`);
    }
  }
}

const c1 = new Citizen("Shiela", 17);
c1.canVote();
const c2 = new Citizen("Sherwin", 22);
c2.canVote();

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ₱${amount}. New balance is ₱${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew ₱${amount}. New balance is ₱${this.balance}.`);
    } else {
      console.log(`Insufficient funds. Current balance is ₱${this.balance}`);
    }
  }
}

const acc = new BankAccount("Sherwin", 1000);

acc.deposit(500);
acc.withdraw(2000);
acc.withdraw(1000);
