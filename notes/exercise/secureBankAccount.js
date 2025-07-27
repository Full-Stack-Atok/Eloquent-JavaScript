/*
🔐 Exercise 2: Secure Bank Account. 
🧾 Objective:
Build a secure bank account using encapsulation so that sensitive data like the balance and PIN cannot be accessed or changed directly from the outside.

✅ Requirements Recap:
Create a function createAccount(pin, initialBalance) that returns an object representing the account.

The returned object should expose the following methods:

Public Methods:
checkBalance(pinInput)
 → Returns balance only if the PIN is correct.

deposit(pinInput, amount)
 → Adds to balance if PIN is correct and amount is valid.

withdraw(pinInput, amount)
 → Subtracts from balance if PIN is correct and funds are sufficient.

changePin(oldPin, newPin)
 → Changes PIN if the old one is correct.

🔒 Encapsulation Rules:
The balance and pin must be private.

There should be no way to access or modify them outside the provided methods.

💡 Hint:
Use a closure (function + let) to keep variables private.
Avoid class here — we'll use it in a later exercise.
*/

function createAccount(pin, initialBalance) {
  let balance = initialBalance;

  return {
    checkBalance(pinInput) {
      if (pinInput === pin) {
        return console.log(balance);
      } else {
        return console.log("Incorrect pin!");
      }
    },
    deposit(pinInput, amount) {
      if (pinInput === pin) {
        balance += amount;
        return console.log(`Amount deposited: ${amount}`);
      } else {
        return console.log("Incorrect pin!");
      }
    },
    withdraw(pinInput, amount) {
      if (pinInput === pin) {
        balance -= amount;
        return console.log(
          `${amount} is withdrawn from ${balance} \nRemaining balance: ${balance}`
        );
      } else {
        return console.log("Incorrect pin!");
      }
    },
    changePin(oldPin, newPin) {
      if (pin !== oldPin) {
        return console.log("Incorrect pin!");
      } else {
        pin = newPin;
        return console.log("Pin is changed.");
      }
    },
  };
}

let johnAccount = createAccount(1111, 1500);
johnAccount.checkBalance(1111);
johnAccount.deposit(1111, 5000);
johnAccount.checkBalance(1111);
johnAccount.withdraw(1111, 500);
johnAccount.changePin(1111, 1112);
johnAccount.checkBalance(1112);

console.log(johnAccount.balance);
console.log(johnAccount.pin)