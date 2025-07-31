class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  checkPassword(input) {
    if (input === this._password) {
      console.log(`Access granted.`);
    } else {
      console.log(`Access denied.`);
    }
  }
}

const user1 = new User("sherwin", "1234");
user1.checkPassword("0000");

class SecureUser {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  checkPassword(input) {
    if (input === this.#password) {
      console.log(`Access granted.`);
    }
  }

  getPassword() {
    console.log("Access denied to private property.");
  }
}

const user2 = new SecureUser("shiela", "1234");
user2.checkPassword("1234");
user2.getPassword();
console.log(user2.#password);

class Wallet {
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  addMoney(amount) {
    this.#balance += amount;
  }

  spendMoney(amount) {
    if (this.#balance < amount) {
      console.log(`Insufficient balance`);
    } else {
      this.#balance -= amount;
      console.log(`(Subtracts ₱${amount})`);
    }
  }

  checkBalance() {
    console.log(this.#balance);
  }
}

const w = new Wallet("shiela");
w.addMoney(1000);
w.checkBalance();
w.spendMoney(1200);
w.spendMoney(300);
w.checkBalance();
